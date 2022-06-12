import { Item } from './item';
import { Reservation } from './reservation';

export interface Room {
  number: number;
  reservation: Reservation;
  items: Item[];
}