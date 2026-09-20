import React from 'react';
import { Users, AlertTriangle, FileCheck, Sparkles, ArrowRight, ShieldCheck, Activity, Cpu, Clock, CheckCircle2 } from 'lucide-react';
import { initialAgentsList } from '../../services/aiAgentService';

interface HospitalDashboardProps {
  onOpenDirectory: () => void;
  onOpenEmergency: () => void;
  onOpenAgentsModal: () => void;
}

export const HospitalDashboard: React.FC<HospitalDashboardProps> = ({
  onOpenDirectory,
  onOpenEmergency,
  onOpenAgentsModal
}) => {
  return (
    <div className="space-y-6 pb-12 font-sans text-slate-800">
      {/* Sleek Welcome Banner */}
      <div className="bg-[#0f172a] rounded-2xl p-6 md:p-8 text-white shadow-md border border-slate-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI Patient Intelligence Active</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-black tracking-tight text-white">
            Welcome back, Dr. Arjun
          </h1>
          <p className="text-slate-300 text-sm leading-relaxed font-normal">
            Your Clinical AI Assistant has processed EMR feeds across Horizon, Metropolitan, and Grandview health networks. All 7 AI agents are actively organizing longitudinal reports with verifiable evidence links.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button
            onClick={onOpenDirectory}
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl shadow-md transition-all flex items-center space-x-2 text-sm cursor-pointer"
          >
            <Users className="w-4 h-4" />
            <span>Patient Directory</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={onOpenEmergency}
            className="px-5 py-2.5 bg-red-600 hover:bg-red-500 text-white font-bold rounded-xl shadow-md transition-all flex items-center space-x-2 text-sm animate-pulse cursor-pointer"
          >
            <AlertTriangle className="w-4 h-4" />
            <span>Emergency Cases (2)</span>
          </button>
        </div>
      </div>

      {/* Primary KPI Cards Grid - Sleek Interface Style */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total Patients */}
        <div
          onClick={onOpenDirectory}
          className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:border-blue-500 transition-all cursor-pointer group"
        >
          <div className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-2 flex items-center justify-between">
            <span>Total Patients</span>
            <Users className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-black text-slate-900">6</span>
            <span className="text-emerald-500 text-xs font-bold">+2 via OTP access</span>
          </div>
          <p className="mt-2 text-xs text-slate-500">
            Longitudinal multi-year EMR records
          </p>
        </div>

        {/* Emergency Cases Card - Sleek Red Highlight */}
        <div
          onClick={onOpenEmergency}
          className="bg-white p-5 rounded-2xl border border-red-100 shadow-sm ring-1 ring-red-500/10 cursor-pointer hover:bg-red-50/50 transition-colors group"
        >
          <div className="text-red-400 text-xs font-bold uppercase tracking-wider mb-2 flex items-center justify-between">
            <span>Emergency Cases</span>
            <AlertTriangle className="w-4 h-4 text-red-500 animate-bounce" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-black text-red-600">2</span>
            <span className="text-red-600 text-[10px] font-bold bg-red-100 px-1.5 py-0.5 rounded ml-auto">Review Critical</span>
          </div>
          <p className="mt-2 text-xs text-red-500 flex items-center justify-between font-semibold">
            <span>Click to open Emergency Mode</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </p>
        </div>

        {/* Reports Processed */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
          <div className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-2 flex items-center justify-between">
            <span>Reports Processed</span>
            <FileCheck className="w-4 h-4 text-slate-400" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-black text-slate-900">87</span>
            <span className="text-blue-600 text-[10px] font-bold italic tracking-tight bg-blue-50 px-1.5 py-0.5 rounded ml-auto">AI Managed</span>
          </div>
          <p className="mt-2 text-xs text-slate-500">
            Labs, MRI, CT Scans, Discharge Summaries
          </p>
        </div>

        {/* AI Summaries Generated */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
          <div className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-2 flex items-center justify-between">
            <span>Summaries Generated</span>
            <Sparkles className="w-4 h-4 text-slate-400" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-black text-slate-900">6</span>
            <span className="text-emerald-500 text-xs font-bold">100% Verified</span>
          </div>
          <p className="mt-2 text-xs text-slate-500 flex items-center">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500 mr-1" />
            <span>Verbatim link to PDF page</span>
          </p>
        </div>
      </div>

      {/* Hospital Analytics & Multi-Agent Status */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: Hospital Analytics */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div>
              <h3 className="font-bold text-slate-900 text-base">Hospital Clinical Analytics</h3>
              <p className="text-xs text-slate-500">Real-time breakdown of monitored disease classifications across patient population</p>
            </div>
            <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded-lg font-mono">
              Q1 2026 Audit
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            {/* Triage Priority Distribution */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Triage Status Breakdown</h4>
              
              <div className="space-y-3.5">
                <div>
                  <div className="flex justify-between text-xs font-medium mb-1">
                    <span className="text-red-600 font-bold flex items-center">
                      <span className="w-2 h-2 rounded-full bg-red-600 mr-1.5" /> Critical (ICU / High Risk)
                    </span>
                    <span className="text-slate-600 font-mono text-[11px]">1 patient (16.7%)</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div className="bg-red-600 h-full rounded-full" style={{ width: '16.7%' }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-medium mb-1">
                    <span className="text-orange-600 font-bold flex items-center">
                      <span className="w-2 h-2 rounded-full bg-orange-500 mr-1.5" /> High Priority (Active CKD/RA)
                    </span>
                    <span className="text-slate-600 font-mono text-[11px]">2 patients (33.3%)</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div className="bg-orange-500 h-full rounded-full" style={{ width: '33.3%' }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-medium mb-1">
                    <span className="text-blue-600 font-bold flex items-center">
                      <span className="w-2 h-2 rounded-full bg-blue-600 mr-1.5" /> Follow-up Required (Ulcer/NAFLD)
                    </span>
                    <span className="text-slate-600 font-mono text-[11px]">1 patient (16.7%)</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div className="bg-blue-600 h-full rounded-full" style={{ width: '16.7%' }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-medium mb-1">
                    <span className="text-emerald-600 font-bold flex items-center">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 mr-1.5" /> Stable (Controlled Asthma/PCOS)
                    </span>
                    <span className="text-slate-600 font-mono text-[11px]">2 patients (33.3%)</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div className="bg-emerald-500 h-full rounded-full" style={{ width: '33.3%' }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Disease Category Prevalence */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Primary Chronic Prevalence</h4>
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tight">Endocrine / Diabetes</span>
                  <p className="text-xl font-black text-slate-900 mt-1">50%</p>
                  <span className="text-[10px] text-blue-600 font-bold">3 patients</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tight">Cardiovascular / CAD</span>
                  <p className="text-xl font-black text-slate-900 mt-1">33%</p>
                  <span className="text-[10px] text-red-600 font-bold">2 patients</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tight">Renal / Hepatic</span>
                  <p className="text-xl font-black text-slate-900 mt-1">33%</p>
                  <span className="text-[10px] text-orange-600 font-bold">2 patients</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tight">Respiratory / Autoimmune</span>
                  <p className="text-xl font-black text-slate-900 mt-1">33%</p>
                  <span className="text-[10px] text-blue-600 font-bold">2 patients</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Col: Multi-Agent Live Status - Sleek Dark Card */}
        <div className="bg-[#0f172a] text-white rounded-2xl p-5 shadow-sm border border-slate-800 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center space-x-2">
                <Cpu className="w-5 h-5 text-blue-400 animate-pulse" />
                <h3 className="font-bold text-white text-base">Multi-Agent AI Engine</h3>
              </div>
              <button
                onClick={onOpenAgentsModal}
                className="text-xs text-blue-400 hover:text-blue-300 font-bold underline cursor-pointer"
              >
                View Architecture
              </button>
            </div>

            <p className="text-[11px] text-slate-400 leading-relaxed">
              Our 7 specialized AI agents collaborate asynchronously to ingest PDFs, extract longitudinal vitals, and link every single EMR observation to verbatim evidence.
            </p>

            <div className="space-y-2 pt-1">
              {initialAgentsList.slice(0, 4).map((agent, i) => (
                <div key={i} className="flex items-center justify-between p-2.5 bg-slate-800/50 rounded-xl border border-slate-700/50">
                  <div className="flex items-center space-x-2.5 truncate">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-xs font-medium text-slate-200 truncate">{agent.agentName}</span>
                  </div>
                  <span className="px-2 py-0.5 text-[10px] uppercase font-mono font-bold text-emerald-400">
                    ● Online
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono">
            <span>Evidence Hallucination Guard</span>
            <span className="text-emerald-400 font-bold flex items-center">
              <CheckCircle2 className="w-3.5 h-3.5 mr-1" /> Verified 100%
            </span>
          </div>
        </div>
      </div>

      {/* Recent EMR Activity Stream - Sleek Left Border Style */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-slate-900 text-base">Recent AI Activity & Ingestion</h3>
          <span className="text-[10px] bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded font-bold uppercase tracking-tight">Live Feed</span>
        </div>
        <div className="space-y-4">
          <div className="flex gap-4 border-l-2 border-red-500 pl-4 py-1.5">
            <div className="flex-1">
              <div className="text-xs font-bold text-red-600">Abnormal Vital & ECG Detected</div>
              <div className="text-[11px] text-slate-500 mb-1">
                Dr. Arjun accessed <span className="font-bold text-slate-700">Mohammed Ali (UID-1003)</span> • 1 mm ST depression & troponin leak 42 ng/L.
              </div>
              <button onClick={onOpenEmergency} className="text-[10px] text-blue-600 font-bold hover:underline cursor-pointer">VIEW EMERGENCY BAY</button>
            </div>
            <div className="text-[10px] text-slate-400 mt-1 font-mono italic">10m ago</div>
          </div>

          <div className="flex gap-4 border-l-2 border-emerald-400 pl-4 py-1.5">
            <div className="flex-1">
              <div className="text-xs font-bold text-slate-900">Clinical Summary & Vitals Synced</div>
              <div className="text-[11px] text-slate-500 mb-1">
                Timeline Agent updated <span className="font-bold text-slate-700">Rajesh Kumar (UID-1001)</span> • Linked blood pressure (135/85 mmHg) to EMR Page 1.
              </div>
              <button onClick={onOpenDirectory} className="text-[10px] text-blue-600 font-bold hover:underline cursor-pointer">VIEW EVIDENCE</button>
            </div>
            <div className="text-[10px] text-slate-400 mt-1 font-mono italic">1h ago</div>
          </div>

          <div className="flex gap-4 border-l-2 border-blue-400 pl-4 py-1.5">
            <div className="flex-1">
              <div className="text-xs font-bold text-slate-900">Report Verification Completed</div>
              <div className="text-[11px] text-slate-500 mb-1">
                Verification Agent audited 87 EMR PDFs across 6 records • Zero unverified statements detected.
              </div>
              <button onClick={onOpenDirectory} className="text-[10px] text-blue-600 font-bold hover:underline cursor-pointer">DIRECTORY</button>
            </div>
            <div className="text-[10px] text-slate-400 mt-1 font-mono italic">3h ago</div>
          </div>
        </div>
      </div>
    </div>
  );
};

