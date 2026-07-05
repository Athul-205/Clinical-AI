import { Patient } from '../../types/hospital';

export const anjaliMenon: Patient = {
  id: 'patient-6',
  uid: 'UID-1007',
  name: 'Anjali Menon',
  age: 64,
  gender: 'Female',
  status: 'High Priority',
  bloodGroup: 'A-',
  height: '156 cm',
  weight: '54.0 kg',
  bmi: '22.2 (Normal)',
  phoneMasked: '+91 98412 8****',
  emergencyContact: {
    name: 'Karthik Menon',
    relationship: 'Son',
    phone: '+91 98412 8****'
  },
  primaryHospital: 'Horizon General Hospital, East Avenue',
  primaryPhysician: 'Dr. S. Rajendran, MD, DM (Rheumatology)',
  overviewSummary: '64-year-old female presenting with erosive seropositive Rheumatoid Arthritis (RA), post-menopausal Osteoporosis (lumbar T-score -2.8), and stable Goitrous Thyroid Disorder. Currently on DMARD biological therapy exhibiting active morning joint stiffness and elevated inflammatory markers requiring disease modification review.',
  conditions: [
    {
      name: 'Seropositive Rheumatoid Arthritis',
      diagnosedDate: 'August 2018',
      status: 'Active',
      reportId: 'rep-anj-02',
      evidencePage: 1,
      evidenceSnippet: 'High-titer Rheumatoid Factor (RF 240 IU/mL) and Anti-CCP antibody positive (>300 U/mL). Bilateral MCP/PIP synovitis.'
    },
    {
      name: 'Post-Menopausal Osteoporosis',
      diagnosedDate: 'November 2021',
      status: 'Active',
      reportId: 'rep-anj-04',
      evidencePage: 1,
      evidenceSnippet: 'DEXA Bone Mineral Density scan reveals Lumbar spine T-score -2.8 and femoral neck T-score -2.4.'
    },
    {
      name: 'Subclinical Hypothyroidism',
      diagnosedDate: 'May 2020',
      status: 'Controlled',
      reportId: 'rep-anj-03',
      evidencePage: 1,
      evidenceSnippet: 'TSH 6.8 mIU/L on low-dose thyroxine maintenance.'
    }
  ],
  medications: [
    {
      name: 'Methotrexate (Weekly Oral DMARD)',
      dosage: '15 mg',
      frequency: 'Once Weekly (Sundays) + Folic Acid 5mg post 24h',
      startDate: 'August 2018',
      status: 'Active',
      reportId: 'rep-anj-02',
      evidencePage: 1,
      evidenceSnippet: 'Rx Tab Methotrexate 15mg weekly.'
    },
    {
      name: 'Hydroxychloroquine Sulfate',
      dosage: '200 mg',
      frequency: 'Twice Daily post meals',
      startDate: 'August 2018',
      status: 'Active',
      reportId: 'rep-anj-02',
      evidencePage: 1,
      evidenceSnippet: 'Rx Tab HCQ 200mg BID.'
    },
    {
      name: 'Alendronate + Calcium Vitamin D3',
      dosage: '70 mg weekly / 500 mg daily',
      frequency: 'Weekly bone therapy',
      startDate: 'November 2021',
      status: 'Active',
      reportId: 'rep-anj-04',
      evidencePage: 1,
      evidenceSnippet: 'Rx Tab Alendronate 70mg weekly.'
    }
  ],
  allergies: [
    {
      allergen: 'Codeine / Opioid Analgesics',
      reaction: 'Severe nausea, delirium and vomiting',
      severity: 'Moderate',
      reportId: 'rep-anj-05',
      evidencePage: 1,
      evidenceSnippet: 'Documented adverse neuro-vestibular reaction to Codeine derivatives.'
    }
  ],
  surgeries: [],
  hospitalizations: [],
  abnormalLabs: [
    {
      testName: 'Erythrocyte Sedimentation Rate (ESR)',
      value: '64 mm/hr (Reference: < 20 mm/hr)',
      trend: 'Worsening',
      reportId: 'rep-anj-09',
      evidencePage: 1,
      evidenceSnippet: 'ESR elevated indicating active synovial inflammation.'
    },
    {
      testName: 'C-Reactive Protein (CRP quantitative)',
      value: '28.4 mg/L (Reference: < 5 mg/L)',
      trend: 'Worsening',
      reportId: 'rep-anj-09',
      evidencePage: 1,
      evidenceSnippet: 'Acute phase reactant elevation.'
    }
  ],
  vitalTrends: [
    {
      parameter: 'Inflammatory Activity (ESR/CRP)',
      statusText: 'Inflammatory markers rising over past 4 months (CRP increased from 12 to 28.4 mg/L).',
      status: 'worsening',
      reportId: 'rep-anj-09',
      evidencePage: 1,
      evidenceSnippet: 'Suggests DMARD escape or acute flare.'
    }
  ],
  riskFlags: [
    {
      category: 'Fall & Fragility Fracture Risk',
      description: 'Co-existing severe lumbar osteoporosis (-2.8 T-score) and rheumatoid joint instability create high fracture risk.',
      level: 'High',
      reportId: 'rep-anj-04',
      evidencePage: 1,
      evidenceSnippet: 'Fall prevention precautions advised.'
    }
  ],
  recentEventsSummary: 'January 2026 Rheumatology evaluation noted worsening symmetric polyarthritis affecting bilateral wrists and MCP joints with morning stiffness lasting >90 minutes.',
  aiInsights: 'Anjali Menon is experiencing an active Rheumatoid Arthritis flare characterized by escalating acute phase reactants (CRP 28.4 mg/L, ESR 64 mm/hr). Given her osteoporosis background, short-course low-dose oral corticosteroids bridging to biological therapy evaluation is strongly indicated.',
  reports: [
    {
      id: 'rep-anj-09',
      title: 'Inflammatory Rheumatoid Panel Review',
      category: 'Laboratory',
      date: '12 January 2026',
      monthYear: 'January 2026',
      doctorName: 'Dr. S. Rajendran, MD',
      hospitalName: 'Horizon Specialty Labs',
      summary: 'Elevated acute phase markers.',
      findings: [
        'ESR: 64 mm/hr (Previous: 38 mm/hr)',
        'Quantitative CRP: 28.4 mg/L (Previous: 12.0 mg/L)',
        'Hemoglobin: 11.2 g/dL (Anemia of chronic disease)'
      ],
      impression: 'Active Rheumatoid Arthritis disease flare.',
      pageCount: 1,
      labValues: [
        { parameter: 'CRP', value: '28.4 mg/L', referenceRange: '< 5 mg/L', status: 'critical' },
        { parameter: 'ESR', value: '64 mm/hr', referenceRange: '< 20 mm/hr', status: 'critical' }
      ]
    }
  ],
  timeline: [
    {
      id: 'time-anj-01',
      monthYear: 'August 2018',
      date: '12 Aug 2018',
      title: 'Rheumatoid Arthritis Diagnosed',
      category: 'Diagnosis',
      description: 'Confirmed high-titer Anti-CCP and RF positivity. Commenced weekly Methotrexate.',
      reportId: 'rep-anj-02',
      evidencePage: 1,
      evidenceSnippet: 'Anti-CCP antibody >300 U/mL.'
    },
    {
      id: 'time-anj-02',
      monthYear: 'January 2026',
      date: '12 Jan 2026',
      title: 'Rheumatology Flare Assessment',
      category: 'Lab Test',
      description: 'ESR surged to 64 mm/hr and CRP to 28.4 mg/L accompanied by 90-minute morning stiffness.',
      reportId: 'rep-anj-09',
      evidencePage: 1,
      evidenceSnippet: 'Active Rheumatoid Arthritis disease flare.'
    }
  ],
  labTrendPoints: [
    { date: 'Aug 2018', monthYear: 'August 2018', systolic: 128, diastolic: 80, hba1c: 5.4, creatinine: 0.78, egfr: 90, weight: 55.0, ldl: 120 },
    { date: 'Jan 2026', monthYear: 'January 2026', systolic: 130, diastolic: 82, hba1c: 5.5, creatinine: 0.80, egfr: 88, weight: 54.0, ldl: 115 }
  ],
  doctorNotes: []
};
