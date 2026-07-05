import React, { useState } from 'react';
import { FileText, Upload, Filter, Search, Calendar, Building2, UserCheck, CheckCircle2, ChevronRight, FileCode } from 'lucide-react';
import { MedicalReport, Patient } from '../../types/hospital';

interface MedicalReportsTabProps {
  patient: Patient;
  onOpenReport: (report: MedicalReport) => void;
  onOpenUploadModal: () => void;
}

export const MedicalReportsTab: React.FC<MedicalReportsTabProps> = ({
  patient,
  onOpenReport,
  onOpenUploadModal
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCat, setSelectedCat] = useState<string>('All');

  const filteredReports = patient.reports.filter((rep) => {
    const matchesSearch =
      rep.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      rep.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      rep.doctorName.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCat = selectedCat === 'All' || rep.category === selectedCat;
    return matchesSearch && matchesCat;
  });

  return (
    <div className="space-y-6">
      {/* Top Header & Upload Action */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">Longitudinal Medical Reports Repository</h2>
          <p className="text-xs text-slate-500 mt-1">
            Showing <span className="font-bold text-slate-800">{patient.reports.length} indexed EMR documents</span> for {patient.name} ({patient.uid}). Every report is OCR parsed and signed.
          </p>
        </div>

        <button
          onClick={onOpenUploadModal}
          className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center space-x-2 shrink-0 cursor-pointer"
        >
          <Upload className="w-4 h-4" />
          <span>Upload Original Report or Scan</span>
        </button>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200 flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search report titles, doctors, or findings..."
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
          {['All', 'Laboratory', 'Imaging', 'Clinical Notes', 'Prescription', 'Discharge Summary', 'Surgical'].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                selectedCat === cat
                  ? 'bg-[#0f172a] text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Reports Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredReports.map((report) => (
          <div
            key={report.id}
            onClick={() => onOpenReport(report)}
            className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200 hover:border-blue-500 hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 bg-slate-100 rounded-xl text-slate-700 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="px-2 py-0.5 text-[10px] uppercase font-mono font-bold rounded bg-indigo-50 text-indigo-700 border border-indigo-200">
                      {report.category}
                    </span>
                    {report.fileName && (
                      <span className="ml-2 px-2 py-0.5 text-[10px] uppercase font-mono font-bold rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                        Uploaded: {report.fileName.slice(0, 18)}...
                      </span>
                    )}
                    <h3 className="font-bold text-slate-900 text-sm mt-1 group-hover:text-blue-600 transition-colors">
                      {report.title}
                    </h3>
                  </div>
                </div>
              </div>

              <p className="text-xs text-slate-600 line-clamp-2 font-medium bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                {report.summary}
              </p>

              <div className="grid grid-cols-2 gap-2 pt-1 text-[11px] text-slate-500">
                <div className="flex items-center truncate">
                  <UserCheck className="w-3.5 h-3.5 text-slate-400 mr-1.5 shrink-0" />
                  <span className="truncate">{report.doctorName}</span>
                </div>
                <div className="flex items-center truncate">
                  <Calendar className="w-3.5 h-3.5 text-slate-400 mr-1.5 shrink-0" />
                  <span className="font-mono">{report.date}</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="flex items-center text-emerald-600 font-bold text-[11px]">
                <CheckCircle2 className="w-3.5 h-3.5 mr-1" /> Verified AI Evidence
              </span>
              <span className="text-teal-600 font-bold group-hover:translate-x-1 transition-transform flex items-center">
                <span>View EMR PDF</span>
                <ChevronRight className="w-4 h-4 ml-0.5" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
