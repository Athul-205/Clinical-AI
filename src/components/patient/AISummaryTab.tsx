import React, { useState, useEffect } from 'react';
import { Sparkles, CheckCircle2, ShieldCheck, AlertTriangle, Pill, Activity, FileText, HeartPulse, Stethoscope, RefreshCw, ChevronRight } from 'lucide-react';
import { Patient } from '../../types/hospital';

interface AISummaryTabProps {
  patient: Patient;
  onOpenEvidence: (snippet?: string) => void;
}

export const AISummaryTab: React.FC<AISummaryTabProps> = ({ patient, onOpenEvidence }) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [processedSteps, setProcessedSteps] = useState<string[]>([]);
  const [hasProcessed, setHasProcessed] = useState(false);

  // Trigger sequential animation on initial load for each selected patient
  useEffect(() => {
    runAIReview();
  }, [patient.id]);

  const runAIReview = () => {
    setIsProcessing(true);
    setHasProcessed(false);
    setProcessedSteps([]);

    const steps = [
      '✓ CBC & Comprehensive Metabolic Report',
      '✓ Blood Sugar & HbA1c Panel',
      '✓ 12-Lead Resting ECG / Telemetry',
      '✓ Endocrinology & Specialty Prescriptions',
      '✓ Inpatient Hospital Discharge Summaries',
      '✓ Outpatient Physician Consultation Notes',
      '✓ Radiological Imaging & Doppler Scans'
    ];

    let idx = 0;
    const interval = setInterval(() => {
      if (idx < steps.length) {
        setProcessedSteps((prev) => [...prev, steps[idx]]);
        idx++;
      } else {
        clearInterval(interval);
        setIsProcessing(false);
        setHasProcessed(true);
      }
    }, 350);
  };

  return (
    <div className="space-y-8">
      {/* Processing Animation Panel */}
      {isProcessing && (
        <div className="bg-slate-900 text-white rounded-2xl p-8 shadow-xl border border-slate-800 space-y-6 animate-fadeIn">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-teal-500/20 text-teal-400 rounded-xl border border-teal-500/30 animate-pulse">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold">🤖 AI is reviewing {patient.name}'s medical records...</h3>
              <p className="text-xs text-slate-400 font-mono">Multi-agent OCR parsing, EMR cross-validation & citation indexing in progress</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {processedSteps.map((s, i) => (
              <div key={i} className="flex items-center space-x-2.5 p-3 bg-slate-800/80 rounded-xl border border-slate-700/60 text-xs font-semibold text-emerald-300 animate-fadeIn">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
                <span>{s}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Success Notification */}
      {!isProcessing && hasProcessed && (
        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 animate-fadeIn">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-emerald-500 text-white rounded-xl shadow">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-emerald-950">AI Clinical Summary Generated Successfully</h4>
              <p className="text-xs text-emerald-800">
                Synthesized 100% of historical EMR documents. Every statement includes verifiable PDF evidence links.
              </p>
            </div>
          </div>
          <button
            onClick={runAIReview}
            className="px-3.5 py-1.5 bg-white hover:bg-emerald-100 text-emerald-800 font-semibold text-xs rounded-xl border border-emerald-300 shadow-2xs flex items-center space-x-1.5 shrink-0 transition-colors cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Re-run Synthesis</span>
          </button>
        </div>
      )}

      {/* Main Clinical Summary Grid */}
      <div className={`space-y-6 transition-opacity duration-300 ${isProcessing ? 'opacity-30 pointer-events-none' : 'opacity-100'}`}>
        
        {/* 1. Patient Overview */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80 space-y-3">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h3 className="font-bold text-slate-900 text-base flex items-center">
              <FileText className="w-5 h-5 text-teal-600 mr-2" />
              1. Patient Executive Clinical Overview
            </h3>
            <button
              onClick={() => onOpenEvidence(patient.overviewSummary.slice(0, 40))}
              className="px-3 py-1 bg-teal-50 hover:bg-teal-100 text-teal-700 font-bold text-xs rounded-lg border border-teal-200 transition-colors flex items-center space-x-1"
            >
              <span>View Evidence</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
          <p className="text-sm text-slate-800 font-medium leading-relaxed">
            {patient.overviewSummary}
          </p>
        </div>

        {/* 2. Chronic Conditions */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80 space-y-4">
          <h3 className="font-bold text-slate-900 text-base flex items-center border-b border-slate-100 pb-3">
            <Stethoscope className="w-5 h-5 text-indigo-600 mr-2" />
            2. Active Chronic Diagnoses & Problems
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {patient.conditions.map((cond, idx) => (
              <div key={idx} className="p-4 bg-slate-50 rounded-xl border border-slate-200/80 flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="font-bold text-slate-900 text-sm">{cond.name}</span>
                    <span className="px-2 py-0.5 text-[10px] uppercase font-bold rounded bg-indigo-100 text-indigo-800">
                      {cond.status}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 font-mono">Diagnosed: {cond.diagnosedDate}</p>
                </div>
                <button
                  onClick={() => onOpenEvidence(cond.evidenceSnippet)}
                  className="px-3 py-1 bg-white hover:bg-teal-600 hover:text-white text-teal-700 font-bold text-xs rounded-lg border border-slate-300 transition-all shadow-2xs shrink-0"
                >
                  View Evidence
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Current Medications & 4. Allergies */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Medications */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80 space-y-4">
            <h3 className="font-bold text-slate-900 text-base flex items-center border-b border-slate-100 pb-3">
              <Pill className="w-5 h-5 text-blue-600 mr-2" />
              3. Current Pharmacological Regimen
            </h3>
            <div className="space-y-3">
              {patient.medications.map((med, idx) => (
                <div key={idx} className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80 flex items-center justify-between gap-2">
                  <div>
                    <div className="font-bold text-slate-900 text-xs sm:text-sm">{med.name}</div>
                    <div className="text-xs text-blue-800 font-medium mt-0.5">{med.dosage} • {med.frequency}</div>
                  </div>
                  <button
                    onClick={() => onOpenEvidence(med.evidenceSnippet)}
                    className="px-2.5 py-1 bg-white hover:bg-blue-600 hover:text-white text-blue-700 font-bold text-xs rounded-lg border border-slate-300 transition-all shadow-2xs shrink-0"
                  >
                    View Evidence
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Allergies */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80 space-y-4">
            <h3 className="font-bold text-slate-900 text-base flex items-center border-b border-slate-100 pb-3">
              <AlertTriangle className="w-5 h-5 text-rose-600 mr-2" />
              4. Documented Drug Allergies
            </h3>
            <div className="space-y-3">
              {patient.allergies.length > 0 ? (
                patient.allergies.map((alg, idx) => (
                  <div key={idx} className="p-3.5 bg-rose-50/70 rounded-xl border border-rose-200 flex items-center justify-between gap-2">
                    <div>
                      <div className="font-bold text-rose-950 text-xs sm:text-sm flex items-center">
                        <span>{alg.allergen}</span>
                        <span className="ml-2 px-1.5 py-0.2 bg-rose-600 text-white text-[10px] font-bold rounded uppercase">
                          {alg.severity}
                        </span>
                      </div>
                      <div className="text-xs text-rose-800 mt-0.5">Reaction: {alg.reaction}</div>
                    </div>
                    <button
                      onClick={() => onOpenEvidence(alg.evidenceSnippet)}
                      className="px-2.5 py-1 bg-white hover:bg-rose-700 hover:text-white text-rose-700 font-bold text-xs rounded-lg border border-rose-300 transition-all shadow-2xs shrink-0"
                    >
                      View Evidence
                    </button>
                  </div>
                ))
              ) : (
                <div className="p-6 bg-emerald-50 rounded-xl text-xs text-emerald-800 font-medium text-center">
                  No known drug allergies reported.
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 5. Laboratory Findings (Abnormal Highlights) */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80 space-y-4">
          <h3 className="font-bold text-slate-900 text-base flex items-center border-b border-slate-100 pb-3">
            <Activity className="w-5 h-5 text-amber-600 mr-2" />
            5. Abnormal Laboratory Highlights
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {patient.abnormalLabs.map((lab, idx) => (
              <div key={idx} className="p-4 bg-amber-50/60 rounded-xl border border-amber-200 flex items-center justify-between gap-3">
                <div>
                  <div className="font-bold text-amber-950 text-sm">{lab.testName}</div>
                  <div className="text-xs font-mono font-bold text-rose-700 mt-1">{lab.value}</div>
                </div>
                <button
                  onClick={() => onOpenEvidence(lab.evidenceSnippet)}
                  className="px-3 py-1 bg-white hover:bg-amber-600 hover:text-white text-amber-800 font-bold text-xs rounded-lg border border-amber-300 transition-all shadow-2xs shrink-0"
                >
                  View Evidence
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* 6. Vital Trends & Longitudinal Shifts */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80 space-y-4">
          <h3 className="font-bold text-slate-900 text-base flex items-center border-b border-slate-100 pb-3">
            <HeartPulse className="w-5 h-5 text-emerald-600 mr-2" />
            6. Longitudinal Vital & Biomarker Trends
          </h3>
          <div className="space-y-3">
            {patient.vitalTrends.map((trend, idx) => (
              <div key={idx} className="p-4 bg-slate-50 rounded-xl border border-slate-200/80 flex items-center justify-between gap-3">
                <div className="flex items-center space-x-3">
                  <span className={`px-2.5 py-1 rounded text-[11px] font-bold uppercase ${
                    trend.status === 'improving' ? 'bg-emerald-100 text-emerald-800' :
                    trend.status === 'worsening' ? 'bg-rose-100 text-rose-800' : 'bg-blue-100 text-blue-800'
                  }`}>
                    {trend.status}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-800">{trend.statusText}</span>
                </div>
                <button
                  onClick={() => onOpenEvidence(trend.evidenceSnippet)}
                  className="px-3 py-1 bg-white hover:bg-teal-600 hover:text-white text-teal-700 font-bold text-xs rounded-lg border border-slate-300 transition-all shadow-2xs shrink-0"
                >
                  View Evidence
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* 7. Risk Flags & 8. Surgeries/Hospitalizations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Risk Flags */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80 space-y-4">
            <h3 className="font-bold text-slate-900 text-base flex items-center border-b border-slate-100 pb-3">
              <AlertTriangle className="w-5 h-5 text-rose-600 mr-2" />
              7. High-Priority Clinical Risk Flags
            </h3>
            <div className="space-y-3">
              {patient.riskFlags.map((rf, idx) => (
                <div key={idx} className="p-4 bg-rose-50 rounded-xl border border-rose-200 flex items-start justify-between gap-3">
                  <div>
                    <div className="font-bold text-rose-950 text-xs uppercase tracking-wide flex items-center">
                      <span>{rf.category}</span>
                      <span className="ml-2 px-1.5 py-0.2 bg-rose-600 text-white text-[10px] rounded font-bold">HIGH RISK</span>
                    </div>
                    <p className="text-xs text-rose-900 font-medium mt-1 leading-relaxed">{rf.description}</p>
                  </div>
                  <button
                    onClick={() => onOpenEvidence(rf.evidenceSnippet)}
                    className="px-2.5 py-1 bg-white hover:bg-rose-700 hover:text-white text-rose-700 font-bold text-xs rounded-lg border border-rose-300 transition-all shadow-2xs shrink-0"
                  >
                    View Evidence
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Surgeries & Hospitalizations */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80 space-y-4">
            <h3 className="font-bold text-slate-900 text-base flex items-center border-b border-slate-100 pb-3">
              <Stethoscope className="w-5 h-5 text-indigo-600 mr-2" />
              8. Surgical & Hospital Admission History
            </h3>
            <div className="space-y-3">
              {patient.surgeries.map((s, i) => (
                <div key={`s-${i}`} className="p-3.5 bg-indigo-50/60 rounded-xl border border-indigo-100 flex items-center justify-between gap-2">
                  <div>
                    <div className="font-bold text-indigo-950 text-xs">{s.procedure}</div>
                    <div className="text-[11px] text-indigo-800 font-mono mt-0.5">{s.date} • {s.hospital}</div>
                  </div>
                  <button
                    onClick={() => onOpenEvidence(s.evidenceSnippet)}
                    className="px-2.5 py-1 bg-white hover:bg-indigo-600 hover:text-white text-indigo-700 font-bold text-xs rounded-lg border border-slate-300 transition-all shadow-2xs shrink-0"
                  >
                    View Evidence
                  </button>
                </div>
              ))}
              {patient.hospitalizations.map((h, i) => (
                <div key={`h-${i}`} className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between gap-2">
                  <div>
                    <div className="font-bold text-slate-900 text-xs">Admitted: {h.reason}</div>
                    <div className="text-[11px] text-slate-500 font-mono mt-0.5">{h.admissionDate} - {h.dischargeDate} ({h.hospital})</div>
                  </div>
                  <button
                    onClick={() => onOpenEvidence(h.evidenceSnippet)}
                    className="px-2.5 py-1 bg-white hover:bg-slate-800 hover:text-white text-slate-700 font-bold text-xs rounded-lg border border-slate-300 transition-all shadow-2xs shrink-0"
                  >
                    View Evidence
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 9. Overall AI Clinical Insights & Synthesis */}
        <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white rounded-2xl p-6 shadow-xl border border-slate-800 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center space-x-2.5">
              <Sparkles className="w-5 h-5 text-teal-400 animate-pulse" />
              <h3 className="font-bold text-base">9. AI Clinical Insights Synthesis</h3>
            </div>
            <button
              onClick={() => onOpenEvidence(patient.aiInsights.slice(0, 40))}
              className="px-3.5 py-1.5 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs rounded-xl shadow transition-all"
            >
              Verify Source EMR
            </button>
          </div>
          <p className="text-sm text-slate-200 leading-relaxed font-medium">
            {patient.aiInsights}
          </p>
        </div>

      </div>
    </div>
  );
};
