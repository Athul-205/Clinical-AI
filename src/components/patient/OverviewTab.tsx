import React from 'react';
import { User, Phone, Building2, Stethoscope, HeartPulse, Activity, AlertCircle, Shield } from 'lucide-react';
import { Patient } from '../../types/hospital';

interface OverviewTabProps {
  patient: Patient;
  onOpenEvidence: (snippet?: string) => void;
}

export const OverviewTab: React.FC<OverviewTabProps> = ({ patient, onOpenEvidence }) => {
  return (
    <div className="space-y-6">
      {/* Top Quick Profile Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-4 border border-slate-200/80 shadow-sm">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Demographics</span>
          <div className="text-lg font-bold text-slate-900 mt-1">{patient.age} yrs • {patient.gender}</div>
          <p className="text-xs text-slate-500 font-mono mt-0.5">Blood Group: <span className="font-bold text-rose-600">{patient.bloodGroup}</span></p>
        </div>

        <div className="bg-white rounded-xl p-4 border border-slate-200/80 shadow-sm">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Anthropometrics</span>
          <div className="text-lg font-bold text-slate-900 mt-1">{patient.weight} / {patient.height}</div>
          <p className="text-xs text-slate-500 font-mono mt-0.5">BMI: <span className="font-bold text-slate-800">{patient.bmi}</span></p>
        </div>

        <div className="bg-white rounded-xl p-4 border border-slate-200/80 shadow-sm">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Primary Care Institution</span>
          <div className="text-sm font-bold text-slate-900 mt-1 truncate">{patient.primaryHospital.split(',')[0]}</div>
          <p className="text-xs text-slate-500 truncate mt-0.5">{patient.primaryPhysician}</p>
        </div>

        <div className="bg-white rounded-xl p-4 border border-slate-200/80 shadow-sm">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Emergency Contact</span>
          <div className="text-sm font-bold text-slate-900 mt-1">{patient.emergencyContact.name} ({patient.emergencyContact.relationship})</div>
          <p className="text-xs text-indigo-700 font-mono font-bold mt-0.5">{patient.emergencyContact.phone}</p>
        </div>
      </div>

      {/* Clinical Overview Card */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div className="flex items-center space-x-2">
            <HeartPulse className="w-5 h-5 text-teal-600" />
            <h3 className="font-bold text-slate-900 text-base">Initial Clinical Synthesis & Admission Profile</h3>
          </div>
          <button
            onClick={() => onOpenEvidence(patient.overviewSummary.slice(0, 30))}
            className="px-3 py-1 bg-teal-50 hover:bg-teal-100 text-teal-700 text-xs font-semibold rounded-lg transition-colors border border-teal-200"
          >
            View EMR Source
          </button>
        </div>
        <p className="text-sm text-slate-700 leading-relaxed font-medium">
          {patient.overviewSummary}
        </p>
      </div>

      {/* Quick Problem List Snapshot */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm space-y-4">
          <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wider flex items-center justify-between">
            <span>Active Problem List</span>
            <span className="px-2 py-0.5 bg-slate-100 text-slate-700 text-xs rounded font-mono font-bold">{patient.conditions.length}</span>
          </h3>
          <div className="space-y-3">
            {patient.conditions.map((c, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-200/60">
                <div>
                  <div className="font-bold text-slate-900 text-xs">{c.name}</div>
                  <div className="text-[11px] text-slate-500 font-mono mt-0.5">Diagnosed: {c.diagnosedDate}</div>
                </div>
                <button
                  onClick={() => onOpenEvidence(c.evidenceSnippet)}
                  className="px-2.5 py-1 bg-white hover:bg-teal-50 text-teal-700 text-[11px] font-semibold rounded-lg border border-slate-200 transition-colors shadow-2xs"
                >
                  View Evidence
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm space-y-4">
          <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wider flex items-center justify-between">
            <span>Critical Allergies & Contraindications</span>
            <span className="px-2 py-0.5 bg-rose-100 text-rose-800 text-xs rounded font-mono font-bold">{patient.allergies.length}</span>
          </h3>
          <div className="space-y-3">
            {patient.allergies.length > 0 ? (
              patient.allergies.map((a, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-rose-50/70 rounded-xl border border-rose-200">
                  <div>
                    <div className="font-bold text-rose-950 text-xs flex items-center">
                      <AlertCircle className="w-3.5 h-3.5 mr-1 text-rose-600" />
                      {a.allergen}
                    </div>
                    <div className="text-[11px] text-rose-800 mt-0.5">Reaction: {a.reaction} ({a.severity})</div>
                  </div>
                  <button
                    onClick={() => onOpenEvidence(a.evidenceSnippet)}
                    className="px-2.5 py-1 bg-white hover:bg-rose-100 text-rose-700 text-[11px] font-semibold rounded-lg border border-rose-300 transition-colors shadow-2xs"
                  >
                    View Evidence
                  </button>
                </div>
              ))
            ) : (
              <div className="p-4 bg-emerald-50 rounded-xl text-xs text-emerald-800 font-medium text-center">
                No known drug allergies documented in EMR records.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
