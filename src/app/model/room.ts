import { Extra } from './extra';

export interface Room {
  number: number;
  maxCapacity: number;
  extras: Extra[];
}
