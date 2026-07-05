import { Patient } from '../../types/hospital';

export const priyaNair: Patient = {
  id: 'patient-2',
  uid: 'UID-1002',
  name: 'Priya Nair',
  age: 43,
  gender: 'Female',
  status: 'Stable',
  bloodGroup: 'O+',
  height: '160 cm',
  weight: '58.2 kg',
  bmi: '22.7 (Normal)',
  phoneMasked: '+91 98841 5****',
  emergencyContact: {
    name: 'Suresh Nair',
    relationship: 'Husband',
    phone: '+91 98841 5****'
  },
  primaryHospital: 'Valleyview Institute of Medical Sciences, North Bay',
  primaryPhysician: 'Dr. Lekha Menon, MD (Pulmonology & Internal Medicine)',
  overviewSummary: '43-year-old female presenting with well-controlled Bronchial Asthma, Hashimoto Hypothyroidism, and recovering Iron Deficiency Anemia secondary to chronic menorrhagia. Currently stable on inhaler prophylaxis and thyroxine replacement.',
  conditions: [
    {
      name: 'Bronchial Asthma (Moderate Persistent)',
      diagnosedDate: 'May 2019',
      status: 'Controlled',
      reportId: 'rep-pri-02',
      evidencePage: 1,
      evidenceSnippet: 'Spirometry shows reversible airflow obstruction with 18% improvement post-bronchodilator. Impression: Moderate Bronchial Asthma.'
    },
    {
      name: 'Primary Hypothyroidism',
      diagnosedDate: 'October 2021',
      status: 'Controlled',
      reportId: 'rep-pri-04',
      evidencePage: 1,
      evidenceSnippet: 'TSH elevated at 9.4 mIU/L with Anti-TPO antibodies positive (340 IU/mL). Initiated Levothyroxine 75 mcg.'
    },
    {
      name: 'Iron Deficiency Anemia',
      diagnosedDate: 'August 2024',
      status: 'Monitoring Required',
      reportId: 'rep-pri-07',
      evidencePage: 1,
      evidenceSnippet: 'Hemoglobin reduced at 9.2 g/dL with microcytic hypochromic red cell indices and serum ferritin 8 ng/mL.'
    },
    {
      name: 'Vitamin B12 Deficiency',
      diagnosedDate: 'August 2024',
      status: 'Controlled',
      reportId: 'rep-pri-07',
      evidencePage: 2,
      evidenceSnippet: 'Serum Vitamin B12 assay low at 162 pg/mL.'
    }
  ],
  medications: [
    {
      name: 'Budesonide + Formoterol Inhaler',
      dosage: '200/6 mcg',
      frequency: '2 Puffs Twice Daily',
      startDate: 'May 2019',
      status: 'Active',
      reportId: 'rep-pri-02',
      evidencePage: 1,
      evidenceSnippet: 'Rx DPI Budesonide/Formoterol 200/6 mcg BID for asthma maintenance.'
    },
    {
      name: 'Levothyroxine Sodium',
      dosage: '75 mcg',
      frequency: 'Once Daily (Empty stomach)',
      startDate: 'October 2021',
      status: 'Active',
      reportId: 'rep-pri-04',
      evidencePage: 1,
      evidenceSnippet: 'Rx Tab Thyronorm 75 mcg early morning.'
    },
    {
      name: 'Ferrous Ascorbate + Folic Acid',
      dosage: '100 mg elemental iron',
      frequency: 'Once Daily post lunch',
      startDate: 'August 2024',
      status: 'Active',
      reportId: 'rep-pri-08',
      evidencePage: 1,
      evidenceSnippet: 'Rx Tab Orofer XT 1 OD for oral iron replenishment.'
    },
    {
      name: 'Methylcobalamin (B12)',
      dosage: '1500 mcg',
      frequency: 'Once Daily',
      startDate: 'August 2024',
      status: 'Active',
      reportId: 'rep-pri-08',
      evidencePage: 1,
      evidenceSnippet: 'Rx Tab Mecobalamin 1500 mcg daily.'
    }
  ],
  allergies: [
    {
      allergen: 'Aspirin / NSAIDs (Ibuprofen)',
      reaction: 'Acute bronchospasm and wheezing (Aspirin-Exacerbated Respiratory Disease)',
      severity: 'Severe',
      reportId: 'rep-pri-03',
      evidencePage: 1,
      evidenceSnippet: 'Patient triggered severe asthmatic wheeze following oral Ibuprofen ingestion. Strictly avoid all NSAIDs.'
    },
    {
      allergen: 'Dust Mites & Pollen',
      reaction: 'Allergic rhinitis & nasal congestion',
      severity: 'Moderate',
      reportId: 'rep-pri-01',
      evidencePage: 1,
      evidenceSnippet: 'Skin prick allergy panel positive for house dust mite.'
    }
  ],
  surgeries: [],
  hospitalizations: [
    {
      admissionDate: 'July 10, 2022',
      dischargeDate: 'July 12, 2022',
      hospital: 'Valleyview Institute of Medical Sciences',
      reason: 'Acute Asthma Exacerbation secondary to viral upper respiratory infection',
      outcome: 'Recovered promptly with nebulized salbutamol and oral corticosteroid taper.',
      reportId: 'rep-pri-05',
      evidencePage: 1,
      evidenceSnippet: 'Discharge note: Admitted with wheeze and dyspnea. SpO2 improved from 91% to 98% on room air prior to discharge.'
    }
  ],
  abnormalLabs: [
    {
      testName: 'Hemoglobin (Hb)',
      value: '11.8 g/dL (Reference: 12.0 - 15.5 g/dL)',
      trend: 'Improving',
      reportId: 'rep-pri-11',
      evidencePage: 1,
      evidenceSnippet: 'Hemoglobin steadily recovering from baseline 9.2 g/dL following 5 months of oral iron therapy.'
    },
    {
      testName: 'Serum Ferritin',
      value: '34 ng/mL (Reference: 15 - 150 ng/mL)',
      trend: 'Improving',
      reportId: 'rep-pri-11',
      evidencePage: 1,
      evidenceSnippet: 'Ferritin reserves restored into acceptable clinical window.'
    }
  ],
  vitalTrends: [
    {
      parameter: 'Thyroid Function (TSH)',
      statusText: 'TSH stable and well-regulated at 2.1 mIU/L on 75 mcg Levothyroxine.',
      status: 'stable',
      reportId: 'rep-pri-10',
      evidencePage: 1,
      evidenceSnippet: 'Euthyroid state confirmed.'
    },
    {
      parameter: 'Hematological Reserve (Hb)',
      statusText: 'Hemoglobin improving consistently from 9.2 g/dL (Aug 2024) to 11.8 g/dL (Jan 2026).',
      status: 'improving',
      reportId: 'rep-pri-11',
      evidencePage: 1,
      evidenceSnippet: 'Bone marrow erythropoiesis responding robustly to oral iron supplementation.'
    }
  ],
  riskFlags: [
    {
      category: 'NSAID Avoidance Alert',
      description: 'Documented Aspirin-Exacerbated Respiratory Disease (AERD). Prescribe only Acetaminophen for analgesia.',
      level: 'High',
      reportId: 'rep-pri-03',
      evidencePage: 1,
      evidenceSnippet: 'Strict alert placed against prescription of non-selective cyclooxygenase inhibitors.'
    }
  ],
  recentEventsSummary: 'January 2026 Pulmonology Review confirmed zero daytime asthma symptoms and normal peak expiratory flow rates (PEFR 410 L/min). Hemoglobin improved to 11.8 g/dL.',
  aiInsights: 'Priya Nair demonstrates excellent therapeutic compliance across both her respiratory and endocrinological maintenance plans. Her anemia is approaching full resolution, and thyroid markers indicate optimal dosage calibration.',
  reports: [
    {
      id: 'rep-pri-11',
      title: 'Complete Blood Count & Iron Panel Follow-up',
      category: 'Laboratory',
      date: '08 January 2026',
      monthYear: 'January 2026',
      doctorName: 'Dr. Lekha Menon, MD',
      hospitalName: 'Valleyview Diagnostic Labs',
      summary: 'Marked recovery of hematological indices.',
      findings: [
        'Hemoglobin: 11.8 g/dL (Previous: 10.4 g/dL)',
        'Red Blood Cell count: 4.3 million/mcL',
        'Serum Ferritin: 34 ng/mL',
        'Vitamin B12: 480 pg/mL (Normal)'
      ],
      impression: 'Resolving microcytic anemia.',
      pageCount: 1,
      labValues: [
        { parameter: 'Hemoglobin', value: '11.8 g/dL', referenceRange: '12.0 - 15.5 g/dL', status: 'abnormal' },
        { parameter: 'Serum Ferritin', value: '34 ng/mL', referenceRange: '15 - 150 ng/mL', status: 'normal' }
      ]
    },
    {
      id: 'rep-pri-10',
      title: 'Thyroid Profile Review',
      category: 'Laboratory',
      date: '12 October 2025',
      monthYear: 'October 2025',
      doctorName: 'Dr. Lekha Menon, MD',
      hospitalName: 'Valleyview Diagnostic Labs',
      summary: 'Annual thyroid monitoring confirming euthyroid balance.',
      findings: [
        'Total T3: 1.2 ng/mL',
        'Free T4: 1.3 ng/dL',
        'Thyroid Stimulating Hormone (TSH): 2.1 mIU/L (Normal)'
      ],
      impression: 'Euthyroid on 75 mcg Levothyroxine.',
      pageCount: 1
    },
    {
      id: 'rep-pri-08',
      title: 'Hematology Consultation & Anemia Protocol',
      category: 'Prescription',
      date: '15 August 2024',
      monthYear: 'August 2024',
      doctorName: 'Dr. Lekha Menon, MD',
      hospitalName: 'Valleyview Institute of Medical Sciences',
      summary: 'Initiated oral iron and B12 repletion.',
      findings: [
        'Rx Tab Orofer XT 1-0-0 post lunch',
        'Rx Tab Mecobalamin 1500 mcg 1-0-0'
      ],
      impression: 'Treatment for nutritional anemia.',
      pageCount: 1
    },
    {
      id: 'rep-pri-07',
      title: 'Diagnostic Anemia Panel',
      category: 'Laboratory',
      date: '10 August 2024',
      monthYear: 'August 2024',
      doctorName: 'Dr. Lekha Menon, MD',
      hospitalName: 'Valleyview Diagnostic Labs',
      summary: 'Investigation of fatigue and pallor.',
      findings: [
        'Hemoglobin: 9.2 g/dL',
        'Serum Ferritin: 8 ng/mL',
        'Vitamin B12: 162 pg/mL'
      ],
      impression: 'Combined iron deficiency and mild B12 depletion.',
      pageCount: 2,
      labValues: [
        { parameter: 'Hemoglobin', value: '9.2 g/dL', referenceRange: '12.0 - 15.5 g/dL', status: 'critical' }
      ]
    }
  ],
  timeline: [
    {
      id: 'time-pri-01',
      monthYear: 'May 2019',
      date: '15 May 2019',
      title: 'Asthma Diagnosed',
      category: 'Diagnosis',
      description: 'Spirometry confirmed moderate reversible airflow restriction. Prescribed Budesonide/Formoterol inhaler.',
      reportId: 'rep-pri-02',
      evidencePage: 1,
      evidenceSnippet: 'Reversible airflow obstruction with 18% improvement post-bronchodilator.'
    },
    {
      id: 'time-pri-02',
      monthYear: 'October 2021',
      date: '20 Oct 2021',
      title: 'Hypothyroidism Diagnosed',
      category: 'Diagnosis',
      description: 'Elevated TSH (9.4 mIU/L) with positive Anti-TPO antibodies. Initiated Levothyroxine 75 mcg.',
      reportId: 'rep-pri-04',
      evidencePage: 1,
      evidenceSnippet: 'TSH elevated at 9.4 mIU/L with Anti-TPO antibodies positive.'
    },
    {
      id: 'time-pri-03',
      monthYear: 'August 2024',
      date: '10 Aug 2024',
      title: 'Anemia & B12 Deficiency Identified',
      category: 'Lab Test',
      description: 'Evaluation for chronic fatigue revealed Hemoglobin 9.2 g/dL and Ferritin 8 ng/mL. Commenced oral iron therapy.',
      reportId: 'rep-pri-07',
      evidencePage: 1,
      evidenceSnippet: 'Hemoglobin reduced at 9.2 g/dL; serum ferritin 8 ng/mL.'
    },
    {
      id: 'time-pri-04',
      monthYear: 'January 2026',
      date: '08 Jan 2026',
      title: 'Routine Health Review',
      category: 'Consultation',
      description: 'Hemoglobin recovered to 11.8 g/dL; TSH stable at 2.1 mIU/L. Asthma well controlled.',
      reportId: 'rep-pri-11',
      evidencePage: 1,
      evidenceSnippet: 'Hemoglobin steadily recovering from baseline 9.2 g/dL.'
    }
  ],
  labTrendPoints: [
    { date: 'Aug 2024', monthYear: 'August 2024', systolic: 118, diastolic: 76, hba1c: 5.2, creatinine: 0.72, egfr: 105, weight: 58.0, ldl: 98 },
    { date: 'Jan 2025', monthYear: 'January 2025', systolic: 120, diastolic: 78, hba1c: 5.3, creatinine: 0.74, egfr: 104, weight: 58.1, ldl: 96 },
    { date: 'Oct 2025', monthYear: 'October 2025', systolic: 118, diastolic: 75, hba1c: 5.2, creatinine: 0.71, egfr: 106, weight: 58.2, ldl: 95 },
    { date: 'Jan 2026', monthYear: 'January 2026', systolic: 120, diastolic: 76, hba1c: 5.2, creatinine: 0.73, egfr: 105, weight: 58.2, ldl: 94 }
  ],
  doctorNotes: [
    {
      id: 'note-pri-1',
      date: '08 January 2026',
      author: 'Dr. Arjun (MD, FACP)',
      diagnosis: 'Bronchial Asthma & Hypothyroidism in remission',
      impression: 'Patient exhibits excellent clinical stability. Anemia resolves steadily.',
      recommendations: 'Continue current inhaler and thyroxine replacement. Complete remaining 60 days of iron supplementation.',
      followUp: 'Annual review next January.'
    }
  ]
};
