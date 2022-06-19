import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Reservation } from '../model/reservation';

@Injectable({ providedIn: 'root' })
export class ReservationService {
  reservations: Reservation[] = [
    {
      id: '1',
      dateFrom: new Date(),
      dateTo: new Date(),
      clients: [
        {
          name: 'Federico',
          surname: 'Casadei',
          age: 26,
          email: 'fede.bbb@ccc.it',
        },
        {
          name: 'Chen Jie',
          surname: 'Ye',
          age: 23,
          email: 'chen.bbb@ccc.it',
        },
      ],
      price: 245,
      treatment: 'BB',
      room: {
        items: [],
        number: 101
      }
    },
    {
      id: '2',
      dateFrom: new Date('06/16/2022'),
      dateTo: new Date(),
      clients: [
        {
          name: 'Alberto',
          surname: 'Albertini',
          age: 45,
          email: 'alberto.bbb@ccc.it',
        },
        {
          name: 'Cavallo',
          surname: 'Cavallini',
          age: 20,
          email: 'cavallo.bbb@ccc.it',
        },
        {
          name: 'Pietro',
          surname: 'Pietrini',
          age: 44,
          email: 'pietro.bbb@ccc.it',
        },
      ],
      price: 250,
      treatment: 'FP',
      room: {
        items: [],
        number: 102
      }
    },
    {
      id: '3',
      dateFrom: new Date('06/17/2022'),
      dateTo: new Date('06/25/2022'),
      clients: [
        {
          name: 'Roberto',
          surname: 'Robewrtini',
          age: 45,
          email: 'robu.bbb@ccc.it',
        },
      ],
      price: 33,
      treatment: 'HP',
      room: {
        items: [],
        number: 103
      }
    },
  ];

  selectedReservation: Subject<Reservation> = new Subject();

  getReservations() {
    return this.reservations;
  }

  setSelectedReservation(reservation: Reservation) {
    this.selectedReservation.next(reservation);
  }
}
