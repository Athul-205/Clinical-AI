import { Patient } from '../../types/hospital';

export const mohammedAli: Patient = {
  id: 'patient-3',
  uid: 'UID-1003',
  name: 'Mohammed Ali',
  age: 49,
  gender: 'Male',
  status: 'Critical',
  bloodGroup: 'AB+',
  height: '175 cm',
  weight: '89.0 kg',
  bmi: '29.1 (Overweight)',
  phoneMasked: '+91 98401 1****',
  emergencyContact: {
    name: 'Zahra Ali',
    relationship: 'Wife',
    phone: '+91 98401 1****'
  },
  primaryHospital: 'Metropolitan Heart Institute, Central District',
  primaryPhysician: 'Dr. Ashok Seth, MD, DM (Interventional Cardiology)',
  overviewSummary: '49-year-old male presenting with severe multi-vessel Coronary Artery Disease (status post-DES angioplasty to LAD in 2022), history of Ischemic Stroke (middle cerebral artery distribution in 2024), and persistent High LDL Cholesterol. Currently reporting recurrent exertional angina and mild telemetry ST depression requiring urgent interventional re-evaluation.',
  conditions: [
    {
      name: 'Coronary Artery Disease (Triple Vessel)',
      diagnosedDate: 'November 2022',
      status: 'Active',
      reportId: 'rep-moh-02',
      evidencePage: 1,
      evidenceSnippet: 'Coronary Angiography revealed 85% proximal LAD stenosis, 70% RCA lesion, and 60% LCx narrowing. PTCA with drug-eluting stent deployed to LAD.'
    },
    {
      name: 'Previous Ischemic Stroke (Left MCA territory)',
      diagnosedDate: 'April 2024',
      status: 'Monitoring Required',
      reportId: 'rep-moh-06',
      evidencePage: 1,
      evidenceSnippet: 'Brain MRI Diffusion Weighted Imaging confirmed acute ischemic infarct in left middle cerebral artery distribution causing transient right hemiparesis.'
    },
    {
      name: 'Familial Hypercholesterolemia',
      diagnosedDate: 'January 2020',
      status: 'Active',
      reportId: 'rep-moh-01',
      evidencePage: 1,
      evidenceSnippet: 'Severe refractory lipid profile with LDL reaching 210 mg/dL prior to intensive statin + ezetimibe therapy.'
    }
  ],
  medications: [
    {
      name: 'Aspirin + Clopidogrel (Dual Antiplatelet)',
      dosage: '75 mg / 75 mg',
      frequency: 'Once Daily after lunch',
      startDate: 'November 2022',
      status: 'Active',
      reportId: 'rep-moh-03',
      evidencePage: 1,
      evidenceSnippet: 'Rx Tab Dual Antiplatelet Aspirin 75mg + Clopidogrel 75mg OD to prevent coronary and cerebral stent thrombosis.'
    },
    {
      name: 'Rosuvastatin + Ezetimibe',
      dosage: '40 mg / 10 mg',
      frequency: 'Once Daily at Bedtime',
      startDate: 'April 2024',
      status: 'Active',
      reportId: 'rep-moh-07',
      evidencePage: 1,
      evidenceSnippet: 'High-intensity lipid lowering therapy with Rosuvastatin 40mg + Ezetimibe 10mg HS.'
    },
    {
      name: 'Metoprolol Succinate ER',
      dosage: '50 mg',
      frequency: 'Once Daily Morning',
      startDate: 'November 2022',
      status: 'Active',
      reportId: 'rep-moh-03',
      evidencePage: 1,
      evidenceSnippet: 'Beta-blockade for rate and anti-anginal control.'
    },
    {
      name: 'Glyceryl Trinitrate (Sublingual Spray)',
      dosage: '0.4 mg per spray',
      frequency: 'PRN (As needed for chest pain)',
      startDate: 'January 2026',
      status: 'Active',
      reportId: 'rep-moh-12',
      evidencePage: 1,
      evidenceSnippet: 'Prescribed sublingual GTN spray for acute breakthrough chest tightness.'
    }
  ],
  allergies: [
    {
      allergen: 'lodinated Radiographic Contrast Dye',
      reaction: 'Severe anaphylactoid reaction (hypotension & bronchospasm)',
      severity: 'Severe',
      reportId: 'rep-moh-02',
      evidencePage: 2,
      evidenceSnippet: 'CRITICAL ALERT: Patient experienced severe allergic collapse during diagnostic angiography requiring IV epinephrine steroid prophylaxis.'
    }
  ],
  surgeries: [
    {
      procedure: 'Percutaneous Transluminal Coronary Angioplasty (PTCA) + Drug Eluting Stent to LAD',
      date: 'November 18, 2022',
      hospital: 'Metropolitan Heart Institute',
      surgeon: 'Dr. Ashok Seth, MD',
      reportId: 'rep-moh-02',
      evidencePage: 1,
      evidenceSnippet: 'Successful deployment of Xience Alpine 3.5 x 28 mm drug-eluting stent across proximal LAD lesion.'
    }
  ],
  hospitalizations: [
    {
      admissionDate: 'April 04, 2024',
      dischargeDate: 'April 12, 2024',
      hospital: 'Metropolitan Heart Institute',
      reason: 'Acute Ischemic Stroke presenting with facial droop and right arm weakness',
      outcome: 'Successful acute thrombolytic protocol; neurological deficits recovered to near baseline.',
      reportId: 'rep-moh-06',
      evidencePage: 1,
      evidenceSnippet: 'Discharge Summary: Acute Left MCA infarct. Neurological recovery satisfactory under intensive neuro-vascular ICU monitoring.'
    }
  ],
  abnormalLabs: [
    {
      testName: 'LDL Cholesterol',
      value: '138 mg/dL (Reference: < 70 mg/dL for high-risk CAD)',
      trend: 'Worsening',
      reportId: 'rep-moh-11',
      evidencePage: 1,
      evidenceSnippet: 'LDL remains substantially elevated above target threshold for secondary coronary prevention despite rosuvastatin.'
    },
    {
      testName: 'High-Sensitivity Troponin-I (hs-cTnI)',
      value: '42 ng/L (Reference: < 14 ng/L)',
      trend: 'Critical',
      reportId: 'rep-moh-12',
      evidencePage: 1,
      evidenceSnippet: 'Borderline troponin leak noted during recent ER evaluation for exertional chest tightness.'
    }
  ],
  vitalTrends: [
    {
      parameter: 'Cardiac Biomarkers (Troponin)',
      statusText: 'Troponin-I elevated at 42 ng/L indicating mild myocardial strain or silent ischemia.',
      status: 'worsening',
      reportId: 'rep-moh-12',
      evidencePage: 1,
      evidenceSnippet: 'Elevated cardiac enzymes require urgent coronary reassessment.'
    },
    {
      parameter: 'Lipid Regulation (LDL)',
      statusText: 'LDL cholesterol remains sub-optimally controlled at 138 mg/dL.',
      status: 'worsening',
      reportId: 'rep-moh-11',
      evidencePage: 1,
      evidenceSnippet: 'Consider PCSK9 inhibitor escalation.'
    }
  ],
  riskFlags: [
    {
      category: 'Impending Acute Coronary Syndrome (ACS) Risk',
      description: 'Recurrent exertional angina combined with elevated hs-Troponin-I indicates high risk of secondary coronary occlusion.',
      level: 'High',
      reportId: 'rep-moh-12',
      evidencePage: 1,
      evidenceSnippet: 'Urgent cardiology admission and non-contrast nuclear stress test or pre-medicated angiogram advised.'
    },
    {
      category: 'Contrast Dye Allergy Alert',
      description: 'Must receive strict steroid + antihistamine pre-medication protocol prior to any angiographic procedure.',
      level: 'High',
      reportId: 'rep-moh-02',
      evidencePage: 2,
      evidenceSnippet: 'Mandatory pre-medication protocol registered.'
    }
  ],
  recentEventsSummary: 'January 2026 Emergency Room presentation with retrosternal chest pressure radiating to left jaw during brisk walking. ECG showed 1 mm horizontal ST depression in lateral leads V4-V6. Troponin borderline elevated at 42 ng/L.',
  aiInsights: 'Mohammed Ali is a highly critical cardiovascular patient demonstrating active ischemic signs. Given his triple-vessel background, previous LAD stent, and ischemic stroke history, his current angina and troponin leak signal potential restenosis or progression of native RCA/LCx disease. Urgent cardiology intervention is critical.',
  reports: [
    {
      id: 'rep-moh-12',
      title: 'Emergency Room Triage & Cardiac Note',
      category: 'Clinical Notes',
      date: '15 January 2026',
      monthYear: 'January 2026',
      doctorName: 'Dr. Pradeep Narayan, MD (Emergency Medicine)',
      hospitalName: 'Metropolitan Heart Institute',
      summary: 'ER evaluation for acute exertional chest pressure.',
      findings: [
        'Vitals: BP 152/94 mmHg, Heart Rate 88 bpm regular, SpO2 96% room air.',
        '12-lead ECG demonstrates 1 mm horizontal ST segment depression in leads V4, V5, V6.',
        'High-sensitivity Troponin-I returned at 42 ng/L (Elevated).',
        'Patient administered sublingual GTN spray with partial relief.'
      ],
      impression: 'Unstable Angina / Non-ST Elevation Myocardial Infarction (NSTEMI) rule-out.',
      pageCount: 2,
      labValues: [
        { parameter: 'hs-Troponin-I', value: '42 ng/L', referenceRange: '< 14 ng/L', status: 'critical' },
        { parameter: 'Systolic BP', value: '152 mmHg', referenceRange: '< 130 mmHg', status: 'abnormal' }
      ]
    },
    {
      id: 'rep-moh-11',
      title: 'Comprehensive Cardiac Lipid Panel',
      category: 'Laboratory',
      date: '04 January 2026',
      monthYear: 'January 2026',
      doctorName: 'Dr. S. K. Pathak, MD',
      hospitalName: 'Metropolitan Reference Lab',
      summary: 'Lipid profile showing persistent LDL elevation.',
      findings: [
        'Total Cholesterol: 218 mg/dL',
        'LDL Cholesterol: 138 mg/dL (Reference target < 70 mg/dL)',
        'HDL Cholesterol: 38 mg/dL',
        'Triglycerides: 210 mg/dL'
      ],
      impression: 'Sub-optimal secondary lipid reduction.',
      pageCount: 1,
      labValues: [
        { parameter: 'LDL Cholesterol', value: '138 mg/dL', referenceRange: '< 70 mg/dL', status: 'critical' },
        { parameter: 'Triglycerides', value: '210 mg/dL', referenceRange: '< 150 mg/dL', status: 'abnormal' }
      ]
    },
    {
      id: 'rep-moh-06',
      title: 'Inpatient Stroke Discharge Record',
      category: 'Discharge Summary',
      date: '12 April 2024',
      monthYear: 'April 2024',
      doctorName: 'Dr. J. D. Mukherji, MD, DM (Neurology)',
      hospitalName: 'Metropolitan General Hospital',
      summary: 'Management of acute ischemic infarct.',
      findings: [
        'Admitted with sudden onset right facial asymmetry and dysarthria.',
        'Brain MRI confirmed acute ischemic infarction in left MCA territory.',
        'Discharged on dual antiplatelet regimen and high-dose Rosuvastatin.'
      ],
      impression: 'Recovered acute ischemic stroke.',
      pageCount: 3
    },
    {
      id: 'rep-moh-02',
      title: 'Coronary Angiography & Stent Procedure Report',
      category: 'Surgical',
      date: '18 November 2022',
      monthYear: 'November 2022',
      doctorName: 'Dr. Ashok Seth, MD',
      hospitalName: 'Metropolitan Heart Institute',
      summary: 'Interventional cardiology PTCA to LAD.',
      findings: [
        'LAD: 85% proximal eccentric critical stenosis.',
        'RCA: 70% mid-vessel stenosis; LCx: 60% stenosis.',
        'Deployed 3.5 x 28 mm DES to proximal LAD with TIMI-3 flow restoration.',
        'Note: Severe allergic collapse occurred upon non-ionic contrast injection.'
      ],
      impression: 'Successful PTCA to LAD.',
      pageCount: 4
    }
  ],
  timeline: [
    {
      id: 'time-moh-01',
      monthYear: 'November 2022',
      date: '18 Nov 2022',
      title: 'Coronary Angioplasty & Stenting (LAD)',
      category: 'Surgery',
      description: 'Underwent emergency coronary stenting for severe 85% proximal LAD occlusion. Suffered severe contrast allergy during procedure.',
      reportId: 'rep-moh-02',
      evidencePage: 1,
      evidenceSnippet: 'PTCA with DES deployed to proximal LAD. Severe contrast anaphylactoid reaction.'
    },
    {
      id: 'time-moh-02',
      monthYear: 'April 2024',
      date: '04 Apr 2024',
      title: 'Ischemic Stroke Hospitalization',
      category: 'Hospitalization',
      description: 'Admitted with sudden right hemiparesis. Brain MRI confirmed left MCA acute ischemic stroke. Recovered with neurological rehabilitation.',
      reportId: 'rep-moh-06',
      evidencePage: 1,
      evidenceSnippet: 'Acute ischemic infarct in left middle cerebral artery distribution.'
    },
    {
      id: 'time-moh-03',
      monthYear: 'January 2026',
      date: '15 Jan 2026',
      title: 'ER Triage for Unstable Angina',
      category: 'Consultation',
      description: 'Presented to emergency room with retrosternal chest pressure radiating to jaw. ECG revealed lateral ST depression; Troponin elevated at 42 ng/L.',
      reportId: 'rep-moh-12',
      evidencePage: 1,
      evidenceSnippet: 'ECG ST depression V4-V6; High-sensitivity Troponin-I 42 ng/L.'
    }
  ],
  labTrendPoints: [
    { date: 'Nov 2022', monthYear: 'November 2022', systolic: 158, diastolic: 96, hba1c: 5.6, creatinine: 1.0, egfr: 85, weight: 88.0, ldl: 195 },
    { date: 'Apr 2024', monthYear: 'April 2024', systolic: 150, diastolic: 92, hba1c: 5.7, creatinine: 1.02, egfr: 84, weight: 89.0, ldl: 160 },
    { date: 'Jan 2025', monthYear: 'January 2025', systolic: 144, diastolic: 88, hba1c: 5.6, creatinine: 1.05, egfr: 82, weight: 88.5, ldl: 145 },
    { date: 'Jan 2026', monthYear: 'January 2026', systolic: 152, diastolic: 94, hba1c: 5.7, creatinine: 1.08, egfr: 80, weight: 89.0, ldl: 138 }
  ],
  doctorNotes: [
    {
      id: 'note-moh-1',
      date: '15 January 2026',
      author: 'Dr. Arjun (MD, FACP)',
      diagnosis: 'Acute Coronary Syndrome Rule-out in patient with triple vessel disease',
      impression: 'Patient is displaying high-risk angina with troponin leak. High suspicion for progression of RCA or LCx lesions.',
      recommendations: 'Admit to Coronary Care Unit immediately. Start IV heparin infusion. Schedule urgent cardiology consultation for steroid pre-medicated coronary angiography.',
      followUp: 'Continuous cardiac telemetry monitor.'
    }
  ]
};
