import { Injectable } from '@angular/core';
import { Reservation } from '../model/reservation';
import { Room } from '../model/room';

@Injectable({ providedIn: 'root' })
export class RoomService {
  rooms: Room[] = [
    {
      number: 101,
      items: [],
      maxCapacity: 2,
    },
    {
      number: 102,
      items: [],
      maxCapacity: 2,
    },
    {
      number: 103,
      items: [],
      maxCapacity: 2,
    },
    {
      number: 104,
      items: [],
      maxCapacity: 2,
    },
    {
      number: 201,
      items: [],
      maxCapacity: 4,
    },
    {
      number: 202,
      items: [],
      maxCapacity: 4,
    },
    {
      number: 203,
      items: [],
      maxCapacity: 4,
    },
    {
      number: 204,
      items: [],
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
