import { Patient } from '../../types/hospital';

export const rahulSharma: Patient = {
  id: 'patient-4',
  uid: 'UID-1004',
  name: 'Rahul Sharma',
  age: 52,
  gender: 'Male',
  status: 'Follow-up Required',
  bloodGroup: 'A+',
  height: '170 cm',
  weight: '79.4 kg',
  bmi: '27.5 (Overweight)',
  phoneMasked: '+91 98110 4****',
  emergencyContact: {
    name: 'Neha Sharma',
    relationship: 'Wife',
    phone: '+91 98110 4****'
  },
  primaryHospital: 'Grandview Medical Center, West Wing',
  primaryPhysician: 'Dr. Randhir Sud, MD, DM (Gastroenterology)',
  overviewSummary: '52-year-old male presenting with non-alcoholic Fatty Liver Disease (NAFLD Grade 2), healing healing prepyloric Gastric Ulcer, Gastroesophageal Reflux Disease (GERD), and profound Vitamin D Deficiency. Liver transaminases are normalizing on lifestyle and hepatoprotective therapy.',
  conditions: [
    {
      name: 'Grade 2 Fatty Liver Disease (NAFLD)',
      diagnosedDate: 'March 2023',
      status: 'Active',
      reportId: 'rep-rah-02',
      evidencePage: 1,
      evidenceSnippet: 'Abdominal ultrasound shows diffusely increased hepatic echogenicity obscuring diaphragm vessels. Impression: Grade 2 Fatty Liver.'
    },
    {
      name: 'Prepyloric Gastric Ulcer & GERD',
      diagnosedDate: 'September 2024',
      status: 'Monitoring Required',
      reportId: 'rep-rah-05',
      evidencePage: 1,
      evidenceSnippet: 'Upper GI Endoscopy revealed a clean-based 8mm superficial prepyloric ulcer along with LA Grade B reflux esophagitis.'
    },
    {
      name: 'Severe Vitamin D Deficiency',
      diagnosedDate: 'March 2023',
      status: 'Controlled',
      reportId: 'rep-rah-01',
      evidencePage: 1,
      evidenceSnippet: 'Serum 25-OH Vitamin D level severely depleted at 11.4 ng/mL.'
    }
  ],
  medications: [
    {
      name: 'Esomeprazole + Domperidone SR',
      dosage: '40 mg / 30 mg',
      frequency: 'Once Daily 30 min before breakfast',
      startDate: 'September 2024',
      status: 'Active',
      reportId: 'rep-rah-06',
      evidencePage: 1,
      evidenceSnippet: 'Rx Cap Nexpro RD 40mg OD before breakfast for mucosal healing and reflux.'
    },
    {
      name: 'Ursodeoxycholic Acid (UDCA)',
      dosage: '300 mg',
      frequency: 'Twice Daily post meals',
      startDate: 'March 2023',
      status: 'Active',
      reportId: 'rep-rah-03',
      evidencePage: 1,
      evidenceSnippet: 'Rx Tab Udiliv 300 mg BID for hepatic enzyme stabilization.'
    },
    {
      name: 'Cholecalciferol (Vitamin D3 Sachet)',
      dosage: '60,000 IU',
      frequency: 'Once Weekly for 8 weeks',
      startDate: 'December 2025',
      status: 'Active',
      reportId: 'rep-rah-08',
      evidencePage: 1,
      evidenceSnippet: 'Prescribed oral Cholecalciferol granules 60K weekly.'
    }
  ],
  allergies: [
    {
      allergen: 'Erythromycin / Macrolide Antibiotics',
      reaction: 'Severe abdominal cramping and acute watery diarrhea',
      severity: 'Moderate',
      reportId: 'rep-rah-04',
      evidencePage: 1,
      evidenceSnippet: 'Patient reported acute GI intolerance following macrolide administration.'
    }
  ],
  surgeries: [],
  hospitalizations: [],
  abnormalLabs: [
    {
      testName: 'SGPT (ALT)',
      value: '58 U/L (Reference: < 40 U/L)',
      trend: 'Improving',
      reportId: 'rep-rah-09',
      evidencePage: 1,
      evidenceSnippet: 'SGPT declining steadily from peak 94 U/L down to 58 U/L.'
    },
    {
      testName: '25-OH Vitamin D',
      value: '22 ng/mL (Reference: 30 - 100 ng/mL)',
      trend: 'Improving',
      reportId: 'rep-rah-09',
      evidencePage: 1,
      evidenceSnippet: 'Vitamin D improving from baseline 11.4 ng/mL.'
    }
  ],
  vitalTrends: [
    {
      parameter: 'Hepatic Transaminases (ALT/AST)',
      statusText: 'Liver function improving with ALT dropping from 94 U/L (2023) to 58 U/L (Jan 2026).',
      status: 'improving',
      reportId: 'rep-rah-09',
      evidencePage: 1,
      evidenceSnippet: 'Reduction in hepatocyte inflammation noted.'
    }
  ],
  riskFlags: [
    {
      category: 'Ulcer Recurrence Risk',
      description: 'Strict avoidance of alcohol, spicy diet, and NSAID analgesics to prevent GI bleed.',
      level: 'Moderate',
      reportId: 'rep-rah-05',
      evidencePage: 1,
      evidenceSnippet: 'Dietary restriction mandated.'
    }
  ],
  recentEventsSummary: 'January 2026 Gastroenterology Follow-up reported complete resolution of epigastric pain and heartburn. Liver enzymes show continued downward trajectory.',
  aiInsights: 'Rahul Sharma is making positive progress in controlling his metabolic steatohepatitis and peptic ulcer disease. Continued PPI tapering and dietary optimization should achieve full remission.',
  reports: [
    {
      id: 'rep-rah-09',
      title: 'Liver Function & Metabolic Follow-up Panel',
      category: 'Laboratory',
      date: '05 January 2026',
      monthYear: 'January 2026',
      doctorName: 'Dr. Randhir Sud, MD',
      hospitalName: 'Grandview Diagnostic Center',
      summary: 'Improving hepatic enzyme profile.',
      findings: [
        'SGPT (ALT): 58 U/L (Previous 94 U/L)',
        'SGOT (AST): 44 U/L (Normal)',
        'Alkaline Phosphatase: 88 U/L',
        'Serum Bilirubin Total: 0.8 mg/dL'
      ],
      impression: 'Resolving non-alcoholic steatohepatitis.',
      pageCount: 1,
      labValues: [
        { parameter: 'SGPT (ALT)', value: '58 U/L', referenceRange: '< 40 U/L', status: 'abnormal' }
      ]
    },
    {
      id: 'rep-rah-05',
      title: 'Upper Gastrointestinal Endoscopy Report',
      category: 'Imaging',
      date: '14 September 2024',
      monthYear: 'September 2024',
      doctorName: 'Dr. Randhir Sud, MD',
      hospitalName: 'Grandview Endoscopy Suite',
      summary: 'Direct visualization of peptic ulcer and reflux esophagitis.',
      findings: [
        'Esophagus: LA Grade B mucosal breaks above Z-line.',
        'Stomach: 8mm superficial prepyloric ulcer with fibrin coating; no active bleeding.',
        'Rapid Urease Test (RUT) for H. pylori: Negative.'
      ],
      impression: 'NSAID/Stress-induced Gastric Ulcer and Reflux Esophagitis.',
      pageCount: 2
    }
  ],
  timeline: [
    {
      id: 'time-rah-01',
      monthYear: 'March 2023',
      date: '10 Mar 2023',
      title: 'Fatty Liver & Vitamin D Deficiency Diagnosed',
      category: 'Diagnosis',
      description: 'Routine screening detected Grade 2 hepatic steatosis on ultrasound and ALT elevation at 94 U/L.',
      reportId: 'rep-rah-02',
      evidencePage: 1,
      evidenceSnippet: 'Grade 2 Fatty Liver; SGPT 94 U/L.'
    },
    {
      id: 'time-rah-02',
      monthYear: 'September 2024',
      date: '14 Sep 2024',
      title: 'Endoscopy Confirmed Gastric Ulcer',
      category: 'Imaging',
      description: 'Upper GI endoscopy identified an 8mm prepyloric gastric ulcer and GERD esophagitis. Commenced Esomeprazole.',
      reportId: 'rep-rah-05',
      evidencePage: 1,
      evidenceSnippet: 'Clean-based 8mm prepyloric ulcer along with LA Grade B reflux esophagitis.'
    },
    {
      id: 'time-rah-03',
      monthYear: 'January 2026',
      date: '05 Jan 2026',
      title: 'Gastroenterology Follow-up Review',
      category: 'Consultation',
      description: 'Marked clinical improvement. Epigastric burning resolved; ALT reduced to 58 U/L.',
      reportId: 'rep-rah-09',
      evidencePage: 1,
      evidenceSnippet: 'SGPT declining steadily down to 58 U/L.'
    }
  ],
  labTrendPoints: [
    { date: 'Mar 2023', monthYear: 'March 2023', systolic: 126, diastolic: 82, hba1c: 5.4, creatinine: 0.90, egfr: 94, weight: 82.0, ldl: 140 },
    { date: 'Sep 2024', monthYear: 'September 2024', systolic: 124, diastolic: 80, hba1c: 5.4, creatinine: 0.88, egfr: 95, weight: 80.5, ldl: 130 },
    { date: 'Jan 2026', monthYear: 'January 2026', systolic: 122, diastolic: 80, hba1c: 5.3, creatinine: 0.89, egfr: 95, weight: 79.4, ldl: 122 }
  ],
  doctorNotes: [
    {
      id: 'note-rah-1',
      date: '05 January 2026',
      author: 'Dr. Arjun (MD, FACP)',
      diagnosis: 'Healing Gastric Ulcer & NAFLD Grade 2',
      impression: 'Liver enzymes improving satisfactorily. Epigastric pain subsided completely.',
      recommendations: 'Taper Esomeprazole to 20 mg OD for 4 weeks then stop. Continue UDCA 300mg BID.',
      followUp: 'Repeat liver function test in 6 months.'
    }
  ]
};

