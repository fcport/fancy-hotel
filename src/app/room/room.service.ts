import { Injectable } from '@angular/core';
import { Reservation } from '../model/reservation';
import { Room } from '../model/room';

@Injectable({ providedIn: 'root' })
export class RoomService {
  private rooms: Room[] = [
    {
      number: 101,
      extras: [],
      maxCapacity: 2,
    },
    {
      number: 102,
      extras: [],
      maxCapacity: 2,
    },
    {
      number: 103,
      extras: [],
      maxCapacity: 2,
    },
    {
      number: 104,
      extras: [],
      maxCapacity: 2,
    },
    {
      number: 201,
      extras: [],
      maxCapacity: 4,
    },
    {
      number: 202,
      extras: [],
      maxCapacity: 4,
    },
    {
      number: 203,
      extras: [],
      maxCapacity: 4,
    },
    {
      number: 204,
      extras: [],
      maxCapacity: 4,
    },
  ];

  findFreeRoom(reservations: Reservation[]) {
    return this.rooms.find((room) => {
      if (
        reservations.findIndex((res) => {
          return !!res.room && res.room.number === room.number;
        }) === -1
      ) {
        return room;
      }

      return null;
    });
  }

  getRooms() {
    return this.rooms;
  }
}
