import React from 'react';
import { UserPlus, ArrowLeft, Menu } from 'lucide-react';

interface HeaderProps {
  currentView: 'dashboard' | 'directory' | 'profile' | 'emergency';
  onNavigate: (view: 'dashboard' | 'directory' | 'profile' | 'emergency') => void;
  onOpenAgentsModal: () => void;
  selectedPatientName?: string;
  onRequestAccess?: () => void;
  onToggleMobileMenu?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  onNavigate,
  selectedPatientName,
  onRequestAccess,
  onToggleMobileMenu
}) => {
  const getHeaderTitle = () => {
    switch (currentView) {
      case 'dashboard':
        return {
          title: 'Hospital Command Center',
          subtitle: 'Overview of clinic operations and patient intelligence.'
        };
      case 'directory':
        return {
          title: 'Patient Directory',
          subtitle: 'Longitudinal EMR database and active hospital admissions.'
        };
      case 'profile':
        return {
          title: `${selectedPatientName || 'Patient'} Clinical Workspace`,
          subtitle: 'AI multi-agent synthesis, verifiable PDF evidence, and temporal labs.'
        };
      case 'emergency':
        return {
          title: 'Emergency Triage Command',
          subtitle: 'Critical cases requiring immediate intervention & telemetry analysis.'
        };
      default:
        return {
          title: 'Clinical AI Assistant',
          subtitle: 'Healthcare Intelligence System'
        };
    }
  };

  const { title, subtitle } = getHeaderTitle();

  return (
    <header className="h-20 bg-white border-b border-slate-200 px-6 sm:px-8 flex items-center justify-between shrink-0 font-sans shadow-sm z-30">
      <div className="flex items-center gap-4">
        {/* Mobile menu toggle */}
        {onToggleMobileMenu && (
          <button
            onClick={onToggleMobileMenu}
            className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 cursor-pointer"
            title="Toggle Menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        )}

        {currentView === 'profile' && (
          <button
            onClick={() => onNavigate('directory')}
            className="hidden sm:flex p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer mr-1"
            title="Back to Directory"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
        )}

        <div>
          <h1 className="text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
            <span>{title}</span>
          </h1>
          <p className="text-xs text-slate-500 mt-0.5 truncate max-w-md sm:max-w-xl">
            {subtitle}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3 sm:gap-4">
        {onRequestAccess && currentView !== 'profile' && (
          <button
            onClick={onRequestAccess}
            className="hidden sm:flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2.5 rounded-lg border border-blue-100 font-semibold text-xs hover:bg-blue-100 transition-colors cursor-pointer shadow-sm"
          >
            <UserPlus className="w-4 h-4" />
            <span>Request Patient Access</span>
          </button>
        )}

        <div className="flex items-center gap-2">
          <div 
            className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 font-bold text-xs shadow-sm"
            title="Dr. Arjun, MD (Attending Physician)"
          >
            AJ
          </div>
        </div>
      </div>
    </header>
  );
};

