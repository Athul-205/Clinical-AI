import React, { useState } from 'react';
import { initialPatientDirectory } from './data/patientRegistry';
import { Patient, MedicalReport, DoctorNote } from './types/hospital';
import { Header } from './components/layout/Header';
import { Sidebar } from './components/layout/Sidebar';
import { HospitalDashboard } from './components/dashboard/HospitalDashboard';
import { PatientDirectory } from './components/directory/PatientDirectory';
import { PatientProfileView } from './components/patient/PatientProfileView';
import { EmergencyMode } from './components/emergency/EmergencyMode';
import { RequestAccessModal } from './components/directory/RequestAccessModal';
import { ReportEvidenceViewer } from './components/modals/ReportEvidenceViewer';
import { MultiAgentStatusModal } from './components/modals/MultiAgentStatusModal';
import { UploadReportModal } from './components/modals/UploadReportModal';

export default function App() {
  const [patients, setPatients] = useState<Patient[]>(initialPatientDirectory);
  const [currentView, setCurrentView] = useState<'dashboard' | 'directory' | 'profile' | 'emergency'>('dashboard');
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
  const [activeProfileTab, setActiveProfileTab] = useState<string>('summary');

  // Modals State
  const [isRequestAccessOpen, setIsRequestAccessOpen] = useState(false);
  const [isAgentsModalOpen, setIsAgentsModalOpen] = useState(false);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  // Evidence Viewer State
  const [evidenceViewerState, setEvidenceViewerState] = useState<{
    isOpen: boolean;
    report: MedicalReport | null;
    snippet?: string;
    targetPage?: number;
  }>({
    isOpen: false,
    report: null,
    snippet: undefined,
    targetPage: 1
  });

  // Handle navigating to a patient profile
  const handleSelectPatient = (p: Patient, tab = 'summary') => {
    setSelectedPatient(p);
    setActiveProfileTab(tab);
    setCurrentView('profile');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle adding new patient from Consent OTP workflow
  const handleAccessGranted = (newPatient: Patient) => {
    setPatients((prev) => [newPatient, ...prev]);
    setIsRequestAccessOpen(false);
    handleSelectPatient(newPatient, 'summary');
  };

  // Handle opening evidence viewer
  const handleOpenEvidence = (reportOrSnippet: MedicalReport | string, targetPage?: number) => {
    if (typeof reportOrSnippet === 'string') {
      const p = selectedPatient || patients[0];
      // Try to find a report that matches the snippet or default to the latest report
      const rep = p.reports.find((r) =>
        r.summary.toLowerCase().includes(reportOrSnippet.toLowerCase().slice(0, 15)) ||
        r.findings.some(f => f.toLowerCase().includes(reportOrSnippet.toLowerCase().slice(0, 15)))
      ) || p.reports[0];

      setEvidenceViewerState({
        isOpen: true,
        report: rep || null,
        snippet: reportOrSnippet,
        targetPage: targetPage || 1
      });
    } else {
      setEvidenceViewerState({
        isOpen: true,
        report: reportOrSnippet,
        snippet: undefined,
        targetPage: targetPage || 1
      });
    }
  };

  // Handle report uploaded
  const handleReportProcessed = (newReport: MedicalReport, snippet: string) => {
    if (!selectedPatient) return;

    const updatedPatient: Patient = {
      ...selectedPatient,
      reports: [newReport, ...selectedPatient.reports],
      timeline: [
        {
          id: `tl-${Date.now()}`,
          date: newReport.date,
          monthYear: newReport.monthYear,
          title: `Uploaded: ${newReport.title}`,
          category: newReport.category === 'Laboratory' ? 'Lab Test' : 'Diagnosis',
          description: newReport.summary,
          evidenceSnippet: snippet,
          evidencePage: 1
        },
        ...selectedPatient.timeline
      ],
      overviewSummary: `${selectedPatient.overviewSummary} Latest update (${newReport.monthYear}): ${snippet}`
    };

    // Update in patient list and current selected patient
    setPatients((prev) => prev.map((p) => (p.id === updatedPatient.id ? updatedPatient : p)));
    setSelectedPatient(updatedPatient);
  };

  // Handle adding doctor note
  const handleAddDoctorNote = (note: DoctorNote) => {
    if (!selectedPatient) return;

    const updatedPatient: Patient = {
      ...selectedPatient,
      doctorNotes: [note, ...(selectedPatient.doctorNotes || [])]
    };

    setPatients((prev) => prev.map((p) => (p.id === updatedPatient.id ? updatedPatient : p)));
    setSelectedPatient(updatedPatient);
  };

  return (
    <div className="min-h-screen bg-[#f1f5f9] text-slate-800 flex flex-col font-sans antialiased selection:bg-blue-500 selection:text-white">
      {/* Top Dark Banner */}
      <div className="bg-[#0f172a] text-white px-6 py-2 flex flex-wrap justify-between items-center text-[11px] font-medium tracking-wide uppercase border-b border-slate-800 shrink-0 z-50">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Doctor Authenticated: Dr. Arjun
          </span>
          <span className="hidden sm:flex items-center gap-1.5 text-slate-400">|</span>
          <span className="hidden sm:flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Secure Medical Record Access Enabled
          </span>
        </div>
        <div className="bg-red-500/10 text-red-400 px-3 py-0.5 rounded border border-red-500/20 text-[10px] font-bold">
          Demo Mode: Simulated Healthcare Environment
        </div>
      </div>

      <div className="flex flex-1 min-h-0">
        {/* Left Sidebar (Desktop) */}
        <div className="hidden lg:flex shrink-0">
          <Sidebar
            currentView={currentView}
            onNavigate={(view) => {
              setCurrentView(view);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenAgentsModal={() => setIsAgentsModalOpen(true)}
            selectedPatientName={selectedPatient?.name}
          />
        </div>

        {/* Mobile Sidebar Overlay */}
        {isMobileSidebarOpen && (
          <div className="fixed inset-0 z-50 flex lg:hidden">
            <div 
              className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs" 
              onClick={() => setIsMobileSidebarOpen(false)}
            />
            <div className="relative z-10 flex shrink-0 shadow-2xl">
              <Sidebar
                currentView={currentView}
                onNavigate={(view) => {
                  setCurrentView(view);
                  setIsMobileSidebarOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                onOpenAgentsModal={() => {
                  setIsMobileSidebarOpen(false);
                  setIsAgentsModalOpen(true);
                }}
                selectedPatientName={selectedPatient?.name}
              />
            </div>
          </div>
        )}

        {/* Main Content Pane */}
        <div className="flex-1 flex flex-col min-w-0">
          <Header
            currentView={currentView}
            onNavigate={(view) => {
              setCurrentView(view);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenAgentsModal={() => setIsAgentsModalOpen(true)}
            selectedPatientName={selectedPatient?.name}
            onRequestAccess={() => setIsRequestAccessOpen(true)}
            onToggleMobileMenu={() => setIsMobileSidebarOpen(true)}
          />

          <main className="flex-1 overflow-y-auto max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-16">
            {currentView === 'dashboard' && (
              <HospitalDashboard
                onOpenDirectory={() => setCurrentView('directory')}
                onOpenEmergency={() => setCurrentView('emergency')}
                onOpenAgentsModal={() => setIsAgentsModalOpen(true)}
              />
            )}

            {currentView === 'directory' && (
              <PatientDirectory
                patients={patients}
                onSelectPatient={(p) => handleSelectPatient(p, 'summary')}
                onRequestAccess={() => setIsRequestAccessOpen(true)}
              />
            )}

            {currentView === 'profile' && selectedPatient && (
              <PatientProfileView
                patient={selectedPatient}
                initialTab={activeProfileTab}
                onBack={() => setCurrentView('directory')}
                onOpenEvidence={handleOpenEvidence}
                onOpenUploadModal={() => setIsUploadModalOpen(true)}
                onAddDoctorNote={handleAddDoctorNote}
              />
            )}

            {currentView === 'emergency' && (
              <EmergencyMode
                patients={patients}
                onSelectPatient={(p) => handleSelectPatient(p, 'emergency')}
              />
            )}
          </main>

          {/* Footer */}
          <footer className="bg-[#0f172a] border-t border-slate-800 text-slate-400 text-xs py-5 mt-auto shrink-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-blue-400 animate-ping" />
                <span className="font-bold text-slate-200">Clinical AI Assistant • Enterprise HIS v4.2</span>
              </div>
              <p className="text-slate-500 font-mono text-[11px]">
                Designed exclusively for healthcare providers • Verifiable Multi-Agent Intelligence
              </p>
            </div>
          </footer>
        </div>
      </div>

      {/* MODALS */}
      <RequestAccessModal
        isOpen={isRequestAccessOpen}
        onClose={() => setIsRequestAccessOpen(false)}
        onAccessGranted={handleAccessGranted}
        existingPatientIds={patients.map((p) => p.uid)}
      />

      <ReportEvidenceViewer
        isOpen={evidenceViewerState.isOpen}
        onClose={() => setEvidenceViewerState((prev) => ({ ...prev, isOpen: false }))}
        report={evidenceViewerState.report}
        highlightSnippet={evidenceViewerState.snippet}
        targetPage={evidenceViewerState.targetPage}
      />

      <MultiAgentStatusModal
        isOpen={isAgentsModalOpen}
        onClose={() => setIsAgentsModalOpen(false)}
      />

      {selectedPatient && (
        <UploadReportModal
          isOpen={isUploadModalOpen}
          onClose={() => setIsUploadModalOpen(false)}
          patient={selectedPatient}
          onReportProcessed={handleReportProcessed}
        />
      )}
    </div>
  );
}

