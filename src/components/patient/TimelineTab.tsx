import React, { useState } from 'react';
import { Calendar, FileText, CheckCircle2, Stethoscope, Pill, Hospital, Activity, ChevronRight, Filter } from 'lucide-react';
import { Patient, TimelineEvent } from '../../types/hospital';

interface TimelineTabProps {
  patient: Patient;
  onOpenEvidence: (snippet?: string, targetPage?: number) => void;
}

export const TimelineTab: React.FC<TimelineTabProps> = ({ patient, onOpenEvidence }) => {
  const [categoryFilter, setCategoryFilter] = useState<string>('All');

  const getEventIcon = (category: string) => {
    switch (category) {
      case 'Diagnosis':
        return <Stethoscope className="w-4 h-4 text-purple-600" />;
      case 'Medication':
        return <Pill className="w-4 h-4 text-blue-600" />;
      case 'Hospitalization':
        return <Hospital className="w-4 h-4 text-rose-600" />;
      case 'Surgery':
        return <Activity className="w-4 h-4 text-amber-600" />;
      default:
        return <FileText className="w-4 h-4 text-teal-600" />;
    }
  };

  const filteredEvents = patient.timeline.filter((ev) => {
    if (categoryFilter === 'All') return true;
    return ev.category === categoryFilter || (categoryFilter === 'Lab Test' && ev.category === 'Lab Test');
  });

  return (
    <div className="space-y-6">
      {/* Header & Filter Bar */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">Longitudinal Clinical EMR Timeline</h2>
          <p className="text-xs text-slate-500 mt-1">
            Complete chronological medical journey across {patient.timeline.length} indexed EMR milestones. Every entry includes direct PDF evidence navigation.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-1.5 shrink-0">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mr-1 flex items-center">
            <Filter className="w-3.5 h-3.5 mr-1" /> Filter:
          </span>
          {['All', 'Diagnosis', 'Medication', 'Lab Test', 'Hospitalization', 'Surgery'].map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoryFilter(cat)}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                categoryFilter === cat
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Chronological Timeline Stream */}
      <div className="relative pl-6 sm:pl-10 space-y-8 before:absolute before:left-3 sm:before:left-5 before:top-4 before:bottom-4 before:w-0.5 before:bg-gradient-to-b before:from-teal-500 before:via-indigo-500 before:to-slate-300">
        {filteredEvents.map((event, idx) => (
          <div key={event.id} className="relative group animate-fadeIn">
            {/* Timeline Node Badge */}
            <div className="absolute -left-6 sm:-left-10 top-0.5 w-7 h-7 rounded-full bg-white border-2 border-teal-500 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
              {getEventIcon(event.category)}
            </div>

            {/* Event Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80 hover:border-teal-500 transition-all space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
                <div className="flex items-center space-x-3">
                  <span className="px-3 py-1 bg-slate-900 text-white font-mono font-bold text-xs rounded-lg shadow-2xs">
                    {event.monthYear}
                  </span>
                  <span className="px-2 py-0.5 text-[10px] uppercase font-bold rounded bg-slate-100 text-slate-700 font-mono">
                    {event.category}
                  </span>
                </div>
                <div className="text-xs text-slate-400 font-mono">Recorded: {event.date}</div>
              </div>

              <div>
                <h3 className="font-bold text-slate-900 text-base">{event.title}</h3>
                <p className="text-xs sm:text-sm text-slate-700 mt-1.5 leading-relaxed">
                  {event.description}
                </p>
              </div>

              {/* Evidence Navigation Footer */}
              <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center text-xs text-slate-500 font-mono truncate">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mr-1.5 shrink-0" />
                  <span className="truncate">Evidence Quote: "{event.evidenceSnippet.slice(0, 50)}..."</span>
                </div>

                <button
                  onClick={() => onOpenEvidence(event.evidenceSnippet, event.evidencePage)}
                  className="px-4 py-1.5 bg-teal-50 hover:bg-teal-600 hover:text-white text-teal-800 font-bold text-xs rounded-xl border border-teal-200 transition-all shadow-2xs flex items-center justify-center space-x-1 shrink-0 cursor-pointer"
                >
                  <span>View Evidence (Page {event.evidencePage || 1})</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

