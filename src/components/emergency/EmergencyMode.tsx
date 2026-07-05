import React from 'react';
import { AlertTriangle, ShieldAlert, PhoneCall, ArrowRight, HeartPulse, Activity, UserCheck } from 'lucide-react';
import { Patient } from '../../types/hospital';

interface EmergencyModeProps {
  patients: Patient[];
  onSelectPatient: (patient: Patient, tab: 'emergency') => void;
}

export const EmergencyMode: React.FC<EmergencyModeProps> = ({ patients, onSelectPatient }) => {
  // Filter for patients who are Critical or High Priority
  const criticalPatients = patients.filter(
    (p) => p.status === 'Critical' || p.status === 'High Priority' || p.id === 'mohammed-ali' || p.id === 'rajesh-kumar'
  );

  return (
    <div className="space-y-8 pb-16">
      {/* Red Alert Header */}
      <div className="bg-gradient-to-r from-rose-700 via-red-800 to-rose-950 text-white rounded-2xl p-6 md:p-8 shadow-2xl border-2 border-rose-500 animate-pulse flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-3xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white text-rose-950 font-black text-xs uppercase tracking-widest rounded-full">
            <AlertTriangle className="w-4 h-4 text-rose-600 animate-bounce" />
            <span>EMERGENCY MODE ACTIVE • 5-SECOND TRIAGE SUITE</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-black tracking-tight">
            Emergency Room & Intensive Care Unit Active Surveillance
          </h1>
          <p className="text-rose-100 text-sm leading-relaxed font-medium">
            Optimized for rapid clinical decision-making. Highlighting life-threatening allergies, acute ECG/enzyme shifts, and immediate resuscitation protocols.
          </p>
        </div>

        <div className="bg-rose-950/80 px-5 py-3 rounded-xl border border-rose-400/40 text-center shrink-0">
          <span className="text-[11px] uppercase font-bold text-rose-200 block">Active Critical Cases</span>
          <span className="text-3xl font-black text-white mt-1 block">{criticalPatients.length}</span>
          <span className="text-[10px] text-emerald-300 font-mono">100% EMR Indexed</span>
        </div>
      </div>

      {/* Critical Patients Grid */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-slate-900 tracking-tight flex items-center">
          <ShieldAlert className="w-5 h-5 text-rose-600 mr-2" />
          Immediate Action Patients Required in Bay
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {criticalPatients.map((p) => (
            <div
              key={p.id}
              onClick={() => onSelectPatient(p, 'emergency')}
              className="bg-white rounded-2xl p-6 border-2 border-rose-500 hover:border-red-700 shadow-xl transition-all cursor-pointer group flex flex-col justify-between space-y-6"
            >
              <div>
                <div className="flex items-start justify-between gap-4 border-b border-rose-100 pb-4">
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="px-2.5 py-1 bg-rose-600 text-white font-mono font-bold text-xs rounded uppercase tracking-wider">
                        {p.status}
                      </span>
                      <span className="text-xs font-mono font-bold text-slate-500">{p.uid}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mt-2 group-hover:text-rose-600 transition-colors">
                      {p.name}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium mt-0.5">
                      {p.age} yrs • {p.gender} • Blood Group: <strong className="text-rose-600">{p.bloodGroup}</strong>
                    </p>
                  </div>

                  <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold text-sm shadow-sm group-hover:scale-110 transition-transform">
                    <HeartPulse className="w-6 h-6 animate-pulse" />
                  </div>
                </div>

                {/* Allergies Alert */}
                <div className="mt-4 p-3 bg-rose-50/80 rounded-xl border border-rose-200">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-rose-900 block">Life-Threatening Allergies:</span>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {p.allergies.length > 0 ? (
                      p.allergies.map((a, idx) => (
                        <span key={idx} className="px-2 py-0.5 bg-rose-600 text-white text-xs font-bold rounded">
                          ⚠️ {a.allergen} ({a.reaction})
                        </span>
                      ))
                    ) : (
                      <span className="text-xs text-emerald-700 font-semibold">No documented drug allergies</span>
                    )}
                  </div>
                </div>

                {/* Emergency Triage Summary */}
                <div className="mt-4 p-4 bg-slate-900 text-slate-100 rounded-xl text-xs leading-relaxed">
                  <span className="text-teal-400 font-bold uppercase tracking-wider block text-[10px] mb-1">
                    Emergency AI Synthesis:
                  </span>
                  <p className="line-clamp-3 font-medium">{p.emergencySummary || `${p.name} presents with active condition profile. Immediate triage recommends monitoring blood pressure and vital signs.`}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500 flex items-center">
                  <PhoneCall className="w-3.5 h-3.5 text-indigo-600 mr-1" />
                  <span>Contact: {p.emergencyContact.phone}</span>
                </span>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectPatient(p, 'emergency');
                  }}
                  className="px-5 py-2.5 bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold rounded-xl shadow-md transition-all flex items-center space-x-2 group-hover:translate-x-1"
                >
                  <span>Open 5-Sec Emergency View</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
