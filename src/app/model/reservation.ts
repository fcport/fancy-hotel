import { Client } from './client';
import { Room } from './room';

export interface Reservation {
  id: string;
  dateFrom: Date;
  dateTo: Date;
  clients: Client[];
  price: number;
  treatment: 'BB' | 'HP' | 'FP';
  room: Room;
  checkedIn: boolean;
}
