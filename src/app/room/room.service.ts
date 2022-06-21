import { Injectable } from '@angular/core';
import { Room } from '../model/room';

@Injectable({ providedIn: 'root' })
export class RoomService {
     rooms : Room[] = [
        {
            number: 101, 
            items: [],
        },
        {
            number: 102, 
            items: [],
        },
        {
            number: 103, 
            items: [],
        },
        {
            number: 104, 
            items: [],
        },
        {
            number: 201, 
            items: [],
        },
        {
            number: 202, 
            items: [],
        },
        {
            number: 203, 
            items: [],
        },
        {
            number: 204, 
            items: [],
        },

     ]
}
