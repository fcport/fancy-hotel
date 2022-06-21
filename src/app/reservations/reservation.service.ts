import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Reservation } from '../model/reservation';
import { Room } from '../model/room';
import { RoomService } from '../room/room.service';

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
      room: null,
      checkedIn: false,
      checkedOut: false,
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
      room: null,
      checkedIn: false,
      checkedOut: false,
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
      room: null,
      checkedIn: false,
      checkedOut: false,
    },
  ];

  constructor(private roomService: RoomService) {}

  private selectedReservation: BehaviorSubject<Reservation | null> =
    new BehaviorSubject<Reservation | null>(null);

  getReservations() {
    return this.reservations;
  }

  setSelectedReservation(reservation: Reservation) {
    this.selectedReservation.next(reservation);
  }

  checkInReservation(reservation: Reservation) {
    if (!!this.reservations.find((res) => res === reservation))
      this.reservations.find((res) => res === reservation)!.checkedIn = true;

    this.assignRoom(reservation);
  }

  getSelectedReservation() {
    return this.selectedReservation.asObservable();
  }

  assignRoom(reservation: Reservation) {
    const room = this.roomService.findFreeRoom(this.reservations);
    if(!room) {
      console.error('No free room'); //TODO: gestire errore tramite subject di errore
    }else{
      this.reservations.find((res) => res === reservation)!.room = room
    }

  }
}
