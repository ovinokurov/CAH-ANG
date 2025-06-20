export interface Physician {
  id: number;
  name: string;
  specialty?: string;
}

export const MOCK_PHYSICIANS: Physician[] = [
  { id: 1, name: 'Dr. Sarah Smith', specialty: 'Oncology' },
  { id: 2, name: 'Dr. Michael Johnson', specialty: 'Radiology' },
  { id: 3, name: 'Dr. Emily Davis', specialty: 'Nuclear Medicine' },
  { id: 4, name: 'Dr. Robert Wilson', specialty: 'Internal Medicine' },
  { id: 5, name: 'Dr. Lisa Anderson', specialty: 'Hematology' },
  { id: 6, name: 'Dr. James Brown', specialty: 'Cardiology' },
  { id: 7, name: 'Dr. Maria Garcia', specialty: 'Endocrinology' },
  { id: 8, name: 'Dr. David Miller', specialty: 'Gastroenterology' },
  { id: 9, name: 'Dr. Jennifer Lee', specialty: 'Nephrology' },
  { id: 10, name: 'Dr. Christopher Taylor', specialty: 'Pulmonology' }
];
