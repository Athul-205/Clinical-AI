import React, { useState } from 'react';
import { FileEdit, Plus, Save, UserCheck, Calendar, Tag, Shield } from 'lucide-react';
import { Patient, DoctorNote } from '../../types/hospital';

interface DoctorNotesTabProps {
  patient: Patient;
  onAddNote: (note: DoctorNote) => void;
}

export const DoctorNotesTab: React.FC<DoctorNotesTabProps> = ({ patient, onAddNote }) => {
  const [content, setContent] = useState('');
  const [tag, setTag] = useState<'Observation' | 'Plan' | 'Follow-up' | 'Diagnosis'>('Plan');
  const [isAdding, setIsAdding] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;

    const newNote: DoctorNote = {
      id: `note-${Date.now()}`,
      date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
      doctorName: 'Dr. Arjun, MD (Senior Attending Clinical AI Director)',
      content: content.trim(),
      tags: [tag]
    };

    onAddNote(newNote);
    setContent('');
    setIsAdding(false);
  };

  return (
    <div className="space-y-6">
      {/* Top Controls */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">Physician Private Clinical Notes</h2>
          <p className="text-xs text-slate-500 mt-1">
            Exclusive attending notes for {patient.name} ({patient.uid}). Stored with 256-bit AES encryption.
          </p>
        </div>

        <button
          onClick={() => setIsAdding(!isAdding)}
          className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs rounded-xl shadow transition-all flex items-center justify-center space-x-2 shrink-0 cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>{isAdding ? 'Cancel New Note' : 'Add Clinical Note'}</span>
        </button>
      </div>

      {/* Add Note Box */}
      {isAdding && (
        <form onSubmit={handleSave} className="bg-slate-900 text-white rounded-2xl p-6 shadow-xl border border-slate-800 space-y-4 animate-fadeIn">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center space-x-2">
              <FileEdit className="w-5 h-5 text-teal-400" />
              <h3 className="font-bold text-sm">Create New Attending Note</h3>
            </div>
            <span className="text-xs text-slate-400 font-mono">Author: Dr. Arjun, MD</span>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
              Clinical Classification Tag
            </label>
            <div className="flex flex-wrap gap-2">
              {(['Plan', 'Observation', 'Follow-up', 'Diagnosis'] as const).map((t) => (
                <button
                  type="button"
                  key={t}
                  onClick={() => setTag(t)}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    tag === t
                      ? 'bg-teal-500 text-slate-950 shadow-sm font-bold'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
              Note Observations & Therapeutic Plan
            </label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={4}
              placeholder="Enter physician observations, regimen adjustments, patient discussions, or follow-up milestones..."
              className="w-full p-4 bg-slate-800 border border-slate-700 rounded-xl text-xs text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-400 font-medium leading-relaxed"
              required
            />
          </div>

          <div className="flex justify-end space-x-3 pt-2">
            <button
              type="button"
              onClick={() => setIsAdding(false)}
              className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs rounded-xl shadow transition-all flex items-center space-x-2 cursor-pointer"
            >
              <Save className="w-4 h-4" />
              <span>Save & Sign Note</span>
            </button>
          </div>
        </form>
      )}

      {/* Notes Stream */}
      <div className="space-y-4">
        {patient.doctorNotes && patient.doctorNotes.length > 0 ? (
          patient.doctorNotes.map((note) => (
            <div key={note.id} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-1.5 text-xs font-bold text-slate-900">
                    <UserCheck className="w-4 h-4 text-teal-600 shrink-0" />
                    <span>{note.doctorName}</span>
                  </div>
                  {note.tags && note.tags.map((t, idx) => (
                    <span key={idx} className="px-2 py-0.5 bg-indigo-50 text-indigo-700 text-[10px] font-bold uppercase rounded border border-indigo-200/60 font-mono">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center text-xs text-slate-400 font-mono space-x-2">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{note.date}</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                {note.content}
              </p>
            </div>
          ))
        ) : (
          <div className="p-12 text-center bg-white rounded-2xl border border-slate-200/80 text-slate-500">
            <FileEdit className="w-8 h-8 mx-auto mb-2 text-slate-400" />
            <p className="text-sm font-bold text-slate-700">No Private Physician Notes Yet</p>
            <p className="text-xs text-slate-400 mt-1">Click "Add Clinical Note" above to record attending observations.</p>
          </div>
        )}
      </div>
    </div>
  );
};

