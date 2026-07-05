import { Patient } from '../../types/hospital';

export const rajeshKumar: Patient = {
  id: 'patient-1',
  uid: 'UID-1001',
  name: 'Rajesh Kumar',
  age: 58,
  gender: 'Male',
  status: 'High Priority',
  bloodGroup: 'B+',
  height: '172 cm',
  weight: '84.5 kg',
  bmi: '28.6 (Overweight)',
  phoneMasked: '+91 98450 2****',
  emergencyContact: {
    name: 'Sunita Kumar',
    relationship: 'Wife',
    phone: '+91 98450 2****'
  },
  primaryHospital: 'Horizon Speciality Hospitals, Metro Central',
  primaryPhysician: 'Dr. V. N. Rangarajan, MD (Endocrinology)',
  overviewSummary: '58-year-old male presenting with a 4-year history of poorly controlled Type 2 Diabetes Mellitus, Essential Hypertension, and recently progressing Stage 2 Chronic Kidney Disease. Requires active renal surveillance and glycemic adjustment.',
  conditions: [
    {
      name: 'Type 2 Diabetes Mellitus',
      diagnosedDate: 'March 2022',
      status: 'Active',
      reportId: 'rep-raj-02',
      evidencePage: 1,
      evidenceSnippet: 'Fasting Plasma Glucose elevated at 186 mg/dL; HbA1c confirmed at 8.2%. Impression: Type 2 Diabetes Mellitus.'
    },
    {
      name: 'Essential Hypertension',
      diagnosedDate: 'January 2023',
      status: 'Active',
      reportId: 'rep-raj-05',
      evidencePage: 1,
      evidenceSnippet: 'Ambulatory blood pressure averaging 160/100 mmHg across 3 consecutive clinical readings. Initiated Telmisartan 40mg.'
    },
    {
      name: 'Stage 2 Chronic Kidney Disease',
      diagnosedDate: 'March 2024',
      status: 'Monitoring Required',
      reportId: 'rep-raj-08',
      evidencePage: 2,
      evidenceSnippet: 'Serum Creatinine elevated at 1.4 mg/dL with eGFR declining to 68 mL/min/1.73m². Persistent microalbuminuria noted.'
    },
    {
      name: 'Hyperlipidemia',
      diagnosedDate: 'November 2021',
      status: 'Controlled',
      reportId: 'rep-raj-01',
      evidencePage: 1,
      evidenceSnippet: 'Total Cholesterol 245 mg/dL, LDL 165 mg/dL. Initiated lifestyle modification and Atorvastatin 10mg.'
    }
  ],
  medications: [
    {
      name: 'Metformin Hydrochloride',
      dosage: '1000 mg',
      frequency: 'Twice Daily (Post-meal)',
      startDate: 'June 2024',
      status: 'Active',
      reportId: 'rep-raj-09',
      evidencePage: 1,
      evidenceSnippet: 'Up-titrated Metformin SR to 1000 mg BID due to persistent postprandial hyperglycemia.'
    },
    {
      name: 'Telmisartan',
      dosage: '40 mg',
      frequency: 'Once Daily (Morning)',
      startDate: 'January 2023',
      status: 'Active',
      reportId: 'rep-raj-05',
      evidencePage: 1,
      evidenceSnippet: 'Rx Telmisartan 40mg OD for systemic blood pressure management and nephroprotection.'
    },
    {
      name: 'Dapagliflozin (SGLT2i)',
      dosage: '10 mg',
      frequency: 'Once Daily',
      startDate: 'March 2024',
      status: 'Active',
      reportId: 'rep-raj-08',
      evidencePage: 2,
      evidenceSnippet: 'Added Dapagliflozin 10mg OD to provide dual cardiovascular and renal protection amidst eGFR decline.'
    },
    {
      name: 'Atorvastatin',
      dosage: '10 mg',
      frequency: 'Once Daily (Bedtime)',
      startDate: 'November 2021',
      status: 'Active',
      reportId: 'rep-raj-01',
      evidencePage: 1,
      evidenceSnippet: 'Rx Atorvastatin 10mg HS for lipid regulation.'
    }
  ],
  allergies: [
    {
      allergen: 'Penicillin / Amoxicillin',
      reaction: 'Maculopapular urticaria & mild periorbital edema',
      severity: 'Severe',
      reportId: 'rep-raj-07',
      evidencePage: 1,
      evidenceSnippet: 'Patient developed diffuse pruritic rash 2 hours post-oral amoxicillin administration during ER admission.'
    },
    {
      allergen: 'Sulfa Drugs (Sulfamethoxazole)',
      reaction: 'Severe skin rash and nausea',
      severity: 'Moderate',
      reportId: 'rep-raj-07',
      evidencePage: 2,
      evidenceSnippet: 'Documented historical adverse reaction to Trimethoprim-Sulfamethoxazole.'
    }
  ],
  surgeries: [
    {
      procedure: 'Laparoscopic Cholecystectomy (Gallbladder removal)',
      date: 'August 2018',
      hospital: 'Crestview Medical Center, Metro Central',
      surgeon: 'Dr. Anand Kumar, MS',
      reportId: 'rep-raj-11',
      evidencePage: 1,
      evidenceSnippet: 'Successful elective laparoscopic cholecystectomy for symptomatic cholelithiasis. Post-op recovery uneventful.'
    }
  ],
  hospitalizations: [
    {
      admissionDate: 'September 14, 2023',
      dischargeDate: 'September 18, 2023',
      hospital: 'Horizon Speciality Hospitals',
      reason: 'Hypertensive Urgency with acute dizziness and occipital headache (BP 188/112 mmHg)',
      outcome: 'Stabilized with IV antihypertensives; discharged on adjusted Telmisartan + Amlodipine.',
      reportId: 'rep-raj-07',
      evidencePage: 1,
      evidenceSnippet: 'Discharge Summary: Admitted with hypertensive crisis. Blood pressure brought down gradually to 138/86 mmHg prior to discharge.'
    }
  ],
  abnormalLabs: [
    {
      testName: 'Glycated Hemoglobin (HbA1c)',
      value: '8.1% (Reference: < 5.7%)',
      trend: 'Worsening',
      reportId: 'rep-raj-14',
      evidencePage: 1,
      evidenceSnippet: 'HbA1c increased from 7.4% to 8.1% over the past 8 months indicating sub-optimal glycemic control.'
    },
    {
      testName: 'Serum Creatinine',
      value: '1.42 mg/dL (Reference: 0.7 - 1.2 mg/dL)',
      trend: 'Worsening',
      reportId: 'rep-raj-14',
      evidencePage: 1,
      evidenceSnippet: 'Creatinine remains persistently elevated at 1.42 mg/dL compared to 1.1 mg/dL in early 2023.'
    },
    {
      testName: 'Estimated GFR (eGFR)',
      value: '66 mL/min/1.73m² (Reference: > 90)',
      trend: 'Worsening',
      reportId: 'rep-raj-14',
      evidencePage: 1,
      evidenceSnippet: 'Calculated eGFR shows Stage 2 CKD threshold.'
    },
    {
      testName: 'Urine Microalbumin / Creatinine Ratio',
      value: '145 mg/g (Reference: < 30 mg/g)',
      trend: 'Worsening',
      reportId: 'rep-raj-13',
      evidencePage: 1,
      evidenceSnippet: 'Moderate albuminuria confirmed on spot early-morning urine assay.'
    }
  ],
  vitalTrends: [
    {
      parameter: 'Blood Pressure',
      statusText: 'Blood pressure improving steadily from 160/100 mmHg (Jan 2023) to 135/85 mmHg (Jan 2026).',
      status: 'improving',
      reportId: 'rep-raj-15',
      evidencePage: 1,
      evidenceSnippet: 'Vitals recorded: BP 135/85 mmHg sitting right arm. Significant improvement noted on dual antihypertensive therapy.'
    },
    {
      parameter: 'Glycemic Control (HbA1c)',
      statusText: 'HbA1c worsening gradually from 6.8% (Aug 2022) to 8.1% (Jan 2026).',
      status: 'worsening',
      reportId: 'rep-raj-14',
      evidencePage: 1,
      evidenceSnippet: 'HbA1c upward shift indicates dietary fatigue or progressive beta-cell dysfunction.'
    },
    {
      parameter: 'Renal Function (eGFR)',
      statusText: 'Kidney function declining slightly from 82 mL/min (2022) to 66 mL/min (2026).',
      status: 'worsening',
      reportId: 'rep-raj-14',
      evidencePage: 1,
      evidenceSnippet: 'Longitudinal filtration rate trend corroborates chronic diabetic nephropathy progression.'
    },
    {
      parameter: 'Lipid Profile (LDL)',
      statusText: 'Cholesterol improving under continuous statin therapy (LDL reduced from 165 to 118 mg/dL).',
      status: 'improving',
      reportId: 'rep-raj-12',
      evidencePage: 1,
      evidenceSnippet: 'Lipid panel demonstrates satisfactory response to Atorvastatin 10mg.'
    }
  ],
  riskFlags: [
    {
      category: 'Cardiovascular Risk',
      description: 'Elevated 10-year ASCVD risk due to co-existing Diabetes, Hypertension, and CKD Stage 2.',
      level: 'High',
      reportId: 'rep-raj-15',
      evidencePage: 2,
      evidenceSnippet: 'Cardiology evaluation recommends strict BP control (<130/80) to mitigate coronary vascular stress.'
    },
    {
      category: 'Kidney Monitoring Required',
      description: 'Progressive albuminuria and eGFR reduction necessitate nephrology co-management.',
      level: 'High',
      reportId: 'rep-raj-14',
      evidencePage: 1,
      evidenceSnippet: 'Repeat serum creatinine and spot urine protein advised every 90 days.'
    }
  ],
  recentEventsSummary: 'January 2026 Routine Endocrinology Consultation confirmed adequate blood pressure control (135/85) but flagged rising HbA1c (8.1%) and serum creatinine (1.42 mg/dL). Physician recommended intensifying dietary adherence and scheduled a repeat nephrology panel.',
  aiInsights: 'Synthesis of 15 reports spanning 2021–2026 indicates that while Rajesh Kumar has achieved admirable hemodynamic stability for his hypertension via Telmisartan, his diabetic nephropathy is entering a critical window where glycemic escalation is driving renal decline. Dual action therapy with Dapagliflozin is providing nephroprotection, but dietary carbohydrate restriction and potential insulin sensitization review are warranted.',
  reports: [
    {
      id: 'rep-raj-15',
      title: 'Endocrinology Consultation & Follow-up Note',
      category: 'Clinical Notes',
      date: '14 January 2026',
      monthYear: 'January 2026',
      doctorName: 'Dr. V. N. Rangarajan, MD',
      hospitalName: 'Horizon Speciality Hospitals, Metro Central',
      summary: 'Comprehensive quarterly review of diabetes and hypertension. Vitals stable; glycemic control sub-optimal.',
      findings: [
        'Blood Pressure sitting: 135/85 mmHg (Heart Rate: 74 bpm regular)',
        'Patient reports mild evening lower limb fatigue; no peripheral pitting edema noted today.',
        'Review of home blood glucose log shows fasting sugars ranging 145-168 mg/dL.',
        'Plan: Continue Metformin 1000mg BID and Dapagliflozin 10mg OD. Re-evaluate dietary sodium and sugar intake.'
      ],
      impression: 'Type 2 Diabetes with secondary microalbuminuria; Hypertension well controlled.',
      pageCount: 2,
      labValues: [
        { parameter: 'Systolic BP', value: '135 mmHg', referenceRange: '< 130 mmHg', status: 'abnormal' },
        { parameter: 'Diastolic BP', value: '85 mmHg', referenceRange: '< 80 mmHg', status: 'abnormal' },
        { parameter: 'Weight', value: '84.5 kg', referenceRange: '70-75 kg target', status: 'abnormal' }
      ]
    },
    {
      id: 'rep-raj-14',
      title: 'Comprehensive Metabolic & Renal Panel',
      category: 'Laboratory',
      date: '10 January 2026',
      monthYear: 'January 2026',
      doctorName: 'Dr. S. K. Pathak, MD (Pathology)',
      hospitalName: 'Horizon Diagnostic Reference Lab',
      summary: 'Complete biochemical assay showing elevated HbA1c and persistent mild creatinine elevation.',
      findings: [
        'Glycated Hemoglobin (HbA1c): 8.1% (Previous: 7.4%)',
        'Fasting Blood Sugar: 162 mg/dL',
        'Serum Creatinine: 1.42 mg/dL (Reference: 0.7 - 1.2 mg/dL)',
        'Blood Urea Nitrogen (BUN): 28 mg/dL',
        'Estimated GFR (CKD-EPI): 66 mL/min/1.73m²'
      ],
      impression: 'Glycemic deterioration with stable Stage 2 CKD markers.',
      pageCount: 2,
      labValues: [
        { parameter: 'HbA1c', value: '8.1%', referenceRange: '4.5 - 5.6%', status: 'critical' },
        { parameter: 'Serum Creatinine', value: '1.42 mg/dL', referenceRange: '0.7 - 1.2 mg/dL', status: 'abnormal' },
        { parameter: 'Fasting Glucose', value: '162 mg/dL', referenceRange: '70 - 99 mg/dL', status: 'abnormal' },
        { parameter: 'eGFR', value: '66 mL/min/1.73m²', referenceRange: '> 90 mL/min', status: 'abnormal' }
      ]
    },
    {
      id: 'rep-raj-13',
      title: 'Spot Urine Microalbumin Assay',
      category: 'Laboratory',
      date: '15 November 2025',
      monthYear: 'November 2025',
      doctorName: 'Dr. S. K. Pathak, MD',
      hospitalName: 'Horizon Diagnostic Reference Lab',
      summary: 'Evaluation of protein excretion for nephropathy surveillance.',
      findings: [
        'Urine Albumin: 145 mg/L',
        'Urine Creatinine: 100 mg/dL',
        'Albumin/Creatinine Ratio (ACR): 145 mg/g (Reference < 30 mg/g)'
      ],
      impression: 'Moderately increased albuminuria (Microalbuminuria Stage A2).',
      pageCount: 1,
      labValues: [
        { parameter: 'Albumin/Creatinine Ratio', value: '145 mg/g', referenceRange: '< 30 mg/g', status: 'abnormal' }
      ]
    },
    {
      id: 'rep-raj-12',
      title: 'Complete Lipid Profile & Liver Function Test',
      category: 'Laboratory',
      date: '20 August 2025',
      monthYear: 'August 2025',
      doctorName: 'Dr. S. K. Pathak, MD',
      hospitalName: 'Horizon Diagnostic Reference Lab',
      summary: 'Lipid markers controlled under Atorvastatin; hepatic enzymes within normal limits.',
      findings: [
        'Total Cholesterol: 188 mg/dL',
        'Serum Triglycerides: 164 mg/dL',
        'LDL Cholesterol: 118 mg/dL',
        'HDL Cholesterol: 42 mg/dL',
        'SGPT (ALT): 34 U/L (Normal)'
      ],
      impression: 'Satisfactory lipid response.',
      pageCount: 1,
      labValues: [
        { parameter: 'LDL Cholesterol', value: '118 mg/dL', referenceRange: '< 100 mg/dL', status: 'abnormal' },
        { parameter: 'Triglycerides', value: '164 mg/dL', referenceRange: '< 150 mg/dL', status: 'abnormal' }
      ]
    },
    {
      id: 'rep-raj-10',
      title: 'Renal Doppler Ultrasound Imaging',
      category: 'Imaging',
      date: '12 May 2025',
      monthYear: 'May 2025',
      doctorName: 'Dr. Meera Nambiar, MD (Radiology)',
      hospitalName: 'Horizon Imaging Diagnostics',
      summary: 'Bilateral renal sonography to evaluate renal architecture.',
      findings: [
        'Right Kidney: 10.1 x 4.8 cm. Normal cortical thickness with mild increased cortical echogenicity.',
        'Left Kidney: 10.3 x 5.0 cm. Similar Grade 1 medical renal disease parenchymal changes.',
        'No hydronephrosis, calculi, or focal solid cystic masses noted.'
      ],
      impression: 'Bilateral Grade 1 Medical Renal Disease consistent with early diabetic glomerulopathy.',
      pageCount: 2
    },
    {
      id: 'rep-raj-09',
      title: 'Endocrinology Prescription & Care Plan',
      category: 'Prescription',
      date: '18 June 2024',
      monthYear: 'June 2024',
      doctorName: 'Dr. V. N. Rangarajan, MD',
      hospitalName: 'Horizon Speciality Hospitals',
      summary: 'Upward adjustment of Metformin dosage due to rising glycemic curve.',
      findings: [
        'Rx Tab Metformin SR 1000 mg 1-0-1 post meals',
        'Rx Tab Telmisartan 40 mg 1-0-0 morning before breakfast',
        'Rx Tab Dapagliflozin 10 mg 1-0-0 morning',
        'Rx Tab Atorvastatin 10 mg 0-0-1 bedtime'
      ],
      impression: 'Adjusted pharmacotherapy for dual metabolic control.',
      pageCount: 1
    },
    {
      id: 'rep-raj-08',
      title: 'Nephrology Consultation & Assessment',
      category: 'Clinical Notes',
      date: '10 March 2024',
      monthYear: 'March 2024',
      doctorName: 'Dr. Harish Madhavan, DM (Nephrology)',
      hospitalName: 'Horizon Speciality Hospitals',
      summary: 'Initial nephrology referral following discovery of eGFR drop to 68 mL/min.',
      findings: [
        'Serum Creatinine trended up from 1.1 to 1.38 mg/dL.',
        'Patient advised strict hydration monitoring and avoidance of NSAID pain medications.',
        'Initiated SGLT2 inhibitor Dapagliflozin 10mg to slow glomerular decline.'
      ],
      impression: 'Early Stage 2 CKD secondary to diabetic glomerulopathy.',
      pageCount: 2
    },
    {
      id: 'rep-raj-07',
      title: 'Inpatient Discharge Summary - Hypertensive Urgency',
      category: 'Discharge Summary',
      date: '18 September 2023',
      monthYear: 'September 2023',
      doctorName: 'Dr. Sanjay Kulkarni, MD (Internal Medicine)',
      hospitalName: 'Horizon Speciality Hospitals',
      summary: '4-day hospitalization for emergency management of acute blood pressure surge (188/112 mmHg).',
      findings: [
        'Admission Vitals: BP 188/112 mmHg, HR 92 bpm, severe headache.',
        'Managed with IV Labetalol followed by oral Telmisartan 40mg + Amlodipine 5mg.',
        'CRITICAL ALLERGY ALERT: Patient developed severe maculopapular rash to oral Amoxicillin during stay. Documented as severe drug allergy.'
      ],
      impression: 'Resolved Hypertensive Urgency. Discharged stable on oral regimen.',
      pageCount: 3
    },
    {
      id: 'rep-raj-06',
      title: '12-Lead Resting Electrocardiogram (ECG)',
      category: 'Imaging',
      date: '15 February 2023',
      monthYear: 'February 2023',
      doctorName: 'Dr. A. K. Banerjee, DM (Cardiology)',
      hospitalName: 'Horizon Heart Center',
      summary: 'Cardiac rhythm check post-hypertension diagnosis.',
      findings: [
        'Normal Sinus Rhythm at 72 bpm.',
        'Normal PR interval (160 ms) and QTc interval (410 ms).',
        'Borderline left ventricular high voltage signs consistent with early hypertensive adaptation; no acute ischemic ST-T changes.'
      ],
      impression: 'Sinus rhythm with borderline LVH voltage criteria.',
      pageCount: 1
    },
    {
      id: 'rep-raj-05',
      title: 'Hypertension Diagnostic Consultation',
      category: 'Clinical Notes',
      date: '18 January 2023',
      monthYear: 'January 2023',
      doctorName: 'Dr. V. N. Rangarajan, MD',
      hospitalName: 'Horizon Speciality Hospitals',
      summary: 'Ambulatory blood pressure evaluation confirming sustained hypertension.',
      findings: [
        'Clinic BP: 162/100 mmHg. Home monitoring average: 158/98 mmHg.',
        'Funduscopy reveals Grade 1 hypertensive retinopathy.',
        'Initiated oral Telmisartan 40 mg OD.'
      ],
      impression: 'Essential Hypertension Stage 2.',
      pageCount: 2
    },
    {
      id: 'rep-raj-04',
      title: 'Metabolic Follow-up Lab Panel',
      category: 'Laboratory',
      date: '14 August 2022',
      monthYear: 'August 2022',
      doctorName: 'Dr. S. K. Pathak, MD',
      hospitalName: 'Horizon Diagnostic Reference Lab',
      summary: '6-month diabetes follow-up showing encouraging response to initial Metformin.',
      findings: [
        'HbA1c: 6.8% (Improved from 8.2%)',
        'Fasting Blood Sugar: 124 mg/dL',
        'Serum Creatinine: 1.05 mg/dL (Normal)'
      ],
      impression: 'Well-controlled diabetes on initial low-dose Metformin.',
      pageCount: 1,
      labValues: [
        { parameter: 'HbA1c', value: '6.8%', referenceRange: '< 5.7%', status: 'abnormal' }
      ]
    },
    {
      id: 'rep-raj-03',
      title: 'Initial Diabetes Prescription',
      category: 'Prescription',
      date: '02 April 2022',
      monthYear: 'April 2022',
      doctorName: 'Dr. V. N. Rangarajan, MD',
      hospitalName: 'Horizon Speciality Hospitals',
      summary: 'First pharmacological regimen following diabetes diagnosis.',
      findings: [
        'Rx Tab Metformin 500 mg 1-0-1 after meals',
        'Dietary counseling: Diabetic glycemic load restriction.'
      ],
      impression: 'Initial anti-diabetic therapy.',
      pageCount: 1
    },
    {
      id: 'rep-raj-02',
      title: 'Outpatient Consultation - New Diabetes Diagnosis',
      category: 'Clinical Notes',
      date: '24 March 2022',
      monthYear: 'March 2022',
      doctorName: 'Dr. V. N. Rangarajan, MD',
      hospitalName: 'Horizon Speciality Hospitals',
      summary: 'Patient presented with polydipsia, polyuria, and unexplained fatigue over 3 months.',
      findings: [
        'Laboratory confirmatory assay shows HbA1c 8.2% and FBG 186 mg/dL.',
        'Diagnosis of Type 2 Diabetes Mellitus established.',
        'Educated patient on self-monitoring of blood glucose.'
      ],
      impression: 'Newly diagnosed Type 2 Diabetes Mellitus.',
      pageCount: 2
    },
    {
      id: 'rep-raj-01',
      title: 'Executive Annual Health Check-up Report',
      category: 'Laboratory',
      date: '12 November 2021',
      monthYear: 'November 2021',
      doctorName: 'Dr. Ramesh Rao, MD',
      hospitalName: 'Horizon Preventive Health Clinic',
      summary: 'Baseline health evaluation revealing dyslipidemia and pre-diabetic markers.',
      findings: [
        'Fasting Blood Sugar: 112 mg/dL (Impaired fasting glucose)',
        'Total Cholesterol: 245 mg/dL, LDL: 165 mg/dL',
        'Blood Pressure: 138/88 mmHg'
      ],
      impression: 'Hyperlipidemia and Pre-diabetes.',
      pageCount: 3,
      labValues: [
        { parameter: 'Total Cholesterol', value: '245 mg/dL', referenceRange: '< 200 mg/dL', status: 'abnormal' },
        { parameter: 'LDL Cholesterol', value: '165 mg/dL', referenceRange: '< 100 mg/dL', status: 'abnormal' }
      ]
    }
  ],
  timeline: [
    {
      id: 'time-raj-01',
      monthYear: 'November 2021',
      date: '12 Nov 2021',
      title: 'Annual Health Check-up',
      category: 'Lab Test',
      description: 'Routine preventive screening flagged elevated LDL cholesterol (165 mg/dL) and pre-diabetic fasting sugar (112 mg/dL). Initiated Atorvastatin 10mg.',
      reportId: 'rep-raj-01',
      evidencePage: 1,
      evidenceSnippet: 'Total Cholesterol 245 mg/dL, LDL 165 mg/dL. Impression: Hyperlipidemia.'
    },
    {
      id: 'time-raj-02',
      monthYear: 'March 2022',
      date: '24 Mar 2022',
      title: 'Type 2 Diabetes Diagnosed',
      category: 'Diagnosis',
      description: 'Presented with polyuria and fatigue. Confirmatory HbA1c at 8.2% established formal diagnosis of Type 2 Diabetes Mellitus.',
      reportId: 'rep-raj-02',
      evidencePage: 1,
      evidenceSnippet: 'HbA1c confirmed at 8.2%; FBG 186 mg/dL. Impression: Newly diagnosed Type 2 Diabetes Mellitus.'
    },
    {
      id: 'time-raj-03',
      monthYear: 'April 2022',
      date: '02 Apr 2022',
      title: 'Started Metformin',
      category: 'Medication',
      description: 'Initiated oral hypoglycemic therapy with Metformin 500 mg twice daily after meals.',
      reportId: 'rep-raj-03',
      evidencePage: 1,
      evidenceSnippet: 'Rx Tab Metformin 500 mg 1-0-1 post meals.'
    },
    {
      id: 'time-raj-04',
      monthYear: 'August 2022',
      date: '14 Aug 2022',
      title: 'Blood Sugar Improved',
      category: 'Lab Test',
      description: 'Follow-up lab panel showed marked glycemic improvement with HbA1c dropping from 8.2% to 6.8%.',
      reportId: 'rep-raj-04',
      evidencePage: 1,
      evidenceSnippet: 'HbA1c: 6.8% (Improved from 8.2%). Well-controlled on Metformin 500mg BID.'
    },
    {
      id: 'time-raj-05',
      monthYear: 'January 2023',
      date: '18 Jan 2023',
      title: 'Hypertension Diagnosed',
      category: 'Diagnosis',
      description: 'Ambulatory blood pressure monitoring recorded sustained elevation averaging 160/100 mmHg. Prescribed Telmisartan 40 mg OD.',
      reportId: 'rep-raj-05',
      evidencePage: 1,
      evidenceSnippet: 'Ambulatory blood pressure averaging 160/100 mmHg across 3 consecutive readings. Initiated Telmisartan 40mg.'
    },
    {
      id: 'time-raj-06',
      monthYear: 'February 2023',
      date: '15 Feb 2023',
      title: 'ECG Performed',
      category: 'Imaging',
      description: 'Resting 12-lead ECG confirmed normal sinus rhythm with borderline left ventricular high voltage criteria.',
      reportId: 'rep-raj-06',
      evidencePage: 1,
      evidenceSnippet: 'Normal Sinus Rhythm at 72 bpm. Borderline LVH voltage signs.'
    },
    {
      id: 'time-raj-07',
      monthYear: 'September 2023',
      date: '14 Sep 2023',
      title: 'Hospital Admission - Hypertensive Urgency',
      category: 'Hospitalization',
      description: 'Emergency admission for acute blood pressure surge (188/112 mmHg) with severe headache. Stabilized with IV Labetalol. Severe penicillin allergy discovered.',
      reportId: 'rep-raj-07',
      evidencePage: 1,
      evidenceSnippet: 'Admitted with hypertensive crisis BP 188/112 mmHg. Developed severe allergic urticaria to oral Amoxicillin.'
    },
    {
      id: 'time-raj-08',
      monthYear: 'March 2024',
      date: '10 Mar 2024',
      title: 'Kidney Function Declining',
      category: 'Consultation',
      description: 'Nephrology referral noted upward drift in Serum Creatinine to 1.38 mg/dL and eGFR drop to 68 mL/min. Added Dapagliflozin 10mg OD.',
      reportId: 'rep-raj-08',
      evidencePage: 2,
      evidenceSnippet: 'Serum Creatinine elevated at 1.4 mg/dL with eGFR declining to 68 mL/min. Added Dapagliflozin 10mg OD.'
    },
    {
      id: 'time-raj-09',
      monthYear: 'June 2024',
      date: '18 Jun 2024',
      title: 'Medication Updated',
      category: 'Medication',
      description: 'Endocrinology follow-up increased Metformin dose to 1000 mg BID due to creeping postprandial glucose curves.',
      reportId: 'rep-raj-09',
      evidencePage: 1,
      evidenceSnippet: 'Up-titrated Metformin SR to 1000 mg BID due to persistent postprandial hyperglycemia.'
    },
    {
      id: 'time-raj-10',
      monthYear: 'May 2025',
      date: '12 May 2025',
      title: 'Renal Doppler Scan Completed',
      category: 'Imaging',
      description: 'Ultrasound imaging revealed bilateral Grade 1 medical renal parenchymal changes consistent with early diabetic glomerulopathy.',
      reportId: 'rep-raj-10',
      evidencePage: 1,
      evidenceSnippet: 'Bilateral Grade 1 Medical Renal Disease parenchymal changes.'
    },
    {
      id: 'time-raj-11',
      monthYear: 'January 2026',
      date: '14 Jan 2026',
      title: 'Routine Follow-up & Lab Review',
      category: 'Consultation',
      description: 'Latest clinical evaluation confirms excellent BP control (135/85 mmHg) but flags rising HbA1c (8.1%) and creatinine (1.42 mg/dL). Scheduled dietary intervention.',
      reportId: 'rep-raj-15',
      evidencePage: 1,
      evidenceSnippet: 'BP sitting 135/85 mmHg. HbA1c increased to 8.1%; Creatinine 1.42 mg/dL.'
    }
  ],
  labTrendPoints: [
    { date: 'Nov 2021', monthYear: 'November 2021', systolic: 138, diastolic: 88, hba1c: 5.8, creatinine: 0.95, egfr: 92, weight: 81.0, ldl: 165 },
    { date: 'Mar 2022', monthYear: 'March 2022', systolic: 142, diastolic: 90, hba1c: 8.2, creatinine: 1.02, egfr: 88, weight: 82.5, ldl: 152 },
    { date: 'Aug 2022', monthYear: 'August 2022', systolic: 140, diastolic: 88, hba1c: 6.8, creatinine: 1.05, egfr: 85, weight: 81.8, ldl: 140 },
    { date: 'Jan 2023', monthYear: 'January 2023', systolic: 160, diastolic: 100, hba1c: 7.1, creatinine: 1.10, egfr: 82, weight: 83.2, ldl: 135 },
    { date: 'Sep 2023', monthYear: 'September 2023', systolic: 155, diastolic: 96, hba1c: 7.4, creatinine: 1.25, egfr: 75, weight: 84.0, ldl: 130 },
    { date: 'Mar 2024', monthYear: 'March 2024', systolic: 144, diastolic: 90, hba1c: 7.6, creatinine: 1.38, egfr: 68, weight: 83.8, ldl: 125 },
    { date: 'Aug 2025', monthYear: 'August 2025', systolic: 138, diastolic: 86, hba1c: 7.9, creatinine: 1.40, egfr: 67, weight: 84.2, ldl: 118 },
    { date: 'Jan 2026', monthYear: 'January 2026', systolic: 135, diastolic: 85, hba1c: 8.1, creatinine: 1.42, egfr: 66, weight: 84.5, ldl: 118 }
  ],
  doctorNotes: [
    {
      id: 'note-1',
      date: '14 January 2026',
      author: 'Dr. Arjun (MD, FACP)',
      diagnosis: 'Type 2 Diabetes Mellitus with Stage 2 CKD & Hypertension',
      impression: "Patient's blood pressure has improved compared to the previous visit (135/85 vs 144/90). However, HbA1c upward shift to 8.1% indicates dietary fatigue.",
      recommendations: 'Continue current medication regimen including Dapagliflozin 10mg. Advise strict low-salt and low-glycemic diet.',
      followUp: 'Schedule repeat renal function test and HbA1c after three months.'
    }
  ]
};
