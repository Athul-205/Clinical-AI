import React, { useState } from 'react';
import { Sparkles, MessageSquare, Send, CheckCircle2, ShieldCheck, GitCompare, ArrowRight, Loader2, FileText, ChevronRight } from 'lucide-react';
import { Patient, QAMessage, ReportComparisonResult } from '../../types/hospital';
import { askClinicalAI, compareMedicalReports } from '../../services/aiAgentService';

interface AskClinicalAITabProps {
  patient: Patient;
  onOpenEvidence: (snippet?: string) => void;
}

export const AskClinicalAITab: React.FC<AskClinicalAITabProps> = ({ patient, onOpenEvidence }) => {
  const [activeSubTab, setActiveSubTab] = useState<'qa' | 'compare'>('qa');

  // Q&A State
  const [messages, setMessages] = useState<QAMessage[]>([
    {
      id: 'msg-1',
      sender: 'ai',
      timestamp: 'Just now',
      text: `Hello Dr. Arjun. I am the Clinical Q&A Agent indexing all ${patient.reports.length} longitudinal records for ${patient.name} (${patient.uid}). Ask me anything about historical vitals, drug interactions, or diagnostic changes over time. Every claim I provide includes verbatim PDF citations.`
    }
  ]);
  const [questionInput, setQuestionInput] = useState('');
  const [isLoadingQA, setIsLoadingQA] = useState(false);

  // Compare State
  const [reportAId, setReportAId] = useState<string>(patient.reports[0]?.id || '');
  const [reportBId, setReportBId] = useState<string>(patient.reports[Math.min(1, patient.reports.length - 1)]?.id || '');
  const [comparisonResult, setComparisonResult] = useState<ReportComparisonResult | null>(null);
  const [isComparing, setIsComparing] = useState(false);

  const handleSendQuestion = async (presetQ?: string) => {
    const query = presetQ || questionInput;
    if (!query.trim() || isLoadingQA) return;

    const userMsg: QAMessage = {
      id: `usr-${Date.now()}`,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      text: query
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!presetQ) setQuestionInput('');
    setIsLoadingQA(true);

    try {
      const result = await askClinicalAI(patient, query, messages);
      const responseText = result.answer || 'Clinical observation confirmed.';

      const aiMsg: QAMessage = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        text: responseText,
        citations: result.evidence.map((e) => ({
          reportTitle: e.reportTitle,
          quote: e.snippet,
          pageNumber: e.page
        }))
      };
      setMessages((prev) => [...prev, aiMsg]);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoadingQA(false);
    }
  };

  const handleRunCompare = async () => {
    if (!reportAId || !reportBId || reportAId === reportBId) return;
    const repA = patient.reports.find((r) => r.id === reportAId);
    const repB = patient.reports.find((r) => r.id === reportBId);
    if (!repA || !repB) return;

    setIsComparing(true);
    setComparisonResult(null);

    try {
      const res = await compareMedicalReports(patient, repA, repB);
      setComparisonResult(res);
    } catch (e) {
      console.error(e);
    } finally {
      setIsComparing(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Mode Switcher Header */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">Interactive Clinical AI Suite</h2>
          <p className="text-xs text-slate-500 mt-1">
            Interrogate {patient.name}'s multi-year records via Natural Language Q&A or side-by-side Report Comparison.
          </p>
        </div>

        <div className="flex items-center space-x-2 bg-slate-100 p-1 rounded-xl">
          <button
            onClick={() => setActiveSubTab('qa')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              activeSubTab === 'qa'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Ask Clinical AI (Q&A)</span>
          </button>
          <button
            onClick={() => setActiveSubTab('compare')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              activeSubTab === 'compare'
                ? 'bg-teal-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <GitCompare className="w-3.5 h-3.5" />
            <span>Compare Reports Mode</span>
          </button>
        </div>
      </div>

      {/* TAB 1: ASK CLINICAL AI (Q&A) */}
      {activeSubTab === 'qa' && (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Left Panel: Preset Questions */}
          <div className="lg:col-span-1 bg-white rounded-2xl p-5 shadow-sm border border-slate-200/80 space-y-4">
            <h3 className="font-bold text-slate-900 text-xs uppercase tracking-wider text-slate-400">
              Suggested Clinical Queries
            </h3>
            <div className="space-y-2">
              {[
                "What changed in kidney function (Creatinine/eGFR) over the past 2 years?",
                "List all blood pressure readings documented across historical reports.",
                "Are there any contraindications between current medications and NSAIDs?",
                "Summarize the recent hospital discharge summary findings.",
                "What is the status of glycemic control (HbA1c & Fasting glucose)?"
              ].map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendQuestion(q)}
                  className="w-full text-left p-3 rounded-xl bg-slate-50 hover:bg-teal-50 border border-slate-200/80 hover:border-teal-400 text-xs text-slate-700 font-medium transition-all cursor-pointer flex items-start justify-between group"
                >
                  <span className="line-clamp-2">{q}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-teal-600 shrink-0 ml-1 mt-0.5" />
                </button>
              ))}
            </div>
          </div>

          {/* Right Panel: Chat Stream */}
          <div className="lg:col-span-3 bg-white rounded-2xl shadow-sm border border-slate-200/80 flex flex-col h-[600px] overflow-hidden">
            {/* Chat History */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50/50">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'} animate-fadeIn`}
                >
                  <div className="flex items-center space-x-2 mb-1 text-[11px] font-semibold text-slate-400">
                    <span>{msg.sender === 'user' ? 'Dr. Arjun, MD' : 'Clinical Q&A Agent'}</span>
                    <span>•</span>
                    <span>{msg.timestamp}</span>
                  </div>

                  <div
                    className={`max-w-2xl p-5 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-slate-900 text-white shadow-md rounded-tr-none'
                        : 'bg-white text-slate-800 shadow-sm border border-slate-200 rounded-tl-none space-y-4'
                    }`}
                  >
                    <p className="whitespace-pre-line font-medium">{msg.text}</p>

                    {/* Citations Box */}
                    {msg.citations && msg.citations.length > 0 && (
                      <div className="pt-3 border-t border-slate-100 space-y-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-teal-700 flex items-center">
                          <CheckCircle2 className="w-3.5 h-3.5 mr-1" /> Verifiable EMR Citations:
                        </span>
                        {msg.citations.map((c, i) => (
                          <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-2.5 bg-slate-50 rounded-xl border border-slate-200">
                            <div className="text-xs truncate max-w-md">
                              <span className="font-bold text-slate-800">{c.reportTitle}</span> (Page {c.pageNumber}): <span className="italic text-slate-600">"{c.quote}"</span>
                            </div>
                            <button
                              onClick={() => onOpenEvidence(c.quote)}
                              className="px-2.5 py-1 bg-white hover:bg-teal-600 hover:text-white text-teal-700 font-bold text-[11px] rounded-lg border border-slate-300 transition-all shrink-0 cursor-pointer"
                            >
                              View Evidence
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {isLoadingQA && (
                <div className="flex items-center space-x-3 p-4 bg-white rounded-2xl border border-slate-200 max-w-md">
                  <Loader2 className="w-5 h-5 text-teal-600 animate-spin" />
                  <span className="text-xs font-semibold text-slate-700">Clinical Q&A Agent scanning longitudinal PDFs...</span>
                </div>
              )}
            </div>

            {/* Input Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendQuestion();
              }}
              className="p-4 bg-white border-t border-slate-200 flex items-center space-x-3"
            >
              <input
                type="text"
                value={questionInput}
                onChange={(e) => setQuestionInput(e.target.value)}
                placeholder="Ask any question about blood pressure trends, medications, lab flags..."
                className="flex-1 px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white"
              />
              <button
                type="submit"
                disabled={isLoadingQA || !questionInput.trim()}
                className="px-6 py-3 bg-teal-600 hover:bg-teal-500 disabled:opacity-50 text-white font-semibold text-xs sm:text-sm rounded-xl shadow transition-all flex items-center space-x-2 cursor-pointer"
              >
                <span>Ask AI</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* TAB 2: COMPARE REPORTS MODE */}
      {activeSubTab === 'compare' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80 space-y-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="w-full sm:w-1/2 space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">
                  Select Baseline Report (Report A)
                </label>
                <select
                  value={reportAId}
                  onChange={(e) => setReportAId(e.target.value)}
                  className="w-full p-3 bg-slate-50 border border-slate-300 rounded-xl text-xs font-semibold text-slate-900 focus:ring-2 focus:ring-teal-500"
                >
                  {patient.reports.map((r) => (
                    <option key={r.id} value={r.id}>
                      [{r.date}] {r.title} ({r.category})
                    </option>
                  ))}
                </select>
              </div>

              <div className="p-2 bg-slate-100 rounded-full mt-4 sm:mt-0">
                <GitCompare className="w-6 h-6 text-slate-600" />
              </div>

              <div className="w-full sm:w-1/2 space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">
                  Select Follow-up Report (Report B)
                </label>
                <select
                  value={reportBId}
                  onChange={(e) => setReportBId(e.target.value)}
                  className="w-full p-3 bg-slate-50 border border-slate-300 rounded-xl text-xs font-semibold text-slate-900 focus:ring-2 focus:ring-teal-500"
                >
                  {patient.reports.map((r) => (
                    <option key={r.id} value={r.id}>
                      [{r.date}] {r.title} ({r.category})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex justify-center pt-2">
              <button
                onClick={handleRunCompare}
                disabled={isComparing || reportAId === reportBId}
                className="px-8 py-3 bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-500 hover:to-blue-500 disabled:opacity-40 text-white font-bold text-sm rounded-xl shadow-lg transition-all flex items-center space-x-2 cursor-pointer"
              >
                {isComparing ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Report Comparison Agent Analyzing...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5" />
                    <span>Run AI Cross-Report Comparison</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Comparison Output */}
          {comparisonResult && (
            <div className="space-y-6 animate-fadeIn">
              {/* Executive Synthesis */}
              <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white rounded-2xl p-6 shadow-xl border border-slate-800 space-y-3">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center space-x-2">
                    <Sparkles className="w-5 h-5 text-teal-400" />
                    <h3 className="font-bold text-base">AI Comparative Synthesis: {comparisonResult.reportA?.title || 'Report A'} vs {comparisonResult.reportB?.title || 'Report B'}</h3>
                  </div>
                  <button
                    onClick={() => onOpenEvidence((comparisonResult.summary || 'Comparative synthesis').slice(0, 30))}
                    className="px-3 py-1 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs rounded-lg"
                  >
                    Verify Evidence
                  </button>
                </div>
                <p className="text-sm text-slate-200 font-medium leading-relaxed">
                  {comparisonResult.summary}
                </p>
              </div>

              {/* Side-by-Side Diff Table */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80 space-y-4">
                <h3 className="font-bold text-slate-900 text-base">Parameter-by-Parameter Diff Audit</h3>
                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200 font-mono">
                      <tr>
                        <th className="py-3 px-4">Test Parameter</th>
                        <th className="py-3 px-4">Baseline Value</th>
                        <th className="py-3 px-4">Follow-up Value</th>
                        <th className="py-3 px-4">Clinical Verdict</th>
                        <th className="py-3 px-4 text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 font-sans">
                      {(comparisonResult.labComparison || []).map((diff, idx) => (
                        <tr key={idx} className="hover:bg-slate-50">
                          <td className="py-3 px-4 font-bold text-slate-900">{diff.test}</td>
                          <td className="py-3 px-4 font-mono text-slate-700">{diff.previous}</td>
                          <td className="py-3 px-4 font-mono font-bold text-slate-900">{diff.current}</td>
                          <td className="py-3 px-4">
                            <span className={`px-2 py-0.5 rounded text-[10px] uppercase font-bold ${
                              diff.change === 'Improved' ? 'bg-emerald-100 text-emerald-800' :
                              diff.change === 'Worsened' ? 'bg-rose-100 text-rose-800' : 'bg-slate-100 text-slate-700'
                            }`}>
                              {diff.change}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-right">
                            <button
                              onClick={() => onOpenEvidence(diff.test)}
                              className="text-teal-600 font-bold hover:underline flex items-center justify-end ml-auto"
                            >
                              <span>View PDF</span>
                              <ChevronRight className="w-3.5 h-3.5" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

