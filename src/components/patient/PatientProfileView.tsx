import React, { useState } from 'react';
import { ArrowLeft, User, Sparkles, FileText, Calendar, TrendingUp, FileEdit, MessageSquare, AlertTriangle, Upload, ShieldCheck, Activity, HeartPulse } from 'lucide-react';
import { Patient, MedicalReport, DoctorNote } from '../../types/hospital';
import { OverviewTab } from './OverviewTab';
import { AISummaryTab } from './AISummaryTab';
import { MedicalReportsTab } from './MedicalReportsTab';
import { TimelineTab } from './TimelineTab';
import { TrendAnalysisTab } from './TrendAnalysisTab';
import { DoctorNotesTab } from './DoctorNotesTab';
import { AskClinicalAITab } from './AskClinicalAITab';
import { EmergencySummaryTab } from './EmergencySummaryTab';

interface PatientProfileViewProps {
  patient: Patient;
  initialTab?: string;
  onBack: () => void;
  onOpenEvidence: (reportOrSnippet: MedicalReport | string, targetPage?: number) => void;
  onOpenUploadModal: () => void;
  onAddDoctorNote: (note: DoctorNote) => void;
}

export const PatientProfileView: React.FC<PatientProfileViewProps> = ({
  patient,
  initialTab = 'summary',
  onBack,
  onOpenEvidence,
  onOpenUploadModal,
  onAddDoctorNote
}) => {
  const [activeTab, setActiveTab] = useState<string>(initialTab);

  React.useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab);
    }
  }, [initialTab, patient.id]);

  const handleEvidenceClick = (snippet?: string, targetPage?: number) => {
    if (!snippet) {
      if (patient.reports[0]) onOpenEvidence(patient.reports[0]);
      return;
    }
    // Check if snippet matches a report ID or title
    const matchedReport = patient.reports.find(
      (r) => r.id === snippet || r.title.toLowerCase().includes(snippet.toLowerCase())
    );
    if (matchedReport) {
      onOpenEvidence(matchedReport, targetPage);
    } else {
      onOpenEvidence(snippet, targetPage);
    }
  };

  return (
    <div className="space-y-6 pb-16 font-sans text-slate-800">
      {/* Patient Header Card - Sleek Interface Dark Card */}
      <div className="bg-[#0f172a] rounded-2xl p-6 md:p-8 text-white shadow-md border border-slate-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="flex items-start space-x-4">
          <button
            onClick={onBack}
            className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors mt-0.5 shrink-0 cursor-pointer"
            title="Return to previous screen"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>

          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="px-2.5 py-0.5 bg-blue-500/20 text-blue-300 border border-blue-500/30 rounded font-mono font-bold text-xs">
                {patient.uid}
              </span>
              <span className={`px-2.5 py-0.5 rounded text-xs font-bold uppercase tracking-wider ${
                patient.status === 'Critical' ? 'bg-red-600 text-white animate-pulse' :
                patient.status === 'High Priority' ? 'bg-orange-500 text-slate-950' : 'bg-emerald-500/20 text-emerald-300'
              }`}>
                {patient.status}
              </span>
              <span className="text-xs text-slate-400 font-mono hidden sm:inline">
                • Consent Verified (256-bit AES Token)
              </span>
            </div>

            <h1 className="text-2xl md:text-3xl font-black tracking-tight text-white">{patient.name}</h1>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-300 font-medium">
              <span>{patient.age} yrs • {patient.gender}</span>
              <span>•</span>
              <span>Blood Group: <strong className="text-red-400">{patient.bloodGroup}</strong></span>
              <span>•</span>
              <span className="text-slate-400 truncate max-w-xs">{patient.primaryHospital}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto justify-end">
          <button
            onClick={onOpenUploadModal}
            className="px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center space-x-2 cursor-pointer"
          >
            <Upload className="w-4 h-4" />
            <span>Upload New Report</span>
          </button>
          <button
            onClick={() => setActiveTab('emergency')}
            className={`px-4 py-2.5 rounded-xl font-bold text-xs shadow-md transition-all flex items-center space-x-2 cursor-pointer ${
              activeTab === 'emergency'
                ? 'bg-red-500 text-white animate-pulse ring-2 ring-white'
                : 'bg-red-600 hover:bg-red-500 text-white'
            }`}
          >
            <AlertTriangle className="w-4 h-4" />
            <span>5-Sec Emergency Mode</span>
          </button>
        </div>
      </div>

      {/* Navigation Tabs Bar */}
      <div className="bg-white rounded-2xl p-2 shadow-sm border border-slate-200 overflow-x-auto">
        <nav className="flex items-center space-x-1 min-w-max">
          <button
            onClick={() => setActiveTab('overview')}
            className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'overview'
                ? 'bg-[#0f172a] text-white shadow'
                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            }`}
          >
            <User className="w-4 h-4" />
            <span>Overview</span>
          </button>

          <button
            onClick={() => setActiveTab('summary')}
            className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'summary'
                ? 'bg-blue-600 text-white shadow'
                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>AI Clinical Summary</span>
          </button>

          <button
            onClick={() => setActiveTab('reports')}
            className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'reports'
                ? 'bg-[#0f172a] text-white shadow'
                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Medical Reports ({patient.reports.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('timeline')}
            className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'timeline'
                ? 'bg-[#0f172a] text-white shadow'
                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span>Timeline</span>
          </button>

          <button
            onClick={() => setActiveTab('trends')}
            className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'trends'
                ? 'bg-[#0f172a] text-white shadow'
                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            }`}
          >
            <TrendingUp className="w-4 h-4" />
            <span>Trend Analysis</span>
          </button>

          <button
            onClick={() => setActiveTab('notes')}
            className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'notes'
                ? 'bg-[#0f172a] text-white shadow'
                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            }`}
          >
            <FileEdit className="w-4 h-4" />
            <span>Doctor Notes</span>
          </button>

          <button
            onClick={() => setActiveTab('ask')}
            className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'ask'
                ? 'bg-blue-600 text-white shadow'
                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            }`}
          >
            <MessageSquare className="w-4 h-4" />
            <span>Ask Clinical AI</span>
          </button>

          <button
            onClick={() => setActiveTab('emergency')}
            className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'emergency'
                ? 'bg-red-600 text-white shadow animate-pulse'
                : 'text-red-600 hover:bg-red-50'
            }`}
          >
            <AlertTriangle className="w-4 h-4" />
            <span>Emergency Summary</span>
          </button>
        </nav>
      </div>

      {/* Tab Content Rendering */}
      <div className="pt-2">
        {activeTab === 'overview' && (
          <OverviewTab patient={patient} onOpenEvidence={handleEvidenceClick} />
        )}

        {activeTab === 'summary' && (
          <AISummaryTab patient={patient} onOpenEvidence={handleEvidenceClick} />
        )}

        {activeTab === 'reports' && (
          <MedicalReportsTab
            patient={patient}
            onOpenReport={(rep) => onOpenEvidence(rep)}
            onOpenUploadModal={onOpenUploadModal}
          />
        )}

        {activeTab === 'timeline' && (
          <TimelineTab patient={patient} onOpenEvidence={handleEvidenceClick} />
        )}

        {activeTab === 'trends' && (
          <TrendAnalysisTab patient={patient} onOpenEvidence={handleEvidenceClick} />
        )}

        {activeTab === 'notes' && (
          <DoctorNotesTab patient={patient} onAddNote={onAddDoctorNote} />
        )}

        {activeTab === 'ask' && (
          <AskClinicalAITab patient={patient} onOpenEvidence={handleEvidenceClick} />
        )}

        {activeTab === 'emergency' && (
          <EmergencySummaryTab patient={patient} onOpenEvidence={handleEvidenceClick} />
        )}
      </div>
    </div>
  );
};
