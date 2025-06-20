export interface Procedure {
  id: number;
  name: string;
  code?: string;
  description?: string;
}

export const MOCK_PROCEDURES: Procedure[] = [
  { 
    id: 1, 
    name: 'Treatment Plan 001 - Lu-177 DOTATATE', 
    code: 'TP001',
    description: 'Radiotherapy treatment using Lu-177 DOTATATE'
  },
  { 
    id: 2, 
    name: 'Treatment Plan 002 - Lu-177 PSMA', 
    code: 'TP002',
    description: 'Prostate-specific treatment with Lu-177 PSMA'
  },
  { 
    id: 3, 
    name: 'Treatment Plan 003 - Y-90 Microspheres', 
    code: 'TP003',
    description: 'Hepatic treatment using Y-90 microspheres'
  },
  { 
    id: 4, 
    name: 'Treatment Plan 004 - I-131 Therapy', 
    code: 'TP004',
    description: 'Thyroid treatment with I-131'
  },
  { 
    id: 5, 
    name: 'Treatment Plan 005 - Ra-223 Therapy', 
    code: 'TP005',
    description: 'Bone metastases treatment with Ra-223'
  }
];
