// Shared interfaces for the application
export interface Task {
  id: number;
  type: string;
  description: string;
  priority: 'low' | 'medium' | 'high';
}

export interface Notification {
  id: number;
  message: string;
  type: 'alert' | 'info' | 'warning';
  timestamp: Date;
}

export interface Patient {
  id: number;
  name: string;
  email?: string;
  phone?: string;
}

export interface Physician {
  id: number;
  name: string;
  specialty?: string;
  email?: string;
}

export interface Procedure {
  id: number;
  name: string;
  description?: string;
}

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
