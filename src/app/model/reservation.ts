import { Client } from './client';

export interface Reservation {
  id: string;
  dateFrom: Date;
  dateTo: Date;
  clients: Client[];
  price: number;
}