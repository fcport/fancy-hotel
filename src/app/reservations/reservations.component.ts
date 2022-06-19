import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Reservation } from '../model/reservation';
import { ReservationService } from './reservation.service';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css'],
})
export class ReservationsComponent implements OnInit {
  reservations!: Reservation[];
  displayedColumns = ['dateFrom', 'dateTo', 'price', 'treatment', 'clients'];
  selectedReservation: Reservation | null = null;

  @Output('confirmedReservation') confirmedReservation =
    new EventEmitter<Reservation>();

  constructor(private reservationService: ReservationService) {}

  ngOnInit(): void {
    this.reservations = this.reservationService.getReservations();
  }

  onSelectedRow(selectedRow: any) {
    this.selectedReservation = selectedRow;

    this.confirmedReservation.emit(this.selectedReservation!);
  }
}
