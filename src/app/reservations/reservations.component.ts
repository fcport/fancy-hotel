import { Component, OnInit } from '@angular/core';
import { Reservation } from '../model/reservation';

export const RESERVATIONS: Reservation[] = [
  {
    id: 'TESTTESTTEST',
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
  },
  {
    id: 'TESTTESTTEST',
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
  },
  {
    id: 'TESTTESTTEST',
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
  },
];

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css'],
})
export class ReservationsComponent implements OnInit {
  reservations: Reservation[] = RESERVATIONS;
  displayedColumns = ['dateFrom', 'dateTo', 'price', 'treatment']
  

  constructor() {}

  ngOnInit(): void {}
}
