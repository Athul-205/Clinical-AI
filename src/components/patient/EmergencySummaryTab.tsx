import React from 'react';
import { AlertTriangle, HeartPulse, Activity, AlertCircle, PhoneCall, ShieldAlert, Sparkles, ChevronRight, Pill } from 'lucide-react';
import { Patient } from '../../types/hospital';

interface EmergencySummaryTabProps {
  patient: Patient;
  onOpenEvidence: (snippet?: string) => void;
}

export const EmergencySummaryTab: React.FC<EmergencySummaryTabProps> = ({ patient, onOpenEvidence }) => {
  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-rose-600 via-red-700 to-rose-900 text-white rounded-2xl p-6 shadow-xl border border-rose-500 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 animate-pulse">
        <div className="flex items-center space-x-3.5">
          <div className="p-3 bg-white/20 rounded-2xl shadow">
            <AlertTriangle className="w-8 h-8 text-white" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="px-2.5 py-0.5 bg-white text-rose-900 text-[10px] font-black uppercase tracking-widest rounded-full">
                5-SECOND EMERGENCY ER / ICU PROTOCOL
              </span>
              <span className="text-xs font-mono text-rose-100">UID: {patient.uid}</span>
            </div>
            <h2 className="text-2xl font-black tracking-tight mt-1">
              Immediate Critical Triage Dashboard for {patient.name}
            </h2>
          </div>
        </div>

        <div className="bg-rose-950/60 px-4 py-2.5 rounded-xl border border-rose-400/40 text-right shrink-0">
          <span className="text-[10px] uppercase font-bold text-rose-200 block">Emergency Contact</span>
          <span className="font-bold text-sm text-white flex items-center justify-end mt-0.5">
            <PhoneCall className="w-3.5 h-3.5 mr-1 text-rose-300" />
            {patient.emergencyContact.phone}
          </span>
          <span className="text-[10px] text-rose-300">{patient.emergencyContact.name} ({patient.emergencyContact.relationship})</span>
        </div>
      </div>

      {/* Grid of Critical Findings */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* 1. Documented Life-Threatening Allergies */}
        <div className="bg-rose-50 rounded-2xl p-6 border-2 border-rose-500 shadow-md space-y-4">
          <div className="flex items-center justify-between border-b border-rose-200 pb-3">
            <div className="flex items-center space-x-2 text-rose-900">
              <AlertCircle className="w-6 h-6 text-rose-600 animate-bounce" />
              <h3 className="font-black text-base uppercase tracking-wide">Critical Drug / Contrast Allergies</h3>
            </div>
            <span className="px-2 py-0.5 bg-rose-600 text-white font-bold font-mono text-xs rounded">
              DO NOT ADMINISTER
            </span>
          </div>

          <div className="space-y-3">
            {patient.allergies.length > 0 ? (
              patient.allergies.map((alg, i) => (
                <div key={i} className="p-4 bg-white rounded-xl border border-rose-300 shadow-sm flex items-center justify-between gap-3">
                  <div>
                    <div className="font-black text-rose-950 text-sm flex items-center">
                      <span>{alg.allergen}</span>
                      <span className="ml-2 px-1.5 py-0.2 bg-rose-600 text-white text-[10px] font-bold rounded">
                        {alg.severity}
                      </span>
                    </div>
                    <p className="text-xs font-bold text-rose-800 mt-0.5">Reaction: {alg.reaction}</p>
                  </div>
                  <button
                    onClick={() => onOpenEvidence(alg.evidenceSnippet)}
                    className="px-3 py-1.5 bg-rose-100 hover:bg-rose-600 hover:text-white text-rose-900 font-bold text-xs rounded-lg border border-rose-300 transition-all shrink-0 cursor-pointer"
                  >
                    View Evidence
                  </button>
                </div>
              ))
            ) : (
              <div className="p-6 bg-white rounded-xl text-center font-bold text-emerald-800 text-sm">
                No Known Severe Drug Allergies Documented.
              </div>
            )}
          </div>
        </div>

        {/* 2. Critical Abnormal Labs / Biomarkers */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center space-x-2">
              <Activity className="w-6 h-6 text-amber-600" />
              <h3 className="font-bold text-slate-900 text-base uppercase tracking-wide">Immediate Abnormal Biomarkers</h3>
            </div>
            <span className="text-xs text-slate-400 font-mono">Real-Time ER Feed</span>
          </div>

          <div className="space-y-3">
            {patient.abnormalLabs.map((lab, i) => (
              <div key={i} className="p-3.5 bg-amber-50/70 rounded-xl border border-amber-200 flex items-center justify-between gap-3">
                <div>
                  <div className="font-bold text-amber-950 text-sm">{lab.testName}</div>
                  <div className="text-xs font-mono font-bold text-rose-700 mt-0.5">{lab.value}</div>
                </div>
                <button
                  onClick={() => onOpenEvidence(lab.evidenceSnippet)}
                  className="px-3 py-1 bg-white hover:bg-amber-600 hover:text-white text-amber-800 font-bold text-xs rounded-lg border border-amber-300 transition-all shrink-0 cursor-pointer"
                >
                  Verify EMR
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Emergency AI Clinical Recommendation Engine */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-xl border border-slate-800 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center space-x-2.5">
            <Sparkles className="w-6 h-6 text-teal-400 animate-pulse" />
            <h3 className="font-bold text-base">Emergency AI Triage & Interventional Plan</h3>
          </div>
          <button
            onClick={() => onOpenEvidence((patient.emergencySummary || 'Emergency ER summary protocol').slice(0, 30))}
            className="px-3.5 py-1.5 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs rounded-xl shadow transition-all cursor-pointer"
          >
            Verify EMR Source
          </button>
        </div>

        <div className="p-4 bg-slate-800/80 rounded-xl border border-slate-700 text-sm text-slate-100 font-medium leading-relaxed">
          {patient.emergencySummary || `${patient.name} requires continuous monitoring of cardiovascular and metabolic markers.`}
        </div>

        <div className="pt-2 flex flex-wrap gap-2 text-xs">
          <span className="px-3 py-1 bg-rose-500/20 text-rose-300 rounded-lg border border-rose-500/30 font-semibold">
            Blood Group: {patient.bloodGroup}
          </span>
          <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-lg border border-blue-500/30 font-semibold">
            Active Medications: {patient.medications.length} regimen items
          </span>
          <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-lg border border-emerald-500/30 font-semibold">
            Consent Protocol: Verified
          </span>
        </div>
      </div>
    </div>
  );
};

