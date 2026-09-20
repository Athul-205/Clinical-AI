export type PatientStatus = 'Stable' | 'Follow-up Required' | 'High Priority' | 'Critical';

export interface LabValue {
  parameter: string;
  value: string;
  referenceRange: string;
  status: 'normal' | 'abnormal' | 'critical';
}

export interface MedicalReport {
  id: string;
  title: string;
  category: 'Laboratory' | 'Imaging' | 'Clinical Notes' | 'Prescription' | 'Discharge Summary' | 'Surgical';
  date: string;
  monthYear: string;
  doctorName: string;
  hospitalName: string;
  summary: string;
  findings: string[];
  labValues?: LabValue[];
  impression: string;
  pageCount: number;
  pdfContentText?: string;
  fileName?: string;
  fileUrl?: string;
  fileType?: string;
}

export interface TimelineEvent {
  id: string;
  monthYear: string;
  date: string;
  title: string;
  category: 'Diagnosis' | 'Lab Test' | 'Hospitalization' | 'Medication' | 'Imaging' | 'Surgery' | 'Consultation';
  description: string;
  reportId?: string;
  evidencePage?: number;
  evidenceSnippet: string;
}

export interface LabTrendDataPoint {
  date: string;
  monthYear: string;
  systolic?: number;
  diastolic?: number;
  hba1c?: number;
  creatinine?: number;
  egfr?: number;
  weight?: number;
  ldl?: number;
  hdl?: number;
  totalCholesterol?: number;
}

export interface DoctorNote {
  id: string;
  date: string;
  author?: string;
  doctorName?: string;
  diagnosis?: string;
  impression?: string;
  recommendations?: string;
  followUp?: string;
  observations?: string;
  content?: string;
  tags?: string[];
}

export interface ChronicCondition {
  name: string;
  diagnosedDate: string;
  status: 'Active' | 'Controlled' | 'Monitoring Required';
  reportId: string;
  evidencePage: number;
  evidenceSnippet: string;
}

export interface MedicationItem {
  name: string;
  dosage: string;
  frequency: string;
  startDate: string;
  status: 'Active' | 'Modified' | 'Discontinued';
  reportId: string;
  evidencePage: number;
  evidenceSnippet: string;
}

export interface AllergyItem {
  allergen: string;
  reaction: string;
  severity: 'Mild' | 'Moderate' | 'Severe';
  reportId: string;
  evidencePage: number;
  evidenceSnippet: string;
}

export interface SurgeryItem {
  procedure: string;
  date: string;
  hospital: string;
  surgeon: string;
  reportId: string;
  evidencePage: number;
  evidenceSnippet: string;
}

export interface HospitalizationItem {
  admissionDate: string;
  dischargeDate: string;
  hospital: string;
  reason: string;
  outcome: string;
  reportId: string;
  evidencePage: number;
  evidenceSnippet: string;
}

export interface AbnormalLabFinding {
  testName: string;
  value: string;
  trend: 'Improving' | 'Worsening' | 'Stable' | 'Critical';
  reportId: string;
  evidencePage: number;
  evidenceSnippet: string;
}

export interface VitalTrendSummary {
  parameter: string;
  statusText: string;
  status: 'improving' | 'worsening' | 'stable';
  reportId: string;
  evidencePage: number;
  evidenceSnippet: string;
}

export interface RiskFlag {
  category: string;
  description: string;
  level: 'High' | 'Moderate' | 'Low';
  reportId: string;
  evidencePage: number;
  evidenceSnippet: string;
}

export interface Patient {
  id: string;
  uid: string;
  name: string;
  age: number;
  gender: 'Male' | 'Female' | 'Other';
  status: PatientStatus;
  bloodGroup: string;
  height: string;
  weight: string;
  bmi: string;
  emergencyContact: {
    name: string;
    relationship: string;
    phone: string;
  };
  primaryHospital: string;
  primaryPhysician: string;
  overviewSummary: string;
  conditions: ChronicCondition[];
  medications: MedicationItem[];
  allergies: AllergyItem[];
  surgeries: SurgeryItem[];
  hospitalizations: HospitalizationItem[];
  abnormalLabs: AbnormalLabFinding[];
  vitalTrends: VitalTrendSummary[];
  riskFlags: RiskFlag[];
  recentEventsSummary: string;
  aiInsights: string;
  emergencySummary?: string;
  reports: MedicalReport[];
  timeline: TimelineEvent[];
  labTrendPoints: LabTrendDataPoint[];
  doctorNotes: DoctorNote[];
  phoneMasked?: string;
}

export interface AIAgentStatus {
  agentName: string;
  role: string;
  status: 'Active' | 'Idle' | 'Processing' | 'Verified';
  lastActivity: string;
  icon: string;
}

export interface QAMessage {
  id: string;
  sender: 'doctor' | 'ai' | 'user';
  text: string;
  timestamp: string;
  citations?: {
    reportTitle: string;
    quote: string;
    pageNumber: number;
  }[];
  evidence?: {
    reportId: string;
    reportTitle: string;
    page: number;
    snippet: string;
  }[];
}

export interface ReportComparisonResult {
  summary?: string;
  aiSynthesis?: string;
  reportATitle?: string;
  reportBTitle?: string;
  improvements?: string[];
  worsened?: string[];
  newFindings?: string[];
  differences?: {
    parameter: string;
    valueA: string;
    valueB: string;
    status: string;
    interpretation: string;
  }[];
  medicationChanges?: {
    previous: string[];
    current: string[];
  };
  labComparison?: {
    test: string;
    previous: string;
    current: string;
    change: 'Improved' | 'Worsened' | 'Stable' | 'Slightly Increased' | 'Slightly Reduced' | 'Increased' | 'Decreased';
  }[];
  timelineUpdate?: string;
  reportA?: MedicalReport;
  reportB?: MedicalReport;
}

