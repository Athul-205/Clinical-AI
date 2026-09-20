import React from 'react';
import { X, FileText, CheckCircle2, Building2, UserCheck, Calendar, ShieldAlert, ArrowLeft, ArrowRight, Printer } from 'lucide-react';
import { MedicalReport } from '../../types/hospital';

interface ReportEvidenceViewerProps {
  isOpen: boolean;
  onClose: () => void;
  report: MedicalReport | null;
  highlightSnippet?: string;
  targetPage?: number;
}

export const ReportEvidenceViewer: React.FC<ReportEvidenceViewerProps> = ({
  isOpen,
  onClose,
  report,
  highlightSnippet,
  targetPage = 1
}) => {
  const [currentPage, setCurrentPage] = React.useState(targetPage);

  React.useEffect(() => {
    if (targetPage) setCurrentPage(targetPage);
  }, [targetPage, report]);

  if (!isOpen || !report) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-2xl max-w-4xl w-full h-[90vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
        {/* Top Control Header */}
        <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between shrink-0">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-teal-500/20 text-teal-400 rounded-xl border border-teal-500/30">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="font-bold text-sm sm:text-base">{report.title}</h3>
                <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-300 text-[10px] uppercase font-bold rounded border border-emerald-500/30 flex items-center">
                  <CheckCircle2 className="w-3 h-3 mr-1" /> Verified EMR Evidence
                </span>
              </div>
              <p className="text-xs text-slate-400 font-mono">
                {report.hospitalName} • Doc ID: {report.id.toUpperCase()}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => window.print()}
              className="hidden sm:flex items-center space-x-1 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-medium text-slate-200"
              title="Print EMR Record"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Evidence Highlight Banner */}
        {highlightSnippet && (
          <div className="bg-amber-50 border-b border-amber-200 px-6 py-3 shrink-0 flex items-start space-x-3">
            <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="text-xs">
              <span className="font-bold text-amber-900 uppercase tracking-wide">Report Verification Agent Highlight (Page {currentPage}): </span>
              <span className="font-mono bg-amber-100 text-amber-950 px-1.5 py-0.5 rounded border border-amber-300 font-semibold">
                "{highlightSnippet}"
              </span>
            </div>
          </div>
        )}

        {/* Realistic Hospital PDF EMR Document Area */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 bg-slate-100 flex justify-center">
          <div className="bg-white max-w-3xl w-full rounded-lg shadow-lg border border-slate-300 p-8 sm:p-12 space-y-8 min-h-[750px] flex flex-col justify-between font-sans">
            <div>
              {/* Hospital Official Letterhead */}
              <div className="border-b-2 border-slate-900 pb-6 flex justify-between items-start">
                <div>
                  <h1 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 uppercase">
                    {report.hospitalName}
                  </h1>
                  <p className="text-xs text-slate-500 mt-1 font-mono">
                    Department of EMR Clinical Intelligence & Diagnostic Reference Suite
                  </p>
                  <p className="text-[11px] text-slate-400 font-mono">
                    Accredited Healthcare Facility • NABL & JCI Standard Audit Compliant
                  </p>
                </div>
                <div className="text-right font-mono text-xs text-slate-600">
                  <div className="font-bold text-slate-900">DATE: {report.date}</div>
                  <div>RECORD ID: #{report.id.toUpperCase()}</div>
                  <div className="text-teal-700 font-bold">STATUS: FILED & AUTHENTICATED</div>
                </div>
              </div>

              {/* Patient & Doctor Metadata Grid */}
              <div className="grid grid-cols-2 gap-4 bg-slate-50 p-4 rounded-xl border border-slate-200/80 my-6 text-xs">
                <div>
                  <span className="text-slate-400 font-bold uppercase tracking-wider block text-[10px]">Attending Physician</span>
                  <span className="font-bold text-slate-900 flex items-center mt-0.5">
                    <UserCheck className="w-3.5 h-3.5 text-teal-600 mr-1 shrink-0" />
                    {report.doctorName}
                  </span>
                </div>
                <div>
                  <span className="text-slate-400 font-bold uppercase tracking-wider block text-[10px]">Report Classification</span>
                  <span className="font-bold text-indigo-700 uppercase font-mono mt-0.5 block">
                    {report.category}
                  </span>
                </div>
              </div>

              {/* Original Uploaded Image or Scan Preview */}
              {report.fileUrl && (
                <div className="space-y-2 my-4">
                  <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500 border-b border-slate-200 pb-1">
                    Original Uploaded Scan / Document Preview
                  </h2>
                  <div className="bg-slate-900 rounded-xl p-4 border border-slate-700 flex flex-col items-center justify-center overflow-hidden">
                    <img src={report.fileUrl} alt={report.fileName || "Uploaded Scan"} className="max-h-96 object-contain rounded-lg shadow-lg" />
                    {report.fileName && (
                      <div className="mt-2 text-xs font-mono text-slate-300 bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
                        File: {report.fileName} ({report.fileType || 'Image Scan'})
                      </div>
                    )}
                  </div>
                </div>
              )}

              {report.fileName && !report.fileUrl && (
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 my-4 flex items-center space-x-3">
                  <FileText className="w-5 h-5 text-blue-600 shrink-0" />
                  <div className="text-xs">
                    <span className="font-bold text-slate-900">Original Uploaded Document: </span>
                    <span className="font-mono text-blue-700 font-semibold">{report.fileName}</span>
                    <span className="text-slate-500 ml-2">({report.fileType || 'PDF Document'})</span>
                  </div>
                </div>
              )}

              {/* Report Summary Header */}
              <div className="space-y-2">
                <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500 border-b border-slate-200 pb-1">
                  1. Executive Clinical Summary
                </h2>
                <p className="text-sm text-slate-800 font-medium leading-relaxed bg-slate-50/50 p-3 rounded-lg border border-slate-100">
                  {report.summary}
                </p>
              </div>

              {/* Detailed Findings List */}
              <div className="space-y-3 mt-6">
                <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500 border-b border-slate-200 pb-1">
                  2. Documented Findings & Observations
                </h2>
                <ul className="space-y-2.5 pl-2">
                  {report.findings.map((finding, idx) => {
                    const isHighlighted = highlightSnippet && finding.toLowerCase().includes(highlightSnippet.toLowerCase().slice(0, 15));
                    return (
                      <li
                        key={idx}
                        className={`text-xs sm:text-sm leading-relaxed p-2.5 rounded-lg transition-all flex items-start space-x-2 ${
                          isHighlighted
                            ? 'bg-amber-100/90 text-amber-950 font-bold border-l-4 border-amber-600 shadow-sm'
                            : 'text-slate-700 bg-slate-50/40'
                        }`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-600 mt-2 shrink-0" />
                        <span>{finding}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Lab Values Table if present */}
              {report.labValues && report.labValues.length > 0 && (
                <div className="space-y-3 mt-6">
                  <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500 border-b border-slate-200 pb-1">
                    3. Quantitative Assay Assay Panel
                  </h2>
                  <div className="overflow-x-auto rounded-lg border border-slate-200">
                    <table className="w-full text-left text-xs font-mono">
                      <thead className="bg-slate-100 text-slate-600 font-bold border-b border-slate-200">
                        <tr>
                          <th className="py-2 px-3">Test Parameter</th>
                          <th className="py-2 px-3">Result Value</th>
                          <th className="py-2 px-3">Reference Range</th>
                          <th className="py-2 px-3">Flag</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200">
                        {report.labValues.map((lab, idx) => (
                          <tr key={idx} className={lab.status === 'critical' ? 'bg-rose-50 font-bold' : lab.status === 'abnormal' ? 'bg-amber-50/60' : ''}>
                            <td className="py-2 px-3 font-semibold text-slate-900">{lab.parameter}</td>
                            <td className="py-2 px-3 font-bold text-slate-900">{lab.value}</td>
                            <td className="py-2 px-3 text-slate-500">{lab.referenceRange}</td>
                            <td className="py-2 px-3">
                              {lab.status === 'critical' ? (
                                <span className="px-1.5 py-0.5 bg-rose-600 text-white rounded font-bold uppercase text-[10px]">CRITICAL</span>
                              ) : lab.status === 'abnormal' ? (
                                <span className="px-1.5 py-0.5 bg-amber-500 text-white rounded font-bold uppercase text-[10px]">ABNORMAL</span>
                              ) : (
                                <span className="px-1.5 py-0.5 bg-emerald-600 text-white rounded uppercase text-[10px]">NORMAL</span>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Impression Box */}
              <div className="mt-8 p-4 bg-indigo-50/60 rounded-xl border border-indigo-100 text-xs">
                <span className="font-bold text-indigo-900 uppercase tracking-wider block text-[11px] mb-1">
                  Final Clinical Impression / Diagnostic Conclusion:
                </span>
                <p className="text-indigo-950 font-semibold text-sm leading-relaxed">
                  {report.impression}
                </p>
              </div>
            </div>

            {/* Signature & Page Footnote */}
            <div className="pt-8 border-t border-slate-200 flex items-end justify-between text-xs text-slate-500">
              <div>
                <div className="w-36 border-b border-slate-400 pb-1 font-serif italic text-slate-800 text-sm">
                  {report.doctorName}
                </div>
                <div className="font-bold text-slate-700 mt-1">Authorized Digital Signature</div>
                <div className="text-[10px] text-slate-400">Electronic EMR ID: #{report.id.toUpperCase()}-VERIFIED</div>
              </div>

              <div className="text-right">
                <div className="font-mono text-[11px] bg-slate-100 px-2.5 py-1 rounded border border-slate-200">
                  Page {currentPage} of {report.pageCount}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Navigation bar */}
        <div className="bg-slate-100 px-6 py-3 border-t border-slate-200 flex items-center justify-between shrink-0">
          <div className="text-xs font-medium text-slate-600 flex items-center space-x-2">
            <span>Report Page Navigation:</span>
            <div className="flex items-center space-x-1">
              <button
                disabled={currentPage <= 1}
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                className="p-1 rounded bg-white border border-slate-300 disabled:opacity-40 hover:bg-slate-50 text-slate-700"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <span className="font-mono font-bold px-2 text-slate-800">Page {currentPage} / {report.pageCount}</span>
              <button
                disabled={currentPage >= report.pageCount}
                onClick={() => setCurrentPage(prev => Math.min(report.pageCount, prev + 1))}
                className="p-1 rounded bg-white border border-slate-300 disabled:opacity-40 hover:bg-slate-50 text-slate-700"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-xl shadow transition-all cursor-pointer"
          >
            Close EMR Viewer
          </button>
        </div>
      </div>
    </div>
  );
};

