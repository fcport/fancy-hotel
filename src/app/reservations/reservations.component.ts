import { Component, OnInit } from '@angular/core';
import { Reservation } from '../model/reservation';
import { ReservationService } from './reservation.service';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css'],
})
export class ReservationsComponent implements OnInit {
  reservations!: Reservation[];
  displayedColumns = ['dateFrom', 'dateTo', 'price', 'treatment'];

  constructor(private reservationService: ReservationService) {}

  ngOnInit(): void {
    this.reservations = this.reservationService.getReservations();
  }
}
