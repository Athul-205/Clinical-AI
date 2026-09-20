import { Patient } from '../types/hospital';
import { rajeshKumar } from './patients/rajeshKumar';
import { priyaNair } from './patients/priyaNair';
import { mohammedAli } from './patients/mohammedAli';
import { rahulSharma } from './patients/rahulSharma';
import { snehaJoseph } from './patients/snehaJoseph';
import { anjaliMenon } from './patients/anjaliMenon';

export const initialPatientDirectory: Patient[] = [
  rajeshKumar,
  priyaNair,
  mohammedAli,
  rahulSharma,
  snehaJoseph,
  anjaliMenon
];

// Unaccessed patients in the enterprise healthcare network available via Request Access OTP workflow
export const networkPatientsRegistry: Record<string, Patient> = {
  'UID-1005': {
    id: 'patient-net-1005',
    uid: 'UID-1005',
    name: 'Suresh Verma',
    age: 45,
    gender: 'Male',
    status: 'High Priority',
    bloodGroup: 'O+',
    height: '178 cm',
    weight: '82.0 kg',
    bmi: '25.9 (Overweight)',
    phoneMasked: '+91 98102 7****',
    emergencyContact: {
      name: 'Pooja Verma',
      relationship: 'Wife',
      phone: '+91 98102 7****'
    },
    primaryHospital: 'Parkview Hospital & Research Centre, Mumbai',
    primaryPhysician: 'Dr. Nitin Gokhale, MD (Cardiology)',
    overviewSummary: '45-year-old male recently transferred with Paroxysmal Atrial Fibrillation and moderate Hypertension. Requires anticoagulation review and Holter telemetry evaluation.',
    conditions: [
      {
        name: 'Paroxysmal Atrial Fibrillation',
        diagnosedDate: 'November 2025',
        status: 'Active',
        reportId: 'rep-sur-01',
        evidencePage: 1,
        evidenceSnippet: '24-hour Holter monitoring recorded 4 discrete runs of rapid atrial fibrillation lasting up to 18 minutes.'
      },
      {
        name: 'Essential Hypertension Stage 1',
        diagnosedDate: 'November 2025',
        status: 'Active',
        reportId: 'rep-sur-01',
        evidencePage: 1,
        evidenceSnippet: 'BP recorded at 148/92 mmHg.'
      }
    ],
    medications: [
      {
        name: 'Apixaban (Direct Oral Anticoagulant)',
        dosage: '5 mg',
        frequency: 'Twice Daily',
        startDate: 'November 2025',
        status: 'Active',
        reportId: 'rep-sur-02',
        evidencePage: 1,
        evidenceSnippet: 'Rx Tab Apixaban 5mg BID for stroke prophylaxis (CHA2DS2-VASc score = 1).'
      },
      {
        name: 'Bisoprolol Fumarate',
        dosage: '5 mg',
        frequency: 'Once Daily Morning',
        startDate: 'November 2025',
        status: 'Active',
        reportId: 'rep-sur-02',
        evidencePage: 1,
        evidenceSnippet: 'Rx Tab Bisoprolol 5mg OD for ventricular rate control.'
      }
    ],
    allergies: [],
    surgeries: [],
    hospitalizations: [],
    abnormalLabs: [
      {
        testName: 'NT-proBNP',
        value: '310 pg/mL (Reference: < 125 pg/mL)',
        trend: 'Worsening',
        reportId: 'rep-sur-03',
        evidencePage: 1,
        evidenceSnippet: 'Mild elevation indicating cardiac atrial wall stress.'
      }
    ],
    vitalTrends: [
      {
        parameter: 'Cardiac Rhythm',
        statusText: 'Intermittent AF paroxysms controlled under beta-blockade.',
        status: 'stable',
        reportId: 'rep-sur-01',
        evidencePage: 1,
        evidenceSnippet: 'Rate control achieved.'
      }
    ],
    riskFlags: [
      {
        category: 'Thromboembolic Stroke Risk',
        description: 'Requires strict adherence to twice-daily Apixaban.',
        level: 'Moderate',
        reportId: 'rep-sur-02',
        evidencePage: 1,
        evidenceSnippet: 'DOAC compliance vital.'
      }
    ],
    recentEventsSummary: 'January 2026 Cardiology referral request for electrophysiology ablation review.',
    aiInsights: 'Suresh Verma presents newly shared records via patient consent OTP. His paroxysmal AF is rate-controlled on Bisoprolol and protected by Apixaban.',
    reports: [
      {
        id: 'rep-sur-01',
        title: '24-Hour Holter ECG Monitoring Report',
        category: 'Imaging',
        date: '14 November 2025',
        monthYear: 'November 2025',
        doctorName: 'Dr. Nitin Gokhale, MD',
        hospitalName: 'Parkview Hospital Cardiac Suite',
        summary: 'Recorded paroxysmal atrial fibrillation.',
        findings: [
          'Average HR: 78 bpm. Maximum HR during AF episodes: 142 bpm.',
          '4 discrete runs of Atrial Fibrillation noted.'
        ],
        impression: 'Paroxysmal AF.',
        pageCount: 2
      }
    ],
    timeline: [
      {
        id: 'time-sur-01',
        monthYear: 'November 2025',
        date: '14 Nov 2025',
        title: 'Atrial Fibrillation Diagnosed on Holter',
        category: 'Diagnosis',
        description: 'Holter telemetry confirmed paroxysmal AF. Commenced Apixaban and Bisoprolol.',
        reportId: 'rep-sur-01',
        evidencePage: 1,
        evidenceSnippet: '4 discrete runs of rapid atrial fibrillation.'
      }
    ],
    labTrendPoints: [
      { date: 'Nov 2025', monthYear: 'November 2025', systolic: 148, diastolic: 92, hba1c: 5.4, creatinine: 0.92, egfr: 96, weight: 82.0, ldl: 118 }
    ],
    doctorNotes: []
  },
  'UID-1008': {
    id: 'patient-net-1008',
    uid: 'UID-1008',
    name: 'Deepa K',
    age: 38,
    gender: 'Female',
    status: 'Follow-up Required',
    bloodGroup: 'B+',
    height: '158 cm',
    weight: '62.0 kg',
    bmi: '24.8 (Normal)',
    phoneMasked: '+91 98455 1****',
    emergencyContact: {
      name: 'Anand K',
      relationship: 'Brother',
      phone: '+91 98455 1****'
    },
    primaryHospital: 'Crestview Medical Center, Metro Central',
    primaryPhysician: 'Dr. Vikram Shenoy, MS (Endocrine Surgery)',
    overviewSummary: '38-year-old female post-total thyroidectomy for benign multinodular goiter (Dec 2025). Transferred records for postoperative calcium and thyroxine titration.',
    conditions: [
      {
        name: 'Status Post-Total Thyroidectomy',
        diagnosedDate: 'December 2025',
        status: 'Controlled',
        reportId: 'rep-dee-01',
        evidencePage: 1,
        evidenceSnippet: 'Total thyroidectomy performed uneventfully. Histopathology benign nodular colloid hyperplasia.'
      },
      {
        name: 'Transient Postoperative Hypocalcemia',
        diagnosedDate: 'December 2025',
        status: 'Monitoring Required',
        reportId: 'rep-dee-02',
        evidencePage: 1,
        evidenceSnippet: 'Serum ionized calcium dipped to 7.8 mg/dL post-op requiring oral calcitriol and calcium carbonate.'
      }
    ],
    medications: [
      {
        name: 'Levothyroxine Sodium',
        dosage: '100 mcg',
        frequency: 'Once Daily early morning',
        startDate: 'December 2025',
        status: 'Active',
        reportId: 'rep-dee-01',
        evidencePage: 1,
        evidenceSnippet: 'Rx Thyronorm 100 mcg OD.'
      },
      {
        name: 'Calcitriol + Calcium Carbonate',
        dosage: '0.25 mcg / 500 mg',
        frequency: 'Twice Daily',
        startDate: 'December 2025',
        status: 'Active',
        reportId: 'rep-dee-02',
        evidencePage: 1,
        evidenceSnippet: 'Rx Tab Shelcal-CT BID.'
      }
    ],
    allergies: [],
    surgeries: [
      {
        procedure: 'Total Thyroidectomy',
        date: 'December 12, 2025',
        hospital: 'Crestview Medical Center',
        surgeon: 'Dr. Vikram Shenoy, MS',
        reportId: 'rep-dee-01',
        evidencePage: 1,
        evidenceSnippet: 'Complete excision of enlarged multinodular goiter preserving recurrent laryngeal nerves and parathyroid glands.'
      }
    ],
    hospitalizations: [],
    abnormalLabs: [],
    vitalTrends: [
      {
        parameter: 'Serum Calcium',
        statusText: 'Calcium normalized from 7.8 to 8.9 mg/dL on oral supplementation.',
        status: 'improving',
        reportId: 'rep-dee-02',
        evidencePage: 1,
        evidenceSnippet: 'Satisfactory parathyroid recovery.'
      }
    ],
    riskFlags: [],
    recentEventsSummary: 'January 2026 surgical follow-up shows clean healing cervical scar and normal vocal cord mobility.',
    aiInsights: 'Deepa K records obtained via verified consent OTP. Surgical recovery is complete; continue thyroxine monitoring.',
    reports: [
      {
        id: 'rep-dee-01',
        title: 'Operative & Histopathology Report - Total Thyroidectomy',
        category: 'Surgical',
        date: '12 December 2025',
        monthYear: 'December 2025',
        doctorName: 'Dr. Vikram Shenoy, MS',
        hospitalName: 'Crestview Medical Center',
        summary: 'Successful total thyroidectomy for multinodular goiter.',
        findings: ['Benign colloid goiter without malignancy.'],
        impression: 'Benign goiter post-op.',
        pageCount: 3
      }
    ],
    timeline: [
      {
        id: 'time-dee-01',
        monthYear: 'December 2025',
        date: '12 Dec 2025',
        title: 'Total Thyroidectomy Performed',
        category: 'Surgery',
        description: 'Underwent total thyroidectomy for multinodular goiter. Commenced lifelong 100 mcg Levothyroxine.',
        reportId: 'rep-dee-01',
        evidencePage: 1,
        evidenceSnippet: 'Total thyroidectomy performed uneventfully.'
      }
    ],
    labTrendPoints: [
      { date: 'Dec 2025', monthYear: 'December 2025', systolic: 118, diastolic: 76, hba1c: 5.1, creatinine: 0.70, egfr: 110, weight: 62.0, ldl: 96 }
    ],
    doctorNotes: []
  }
};

