import React, { useState, useRef } from 'react';
import { X, Upload, FileText, CheckCircle2, Sparkles, Image as ImageIcon, Loader2, Trash2 } from 'lucide-react';
import { MedicalReport, Patient } from '../../types/hospital';

interface UploadReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  patient: Patient;
  onReportProcessed: (newReport: MedicalReport, updatedSummarySnippet: string) => void;
}

export const UploadReportModal: React.FC<UploadReportModalProps> = ({
  isOpen,
  onClose,
  patient,
  onReportProcessed
}) => {
  const [presetTitle, setPresetTitle] = useState('Comprehensive Follow-up Metabolic & Vitals Panel');
  const [presetCategory, setPresetCategory] = useState<'Laboratory' | 'Imaging' | 'Clinical Notes' | 'Prescription'>('Laboratory');
  const [presetDate, setPresetDate] = useState('14 February 2026');
  
  // Real file state
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [filePreviewUrl, setFilePreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [step, setStep] = useState<'select' | 'processing' | 'done'>('select');
  const [progressMsg, setProgressMsg] = useState('🤖 Document Agent initializing OCR & computer vision analysis...');
  const [completedSteps, setCompletedSteps] = useState<string[]>([]);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setUploadedFile(file);

      // Auto format title from filename
      const cleanName = file.name.replace(/\.[^/.]+$/, "").replace(/[-_]/g, ' ');
      setPresetTitle(cleanName || 'Uploaded Medical Document');

      // Detect category if possible
      if (file.type.startsWith('image/') || file.name.toLowerCase().includes('mri') || file.name.toLowerCase().includes('xray') || file.name.toLowerCase().includes('scan')) {
        setPresetCategory('Imaging');
      } else if (file.name.toLowerCase().includes('lab') || file.name.toLowerCase().includes('blood') || file.name.toLowerCase().includes('panel')) {
        setPresetCategory('Laboratory');
      }

      // Generate object URL for preview if image
      if (file.type.startsWith('image/')) {
        const url = URL.createObjectURL(file);
        setFilePreviewUrl(url);
      } else {
        setFilePreviewUrl(null);
      }
    }
  };

  const handleRemoveFile = () => {
    setUploadedFile(null);
    if (filePreviewUrl) {
      URL.revokeObjectURL(filePreviewUrl);
      setFilePreviewUrl(null);
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const simulateProcessing = () => {
    setStep('processing');
    setCompletedSteps([]);

    const fileDesc = uploadedFile 
      ? `Analyzing original ${uploadedFile.type.startsWith('image/') ? 'medical scan/image' : 'PDF document'} (${uploadedFile.name})...`
      : 'Document Agent reading layout and OCR diagnostic arrays...';

    const steps = [
      fileDesc,
      'Computer Vision & OCR extracting structured clinical biomarkers...',
      'Clinical Summary Agent verifying abnormal vital indicators...',
      'Timeline Agent synchronizing chronological record...',
      'Report Verification Agent attaching verbatim page evidence & metadata...'
    ];

    let current = 0;
    const interval = setInterval(() => {
      if (current < steps.length) {
        setProgressMsg(steps[current]);
        if (current > 0) {
          setCompletedSteps((prev) => [...prev, steps[current - 1]]);
        }
        current++;
      } else {
        clearInterval(interval);
        setCompletedSteps(steps);
        setStep('done');
      }
    }, 700);
  };

  const handleFinish = () => {
    const newReportId = `rep-${patient.name.slice(0, 3).toLowerCase()}-${Date.now().toString().slice(-4)}`;
    
    // Store uploaded image data URL or object URL
    const newReport: MedicalReport = {
      id: newReportId,
      title: presetTitle,
      category: presetCategory,
      date: presetDate,
      monthYear: 'February 2026',
      doctorName: 'Dr. Arjun, MD (Attending Clinical AI Director)',
      hospitalName: patient.primaryHospital,
      summary: uploadedFile 
        ? `Automated multi-agent extraction from original document upload (${uploadedFile.name}). Verified high clinical concordance across vitals and biomarkers.`
        : `Automated multi-agent extraction of newly uploaded ${presetTitle}. Vitals demonstrate stable therapeutic maintenance with continuous surveillance.`,
      findings: uploadedFile && presetCategory === 'Imaging' ? [
        `High-resolution scan upload (${uploadedFile.name}) successfully analyzed via CV pipeline.`,
        'No acute structural abnormalities or hemorrhagic effusions detected.',
        'Vasculature and parenchymal architecture remain within expected physiological baseline.',
        'Verbatim evidence linked to uploaded scan file.'
      ] : [
        'Blood Pressure recorded at 132/82 mmHg sitting right arm.',
        'Glycemic assay indicates stabilized glucose excursion under current dual regimen.',
        'Renal function indices show steady filtration capacity.',
        'No acute cardiopulmonary distress noted.'
      ],
      impression: `Processed ${presetCategory} indicating satisfactory clinical response.`,
      pageCount: uploadedFile && uploadedFile.type === 'application/pdf' ? 3 : 1,
      fileName: uploadedFile ? uploadedFile.name : undefined,
      fileType: uploadedFile ? uploadedFile.type : undefined,
      fileUrl: filePreviewUrl || undefined,
      labValues: presetCategory === 'Laboratory' ? [
        { parameter: 'Systolic Blood Pressure', value: '132 mmHg', referenceRange: '< 130 mmHg', status: 'normal' },
        { parameter: 'Fasting Blood Sugar', value: '134 mg/dL', referenceRange: '70 - 99 mg/dL', status: 'abnormal' }
      ] : undefined
    };

    onReportProcessed(
      newReport, 
      uploadedFile 
        ? `Original upload (${uploadedFile.name}) verified and indexed into longitudinal EMR.`
        : `February 2026 EMR upload confirmed stable blood pressure (132/82 mmHg).`
    );
    handleRemoveFile();
    setStep('select');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-fadeIn font-sans">
      <div className="bg-white rounded-2xl max-w-xl w-full shadow-2xl border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="bg-[#0f172a] px-6 py-4 text-white flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <Upload className="w-5 h-5 text-blue-400" />
            <h3 className="font-bold text-base">Upload Original Report or Scan</h3>
          </div>
          <button onClick={onClose} className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 cursor-pointer">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {step === 'select' && (
            <div className="space-y-5">
              {/* Hidden File Input */}
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept="image/*,.pdf,.dicom,.png,.jpg,.jpeg,.webp"
                className="hidden"
              />

              {/* Upload Drop Zone / Selected File Box */}
              {!uploadedFile ? (
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="p-6 border-2 border-dashed border-blue-400/60 bg-blue-50/40 rounded-2xl text-center space-y-3 cursor-pointer hover:bg-blue-50/80 hover:border-blue-500 transition-all group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mx-auto shadow-sm group-hover:scale-110 transition-transform">
                    <Upload className="w-7 h-7" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">Click to Upload Original Image or PDF</p>
                    <p className="text-xs text-slate-500 mt-1">
                      Supports Original Images (PNG, JPEG, DICOM Scans) and multi-page PDF EMR Reports
                    </p>
                    <span className="inline-block mt-3 px-3 py-1 bg-white border border-blue-200 text-blue-700 text-xs font-bold rounded-lg shadow-2xs">
                      Browse Files
                    </span>
                  </div>
                </div>
              ) : (
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      {uploadedFile.type.startsWith('image/') ? (
                        <div className="w-12 h-12 rounded-xl overflow-hidden bg-slate-200 border border-slate-300 shrink-0">
                          {filePreviewUrl ? (
                            <img src={filePreviewUrl} alt="Upload preview" className="w-full h-full object-cover" />
                          ) : (
                            <ImageIcon className="w-6 h-6 text-slate-500 m-3" />
                          )}
                        </div>
                      ) : (
                        <div className="w-12 h-12 rounded-xl bg-red-100 text-red-600 flex items-center justify-center shrink-0 font-bold">
                          <FileText className="w-6 h-6" />
                        </div>
                      )}
                      <div className="min-w-0">
                        <p className="text-xs font-bold text-slate-900 truncate max-w-[240px] sm:max-w-[300px]">
                          {uploadedFile.name}
                        </p>
                        <p className="text-[11px] text-slate-500 font-mono mt-0.5">
                          {(uploadedFile.size / (1024 * 1024)).toFixed(2)} MB • {uploadedFile.type || 'Document'}
                        </p>
                        <span className="inline-block mt-1 px-2 py-0.5 bg-emerald-100 text-emerald-800 font-bold text-[10px] rounded">
                          Ready for AI Ingestion
                        </span>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={handleRemoveFile}
                      className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-colors cursor-pointer"
                      title="Remove file"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  {filePreviewUrl && (
                    <div className="rounded-xl overflow-hidden border border-slate-200 max-h-48 bg-slate-900 flex justify-center">
                      <img src={filePreviewUrl} alt="Preview" className="max-h-48 object-contain" />
                    </div>
                  )}
                </div>
              )}

              {/* Title Input */}
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">
                  Report Title / Document Description
                </label>
                <input
                  type="text"
                  value={presetTitle}
                  onChange={(e) => setPresetTitle(e.target.value)}
                  placeholder="e.g., February 2026 Chest X-Ray or Comprehensive Metabolic Panel"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs font-semibold text-slate-800 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">Category</label>
                  <select
                    value={presetCategory}
                    onChange={(e: any) => setPresetCategory(e.target.value)}
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs font-medium focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  >
                    <option value="Laboratory">Laboratory</option>
                    <option value="Imaging">Imaging (Scan / X-Ray)</option>
                    <option value="Clinical Notes">Clinical Notes</option>
                    <option value="Prescription">Prescription</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">Document Date</label>
                  <input
                    type="text"
                    value={presetDate}
                    onChange={(e) => setPresetDate(e.target.value)}
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs font-mono font-bold focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex justify-end space-x-3 pt-3 border-t border-slate-200">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2.5 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-xl cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={simulateProcessing}
                  className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center space-x-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>{uploadedFile ? 'Ingest Uploaded File' : 'Upload & Run Multi-Agent AI'}</span>
                </button>
              </div>
            </div>
          )}

          {step === 'processing' && (
            <div className="py-6 space-y-6">
              <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-xl border border-blue-200">
                <Loader2 className="w-6 h-6 text-blue-600 animate-spin shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-900 text-xs">Multi-Agent Ingestion Pipeline Live</h4>
                  <p className="text-xs text-blue-800 mt-0.5 font-mono">{progressMsg}</p>
                </div>
              </div>

              <div className="space-y-2.5 max-h-52 overflow-y-auto pr-1">
                {completedSteps.map((s, idx) => (
                  <div key={idx} className="flex items-center space-x-2.5 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-200 animate-fadeIn">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="font-medium truncate">{s}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {step === 'done' && (
            <div className="py-6 text-center space-y-4 animate-fadeIn">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">Document Successfully Processed!</h4>
              <p className="text-xs text-slate-600 max-w-sm mx-auto">
                <span className="font-bold">{presetTitle}</span> has been OCR indexed and analyzed. The Clinical Summary, Timeline, and Trend Analysis tabs have been automatically updated.
              </p>
              <button
                onClick={handleFinish}
                className="px-6 py-2.5 bg-[#0f172a] hover:bg-slate-800 text-white font-bold text-xs rounded-xl shadow-md transition-all cursor-pointer"
              >
                Return to Patient Workspace
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
