import { Extra } from './extra';
import { Reservation } from './reservation';

export interface Room {
  number: number;
  maxCapacity: number;
  extras: Extra[];
}
