import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
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

  checkInReservation(reservation: Reservation, room: Room) {
    const selRes = this.reservations.find((res) => res === reservation)
    // if (!!this.reservations.find((res) => res === reservation)){
    //   this.reservations.find((res) => res === reservation)!.checkedIn = true;
    //   this.reservations.find((res) => res === reservation)!.room = room;
    // }
    if (!!selRes){
      selRes!.checkedIn = true;
      selRes!.room = room;
    }

    console.log(this.reservations);
    
     
  }

  checkOutReservation(reservation: Reservation) {
    const res = this.reservations.find((res) => res === reservation);
    if (!!res) {
      res.checkedOut = true;
      res.room = null;
    }

    this.selectedReservation.next(null);
  }

  getSelectedReservation() {
    return this.selectedReservation.asObservable();
  }

  getAvailableRooms() {
    const occupiedRooms = this.reservations.map((res) => res.room);

    if (!occupiedRooms) {
      return this.roomService.getRooms();
    }

    return this.roomService.getRooms().filter((room) => {
      return !occupiedRooms.includes(room);
    });
  }

  // assignRoom(reservation: Reservation) {
  //   const room = this.roomService.findFreeRoom(this.reservations);
  //   if (!room) {
  //     console.error('No free room'); //TODO: gestire errore tramite subject di errore
  //   } else {
  //     this.reservations.find((res) => res === reservation)!.room = room;
  //   }
  // }

}
