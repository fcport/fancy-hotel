import { Reservation } from '../model/reservation';

export interface DialogReservationData {
  filter: (res: Reservation) => boolean;
  out: any;
}
