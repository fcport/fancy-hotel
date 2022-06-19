import { Client } from './client';

export interface Reservation {
  id: string;
  assignedRoom: number | null;
  dateFrom: Date;
  dateTo: Date;
  clients: Client[];
  price: number;
  treatment: 'BB' | 'HP' | 'FP';
}
