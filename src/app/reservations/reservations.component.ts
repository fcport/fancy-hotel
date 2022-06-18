import { Component, OnInit } from '@angular/core';
import { Reservation } from '../model/reservation';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {

  reservations : Reservation[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
