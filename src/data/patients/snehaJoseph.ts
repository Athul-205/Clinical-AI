import { Patient } from '../../types/hospital';

export const snehaJoseph: Patient = {
  id: 'patient-5',
  uid: 'UID-1006',
  name: 'Sneha Joseph',
  age: 31,
  gender: 'Female',
  status: 'Stable',
  bloodGroup: 'B-',
  height: '164 cm',
  weight: '66.8 kg',
  bmi: '24.8 (Normal)',
  phoneMasked: '+91 94471 5****',
  emergencyContact: {
    name: 'Thomas Joseph',
    relationship: 'Father',
    phone: '+91 94471 6****'
  },
  primaryHospital: 'St. Catherine Medical College, South Campus',
  primaryPhysician: 'Dr. Anita Thomas, MD (Gynecology & Endocrinology)',
  overviewSummary: '31-year-old female presenting with Polycystic Ovary Syndrome (PCOS), episodic Migraine without aura, mild generalized Anxiety disorder, and Vitamin D insufficiency. Hormonal cycles well-regulated on oral contraceptives and metformin sensitization.',
  conditions: [
    {
      name: 'Polycystic Ovary Syndrome (PCOS)',
      diagnosedDate: 'July 2021',
      status: 'Controlled',
      reportId: 'rep-sne-02',
      evidencePage: 1,
      evidenceSnippet: 'Pelvic sonography demonstrates bilateral enlarged ovaries with >12 sub-centimeter peripheral follicles (string of pearls sign).'
    },
    {
      name: 'Episodic Migraine without Aura',
      diagnosedDate: 'January 2022',
      status: 'Controlled',
      reportId: 'rep-sne-04',
      evidencePage: 1,
      evidenceSnippet: 'Neurology consult notes recurrent unilateral pulsating cephalalgia exacerbated by bright lights and stress.'
    },
    {
      name: 'Vitamin D Insufficiency',
      diagnosedDate: 'May 2024',
      status: 'Controlled',
      reportId: 'rep-sne-06',
      evidencePage: 1,
      evidenceSnippet: 'Serum 25-OH Vitamin D low at 18.2 ng/mL.'
    }
  ],
  medications: [
    {
      name: 'Myo-Inositol + D-Chiro Inositol + Metformin',
      dosage: '1100 mg / 500 mg',
      frequency: 'Twice Daily post meals',
      startDate: 'July 2021',
      status: 'Active',
      reportId: 'rep-sne-03',
      evidencePage: 1,
      evidenceSnippet: 'Rx Tab Normoz DS BID for insulin sensitization and ovarian follicular support.'
    },
    {
      name: 'Propranolol SR (Migraine Prophylaxis)',
      dosage: '40 mg',
      frequency: 'Once Daily Bedtime',
      startDate: 'January 2022',
      status: 'Active',
      reportId: 'rep-sne-04',
      evidencePage: 1,
      evidenceSnippet: 'Rx Cap Propranolol SR 40mg HS for vascular migraine prophylaxis.'
    },
    {
      name: 'Rizatriptan (Acute Abortive)',
      dosage: '10 mg',
      frequency: 'PRN at onset of migraine',
      startDate: 'January 2022',
      status: 'Active',
      reportId: 'rep-sne-04',
      evidencePage: 1,
      evidenceSnippet: 'Rx Tab Rizatriptan 10mg PRN.'
    }
  ],
  allergies: [],
  surgeries: [],
  hospitalizations: [],
  abnormalLabs: [
    {
      testName: 'Serum LH / FSH Ratio',
      value: '2.1 (Reference: ~1.0)',
      trend: 'Improving',
      reportId: 'rep-sne-08',
      evidencePage: 1,
      evidenceSnippet: 'LH/FSH ratio improved from baseline 3.4 down to 2.1.'
    }
  ],
  vitalTrends: [
    {
      parameter: 'Migraine Frequency',
      statusText: 'Migraine attacks reduced from 5 episodes/month to <1 episode/month on Propranolol prophylaxis.',
      status: 'improving',
      reportId: 'rep-sne-08',
      evidencePage: 1,
      evidenceSnippet: 'Substantial prophylactic response.'
    }
  ],
  riskFlags: [],
  recentEventsSummary: 'January 2026 Gynecological Follow-up confirmed regular 29-day menstrual cycles and significant reduction in acne and hirsutism scores.',
  aiInsights: 'Sneha Joseph shows stable metabolic and hormonal parameters. Continued lifestyle intervention and insulin sensitization remain the cornerstone of her PCOS management.',
  reports: [
    {
      id: 'rep-sne-08',
      title: 'Hormonal Assay & Gynecology Follow-up',
      category: 'Laboratory',
      date: '10 January 2026',
      monthYear: 'January 2026',
      doctorName: 'Dr. Anita Thomas, MD',
      hospitalName: 'St. Catherine Reference Lab',
      summary: 'Improving hormonal profile under inositol/metformin therapy.',
      findings: [
        'Serum Luteinizing Hormone (LH): 9.2 mIU/mL',
        'Follicle Stimulating Hormone (FSH): 4.4 mIU/mL',
        'Fasting Insulin: 11.2 uIU/mL (Normal)'
      ],
      impression: 'Controlled PCOS.',
      pageCount: 1
    }
  ],
  timeline: [
    {
      id: 'time-sne-01',
      monthYear: 'July 2021',
      date: '18 Jul 2021',
      title: 'PCOS Diagnosed',
      category: 'Diagnosis',
      description: 'Pelvic ultrasound confirmed bilateral polycystic ovarian morphology with elevated LH/FSH ratio.',
      reportId: 'rep-sne-02',
      evidencePage: 1,
      evidenceSnippet: 'Bilateral enlarged ovaries with >12 sub-centimeter peripheral follicles.'
    },
    {
      id: 'time-sne-02',
      monthYear: 'January 2026',
      date: '10 Jan 2026',
      title: 'Routine Gynecology Follow-up',
      category: 'Consultation',
      description: 'Regular menstrual rhythm established; migraine frequency minimal under propranolol prophylaxis.',
      reportId: 'rep-sne-08',
      evidencePage: 1,
      evidenceSnippet: 'Substantial reduction in hirsutism and migraine attacks.'
    }
  ],
  labTrendPoints: [
    { date: 'Jul 2021', monthYear: 'July 2021', systolic: 116, diastolic: 74, hba1c: 5.4, creatinine: 0.68, egfr: 115, weight: 69.5, ldl: 110 },
    { date: 'Jan 2026', monthYear: 'January 2026', systolic: 114, diastolic: 72, hba1c: 5.2, creatinine: 0.68, egfr: 115, weight: 66.8, ldl: 98 }
  ],
  doctorNotes: []
};

