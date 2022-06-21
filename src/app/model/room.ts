import { Extra } from './extra';
import { Reservation } from './reservation';

export interface Room {
  number: number;
  items: Extra[];
}
