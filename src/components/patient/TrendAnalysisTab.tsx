import React from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, AreaChart, Area } from 'recharts';
import { TrendingUp, Activity, HeartPulse, Scale, ShieldCheck, ChevronRight } from 'lucide-react';
import { Patient } from '../../types/hospital';

interface TrendAnalysisTabProps {
  patient: Patient;
  onOpenEvidence: (snippet?: string) => void;
}

export const TrendAnalysisTab: React.FC<TrendAnalysisTabProps> = ({ patient, onOpenEvidence }) => {
  const points = patient.labTrendPoints || [];

  return (
    <div className="space-y-8">
      {/* Top Header */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80">
        <h2 className="text-xl font-bold text-slate-900 tracking-tight">AI Longitudinal Trend & Regression Analysis</h2>
        <p className="text-xs text-slate-500 mt-1">
          Automated cross-report comparisons tracking blood pressure, glycemic shifts, renal function, weight, and lipid profiles over time for {patient.name}.
        </p>
      </div>

      {/* Grid of Charts & Interpretations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* 1. Blood Pressure Trend */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80 space-y-4 flex flex-col justify-between">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center space-x-2">
              <HeartPulse className="w-5 h-5 text-rose-600" />
              <div>
                <h3 className="font-bold text-slate-900 text-sm">Blood Pressure Progression (Systolic / Diastolic)</h3>
                <span className="text-[11px] text-emerald-600 font-semibold">Trend: Blood pressure is gradually improving towards normal threshold.</span>
              </div>
            </div>
          </div>

          <div className="h-64 w-full pt-2">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={points}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                <XAxis dataKey="date" stroke="#64748b" fontSize={10} />
                <YAxis stroke="#64748b" fontSize={10} domain={[60, 180]} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#0f172a', color: '#fff', borderRadius: '8px', fontSize: '12px' }}
                />
                <Legend wrapperStyle={{ fontSize: '11px' }} />
                <Line type="monotone" name="Systolic BP (mmHg)" dataKey="systolic" stroke="#e11d48" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                <Line type="monotone" name="Diastolic BP (mmHg)" dataKey="diastolic" stroke="#3b82f6" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs bg-slate-50 p-3 rounded-xl">
            <span className="text-slate-600 font-medium">Latest reading: <strong className="text-slate-900">{points[points.length - 1]?.systolic}/{points[points.length - 1]?.diastolic} mmHg</strong></span>
            <button
              onClick={() => onOpenEvidence("Blood pressure improving")}
              className="text-teal-700 font-bold hover:underline flex items-center"
            >
              <span>Verify EMR Source</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 2. Glycemic Control (HbA1c) Trend */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80 space-y-4 flex flex-col justify-between">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center space-x-2">
              <Activity className="w-5 h-5 text-amber-600" />
              <div>
                <h3 className="font-bold text-slate-900 text-sm">Glycated Hemoglobin (HbA1c %) Progression</h3>
                <span className="text-[11px] text-amber-600 font-semibold">
                  Trend: {points[points.length - 1]?.hba1c! > points[0]?.hba1c! ? 'Diabetes control is worsening over time.' : 'Glycemic control stable/improving.'}
                </span>
              </div>
            </div>
          </div>

          <div className="h-64 w-full pt-2">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={points}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                <XAxis dataKey="date" stroke="#64748b" fontSize={10} />
                <YAxis stroke="#64748b" fontSize={10} domain={[4, 10]} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#0f172a', color: '#fff', borderRadius: '8px', fontSize: '12px' }}
                />
                <Area type="monotone" name="HbA1c (%)" dataKey="hba1c" stroke="#f59e0b" fill="#fef3c7" strokeWidth={3} />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs bg-slate-50 p-3 rounded-xl">
            <span className="text-slate-600 font-medium">Latest HbA1c: <strong className="text-amber-700">{points[points.length - 1]?.hba1c}%</strong> (Target &lt; 5.7%)</span>
            <button
              onClick={() => onOpenEvidence("HbA1c")}
              className="text-teal-700 font-bold hover:underline flex items-center"
            >
              <span>Verify EMR Source</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 3. Renal Function (Creatinine & eGFR) */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80 space-y-4 flex flex-col justify-between">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-indigo-600" />
              <div>
                <h3 className="font-bold text-slate-900 text-sm">Kidney Function Curves (Serum Creatinine & eGFR)</h3>
                <span className="text-[11px] text-indigo-600 font-semibold">Trend: Serum Creatinine drifting upward; eGFR declining.</span>
              </div>
            </div>
          </div>

          <div className="h-64 w-full pt-2">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={points}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                <XAxis dataKey="date" stroke="#64748b" fontSize={10} />
                <YAxis yAxisId="left" stroke="#6366f1" fontSize={10} domain={[0.5, 2.0]} />
                <YAxis yAxisId="right" orientation="right" stroke="#10b981" fontSize={10} domain={[50, 120]} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#0f172a', color: '#fff', borderRadius: '8px', fontSize: '12px' }}
                />
                <Legend wrapperStyle={{ fontSize: '11px' }} />
                <Line yAxisId="left" type="monotone" name="Creatinine (mg/dL)" dataKey="creatinine" stroke="#6366f1" strokeWidth={3} dot={{ r: 4 }} />
                <Line yAxisId="right" type="monotone" name="eGFR (mL/min)" dataKey="egfr" stroke="#10b981" strokeWidth={3} dot={{ r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs bg-slate-50 p-3 rounded-xl">
            <span className="text-slate-600 font-medium">Status: <strong className="text-indigo-900">Creatinine {points[points.length - 1]?.creatinine} mg/dL | eGFR {points[points.length - 1]?.egfr} mL/min</strong></span>
            <button
              onClick={() => onOpenEvidence("Serum Creatinine")}
              className="text-teal-700 font-bold hover:underline flex items-center"
            >
              <span>Verify EMR Source</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 4. Weight & Lipid Profile Trend */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80 space-y-4 flex flex-col justify-between">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center space-x-2">
              <Scale className="w-5 h-5 text-teal-600" />
              <div>
                <h3 className="font-bold text-slate-900 text-sm">Anthropometric Weight & LDL Cholesterol Trend</h3>
                <span className="text-[11px] text-teal-600 font-semibold">Trend: LDL cholesterol improving on statin therapy.</span>
              </div>
            </div>
          </div>

          <div className="h-64 w-full pt-2">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={points}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                <XAxis dataKey="date" stroke="#64748b" fontSize={10} />
                <YAxis yAxisId="left" stroke="#0d9488" fontSize={10} domain={[50, 100]} />
                <YAxis yAxisId="right" orientation="right" stroke="#8b5cf6" fontSize={10} domain={[80, 220]} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#0f172a', color: '#fff', borderRadius: '8px', fontSize: '12px' }}
                />
                <Legend wrapperStyle={{ fontSize: '11px' }} />
                <Line yAxisId="left" type="monotone" name="Weight (kg)" dataKey="weight" stroke="#0d9488" strokeWidth={3} dot={{ r: 4 }} />
                <Line yAxisId="right" type="monotone" name="LDL Cholesterol (mg/dL)" dataKey="ldl" stroke="#8b5cf6" strokeWidth={3} dot={{ r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs bg-slate-50 p-3 rounded-xl">
            <span className="text-slate-600 font-medium">Latest LDL: <strong className="text-purple-700">{points[points.length - 1]?.ldl} mg/dL</strong></span>
            <button
              onClick={() => onOpenEvidence("LDL Cholesterol")}
              className="text-teal-700 font-bold hover:underline flex items-center"
            >
              <span>Verify EMR Source</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

      {/* Comprehensive Tabular Comparison Table */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80 space-y-4">
        <h3 className="font-bold text-slate-900 text-base">Historical Biomarker Regression Table</h3>
        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full text-left text-xs font-mono">
            <thead className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
              <tr>
                <th className="py-3 px-4">Timepoint</th>
                <th className="py-3 px-4">Blood Pressure</th>
                <th className="py-3 px-4">HbA1c</th>
                <th className="py-3 px-4">Creatinine</th>
                <th className="py-3 px-4">eGFR</th>
                <th className="py-3 px-4">Weight</th>
                <th className="py-3 px-4">LDL</th>
                <th className="py-3 px-4 text-right">Verification</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-sans">
              {points.map((pt, idx) => (
                <tr key={idx} className="hover:bg-slate-50">
                  <td className="py-3 px-4 font-bold text-slate-900 font-mono">{pt.monthYear}</td>
                  <td className="py-3 px-4 font-bold text-slate-800">{pt.systolic}/{pt.diastolic} mmHg</td>
                  <td className="py-3 px-4 font-semibold text-amber-700">{pt.hba1c}%</td>
                  <td className="py-3 px-4 font-semibold text-indigo-700">{pt.creatinine} mg/dL</td>
                  <td className="py-3 px-4 font-semibold text-emerald-700">{pt.egfr} mL/min</td>
                  <td className="py-3 px-4 text-slate-700">{pt.weight} kg</td>
                  <td className="py-3 px-4 text-purple-700 font-semibold">{pt.ldl} mg/dL</td>
                  <td className="py-3 px-4 text-right">
                    <button
                      onClick={() => onOpenEvidence(`${pt.monthYear}`)}
                      className="text-teal-600 font-bold text-[11px] hover:underline"
                    >
                      View Report
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

