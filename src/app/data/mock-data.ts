export interface Task {
  id: number;
  type: string;
  description: string;
  priority: 'low' | 'medium' | 'high';
  assignedTo?: string;
  dueDate?: Date;
  status: 'pending' | 'in-progress' | 'completed';
}

export interface Notification {
  id: number;
  message: string;
  type: 'alert' | 'info' | 'warning';
  timestamp: Date;
  read: boolean;
}

export interface Order {
  id: number;
  patientName: string;
  medication: string;
  prescriptionNumber: string;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  orderDate: Date;
  estimatedDelivery?: Date;
}

export interface Patient {
  id: number;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  insuranceProvider: string;
  insuranceId: string;
  phone: string;
  email: string;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
  };
}

export const MOCK_TASKS: Task[] = [
  {
    id: 1,
    type: 'Order Review',
    description: 'Review prescription for John Doe',
    priority: 'high',
    assignedTo: 'Sam Ford',
    dueDate: new Date(Date.now() + 2 * 60 * 60 * 1000), // 2 hours from now
    status: 'pending'
  },
  {
    id: 2,
    type: 'Patient Verification',
    description: 'Verify insurance for Jane Smith',
    priority: 'medium',
    assignedTo: 'Sam Ford',
    dueDate: new Date(Date.now() + 4 * 60 * 60 * 1000), // 4 hours from now
    status: 'in-progress'
  },
  {
    id: 3,
    type: 'Inventory Check',
    description: 'Check stock levels for Medication X',
    priority: 'low',
    assignedTo: 'Pharmacy Team',
    dueDate: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours from now
    status: 'pending'
  },
  {
    id: 4,
    type: 'Delivery Coordination',
    description: 'Schedule delivery for Order #12345',
    priority: 'medium',
    assignedTo: 'Sam Ford',
    dueDate: new Date(Date.now() + 6 * 60 * 60 * 1000), // 6 hours from now
    status: 'pending'
  }
];

export const MOCK_NOTIFICATIONS: Notification[] = [
  {
    id: 1,
    message: 'New order received for processing - Order #12345',
    type: 'info',
    timestamp: new Date(Date.now() - 15 * 60 * 1000), // 15 minutes ago
    read: false
  },
  {
    id: 2,
    message: 'Patient insurance verification failed for Jane Smith',
    type: 'alert',
    timestamp: new Date(Date.now() - 30 * 60 * 1000), // 30 minutes ago
    read: false
  },
  {
    id: 3,
    message: 'Delivery ETA updated for Order #12345 - Now arriving at 3:00 PM',
    type: 'warning',
    timestamp: new Date(Date.now() - 45 * 60 * 1000), // 45 minutes ago
    read: true
  },
  {
    id: 4,
    message: 'Low stock alert: Medication X has only 5 units remaining',
    type: 'alert',
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
    read: true
  },
  {
    id: 5,
    message: 'Order #12344 successfully delivered to patient',
    type: 'info',
    timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000), // 3 hours ago
    read: true
  }
];

export const MOCK_ORDERS: Order[] = [
  {
    id: 12345,
    patientName: 'John Doe',
    medication: 'Lisinopril 10mg',
    prescriptionNumber: 'RX001234',
    status: 'processing',
    orderDate: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
    estimatedDelivery: new Date(Date.now() + 22 * 60 * 60 * 1000) // 22 hours from now
  },
  {
    id: 12344,
    patientName: 'Jane Smith',
    medication: 'Metformin 500mg',
    prescriptionNumber: 'RX001233',
    status: 'delivered',
    orderDate: new Date(Date.now() - 24 * 60 * 60 * 1000), // 1 day ago
  },
  {
    id: 12343,
    patientName: 'Bob Johnson',
    medication: 'Amlodipine 5mg',
    prescriptionNumber: 'RX001232',
    status: 'shipped',
    orderDate: new Date(Date.now() - 6 * 60 * 60 * 1000), // 6 hours ago
    estimatedDelivery: new Date(Date.now() + 18 * 60 * 60 * 1000) // 18 hours from now
  },
  {
    id: 12342,
    patientName: 'Alice Brown',
    medication: 'Omeprazole 20mg',
    prescriptionNumber: 'RX001231',
    status: 'pending',
    orderDate: new Date(Date.now() - 30 * 60 * 1000), // 30 minutes ago
    estimatedDelivery: new Date(Date.now() + 46 * 60 * 60 * 1000) // 46 hours from now
  }
];

export const MOCK_PATIENTS: Patient[] = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    dateOfBirth: new Date('1980-05-15'),
    insuranceProvider: 'BlueCross BlueShield',
    insuranceId: 'BC123456789',
    phone: '(555) 123-4567',
    email: 'john.doe@email.com',
    address: {
      street: '123 Main St',
      city: 'Columbus',
      state: 'OH',
      zipCode: '43215'
    }
  },
  {
    id: 2,
    firstName: 'Jane',
    lastName: 'Smith',
    dateOfBirth: new Date('1975-09-22'),
    insuranceProvider: 'Aetna',
    insuranceId: 'AET987654321',
    phone: '(555) 987-6543',
    email: 'jane.smith@email.com',
    address: {
      street: '456 Oak Ave',
      city: 'Columbus',
      state: 'OH',
      zipCode: '43220'
    }
  },
  {
    id: 3,
    firstName: 'Bob',
    lastName: 'Johnson',
    dateOfBirth: new Date('1965-12-10'),
    insuranceProvider: 'Cigna',
    insuranceId: 'CIG456789123',
    phone: '(555) 456-7890',
    email: 'bob.johnson@email.com',
    address: {
      street: '789 Pine Rd',
      city: 'Columbus',
      state: 'OH',
      zipCode: '43235'
    }
  },
  {
    id: 4,
    firstName: 'Alice',
    lastName: 'Brown',
    dateOfBirth: new Date('1990-03-08'),
    insuranceProvider: 'UnitedHealthcare',
    insuranceId: 'UHC789123456',
    phone: '(555) 321-0987',
    email: 'alice.brown@email.com',
    address: {
      street: '321 Elm St',
      city: 'Columbus',
      state: 'OH',
      zipCode: '43240'
    }
  }
];
