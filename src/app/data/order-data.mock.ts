// Mock data for order components and order records
export interface OrderComponent {
  id: number;
  name: string;
  status: string;
  dueDate: string;
  expanded?: boolean;
  doseAmount?: number;
  date?: string;
  timeHour?: string;
  timeMin?: string;
  visitId?: string;
  pharmacyNotes?: string;
  qsVolume?: number;
  poNumber?: string;
  orderingPhysician?: string;
}

export interface OrderRecord {
  id: number;
  patientName: string;
  treatmentPlan: string;
  components: number;
  dueDate: string;
  status: string;
}

export const MOCK_ORDER_COMPONENTS: OrderComponent[] = [
  {
    id: 1,
    name: 'Lu-177 ITM UD',
    status: 'TBD',
    dueDate: 'TBD',
    expanded: false,
    doseAmount: 200,
    date: '',
    timeHour: '',
    timeMin: '',
    visitId: '',
    pharmacyNotes: '',
    qsVolume: 0,
    poNumber: '',
    orderingPhysician: 'John Doe'
  },
  {
    id: 2,
    name: 'Lu-177 ITM UD',
    status: 'Due in 30-34 days',
    dueDate: 'Due in 30-34 days',
    expanded: false
  },
  {
    id: 3,
    name: 'Lu-177 ITM UD',
    status: 'Due in 30-34 days',
    dueDate: 'Due in 30-34 days',
    expanded: false
  },
  {
    id: 4,
    name: 'Lu-177 ITM UD',
    status: 'Due in 30-34 days',
    dueDate: 'Due in 30-34 days',
    expanded: false
  }
];

export const MOCK_ORDER_RECORDS: OrderRecord[] = [
  {
    id: 1,
    patientName: 'Patient Name - Treatment Plan 001',
    treatmentPlan: 'Treatment Plan 001',
    components: 4,
    dueDate: '12/11/2024',
    status: 'Completed'
  },
  {
    id: 2,
    patientName: 'Patient Name - Treatment Plan 001',
    treatmentPlan: 'Treatment Plan 001',
    components: 4,
    dueDate: '01/17/2025',
    status: 'In Progress'
  },
  {
    id: 3,
    patientName: 'Patient Name - Treatment Plan 001',
    treatmentPlan: 'Treatment Plan 001',
    components: 5,
    dueDate: '01/22/2025',
    status: 'In Progress'
  },
  {
    id: 4,
    patientName: 'Patient Name - Treatment Plan 001',
    treatmentPlan: 'Treatment Plan 001',
    components: 3,
    dueDate: 'TBD',
    status: 'Not yet started'
  },
  {
    id: 5,
    patientName: 'Patient Name - Treatment Plan 001',
    treatmentPlan: 'Treatment Plan 001',
    components: 6,
    dueDate: 'TBD',
    status: 'Not yet started'
  }
];
