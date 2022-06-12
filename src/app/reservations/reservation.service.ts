import { Injectable } from '@angular/core';
import { Reservation } from '../model/reservation';

@Injectable({ providedIn: 'root' })
export class ReservationService {
    reservations :Reservation[] = []
}
