export interface Patient {
  id: number;
  name: string;
  classification: string;
  trackingCode: string;
}

export const MOCK_PATIENTS: Patient[] = [
  { id: 1, name: 'Patient 001', classification: 'Inpatient', trackingCode: 'TRK001' },
  { id: 2, name: 'Patient 002', classification: 'Outpatient', trackingCode: 'TRK002' },
  { id: 3, name: 'Patient 003', classification: 'Emergency', trackingCode: 'TRK003' },
  { id: 4, name: 'John Smith', classification: 'Inpatient', trackingCode: 'TRK004' },
  { id: 5, name: 'Jane Doe', classification: 'Outpatient', trackingCode: 'TRK005' },
  { id: 6, name: 'Michael Johnson', classification: 'ICU', trackingCode: 'TRK006' },
  { id: 7, name: 'Sarah Wilson', classification: 'Surgical', trackingCode: 'TRK007' }
];
