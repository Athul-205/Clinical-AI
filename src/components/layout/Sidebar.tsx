import React from 'react';
import { LayoutDashboard, Users, AlertTriangle, Stethoscope, Cpu, Activity, ShieldCheck, ChevronRight } from 'lucide-react';

interface SidebarProps {
  currentView: 'dashboard' | 'directory' | 'profile' | 'emergency';
  onNavigate: (view: 'dashboard' | 'directory' | 'profile' | 'emergency') => void;
  onOpenAgentsModal: () => void;
  selectedPatientName?: string;
  emergencyCount?: number;
}

export const Sidebar: React.FC<SidebarProps> = ({
  currentView,
  onNavigate,
  onOpenAgentsModal,
  selectedPatientName,
  emergencyCount = 2
}) => {
  return (
    <aside className="w-64 bg-[#1e293b] text-slate-300 flex flex-col border-r border-slate-700/50 shrink-0 select-none">
      {/* Top Branding Section */}
      <div className="p-6 pb-4">
        <div 
          className="flex items-center gap-3 mb-8 cursor-pointer group"
          onClick={() => onNavigate('dashboard')}
        >
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center font-bold text-white text-xl shadow-lg shadow-blue-900/20 group-hover:bg-blue-500 transition-colors shrink-0">
            C
          </div>
          <div className="leading-none">
            <div className="text-white font-bold text-lg tracking-tight flex items-center gap-1.5">
              <span>CLINICAL AI</span>
            </div>
            <div className="text-[10px] text-slate-400 font-semibold tracking-[0.2em] mt-1 uppercase">
              ASSISTANT
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2 px-3">
          Menu & Operations
        </div>
        <nav className="space-y-1.5">
          {/* Dashboard Item */}
          <button
            onClick={() => onNavigate('dashboard')}
            className={`w-full px-4 py-3 rounded-lg flex items-center gap-3 transition-colors cursor-pointer text-left ${
              currentView === 'dashboard'
                ? 'bg-blue-600 text-white font-semibold shadow-md shadow-blue-900/20'
                : 'hover:bg-slate-800 text-slate-300 hover:text-white'
            }`}
          >
            <LayoutDashboard className={`w-5 h-5 shrink-0 ${currentView === 'dashboard' ? 'opacity-100' : 'opacity-70'}`} />
            <span className="text-sm">Dashboard</span>
          </button>

          {/* Patient Directory Item */}
          <button
            onClick={() => onNavigate('directory')}
            className={`w-full px-4 py-3 rounded-lg flex items-center gap-3 transition-colors cursor-pointer text-left ${
              currentView === 'directory'
                ? 'bg-blue-600 text-white font-semibold shadow-md shadow-blue-900/20'
                : 'hover:bg-slate-800 text-slate-300 hover:text-white'
            }`}
          >
            <Users className={`w-5 h-5 shrink-0 ${currentView === 'directory' ? 'opacity-100' : 'opacity-70'}`} />
            <span className="text-sm">Patient Directory</span>
          </button>

          {/* Active Patient Workspace item if selected */}
          {selectedPatientName && (
            <button
              onClick={() => onNavigate('profile')}
              className={`w-full px-4 py-2.5 rounded-lg flex items-center gap-2.5 transition-colors cursor-pointer text-left ml-2 border-l-2 ${
                currentView === 'profile'
                  ? 'bg-slate-800/90 text-blue-400 border-blue-500 font-semibold'
                  : 'border-slate-700 text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'
              }`}
            >
              <Stethoscope className="w-4 h-4 shrink-0 text-blue-400" />
              <div className="min-w-0 flex-1">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Active Patient</div>
                <div className="text-xs truncate">{selectedPatientName}</div>
              </div>
            </button>
          )}

          {/* Emergency Mode Item */}
          <button
            onClick={() => onNavigate('emergency')}
            className={`w-full px-4 py-3 rounded-lg flex items-center justify-between transition-colors cursor-pointer text-left ${
              currentView === 'emergency'
                ? 'bg-red-600 text-white font-semibold shadow-md shadow-red-900/30 animate-pulse'
                : 'hover:bg-slate-800 text-red-400 hover:text-red-300'
            }`}
          >
            <div className="flex items-center gap-3">
              <AlertTriangle className={`w-5 h-5 shrink-0 ${currentView === 'emergency' ? 'opacity-100' : 'opacity-80'}`} />
              <span className="text-sm font-semibold">Emergency Mode</span>
            </div>
            {emergencyCount > 0 && (
              <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                currentView === 'emergency'
                  ? 'bg-white text-red-700'
                  : 'bg-red-500/20 text-red-400 border border-red-500/30'
              }`}>
                {emergencyCount}
              </span>
            )}
          </button>
        </nav>
      </div>

      {/* Bottom AI Agent Status Section */}
      <div className="mt-auto p-5 border-t border-slate-700/50 space-y-4">
        <div className="bg-slate-800/60 rounded-xl p-4 border border-slate-700/60">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-blue-400" />
              <span>AI Agent Status</span>
            </span>
            <button
              onClick={onOpenAgentsModal}
              className="text-[10px] text-blue-400 hover:text-blue-300 font-bold hover:underline cursor-pointer flex items-center"
            >
              <span>7 LIVE</span>
            </button>
          </div>
          <div className="space-y-2 text-xs">
            <div className="flex justify-between items-center">
              <span className="text-slate-300">Document Agent</span>
              <span className="text-emerald-400 font-mono text-[10px] flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> Online
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-300">Clinical Q&A</span>
              <span className="text-emerald-400 font-mono text-[10px] flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> Online
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-300">Trend Analysis</span>
              <span className="text-emerald-400 font-mono text-[10px] flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> Online
              </span>
            </div>
          </div>
        </div>

        {/* Doctor Verification info in sidebar */}
        <div className="flex items-center gap-3 px-1 pt-1 border-t border-slate-800">
          <div className="w-8 h-8 rounded-full bg-slate-700 border border-slate-600 flex items-center justify-center text-xs font-bold text-white shrink-0">
            AJ
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1">
              <span className="text-xs font-bold text-slate-200 truncate">Dr. Arjun, MD</span>
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            </div>
            <div className="text-[10px] text-slate-400 font-mono truncate">Attending Physician</div>
          </div>
        </div>
      </div>
    </aside>
  );
};
