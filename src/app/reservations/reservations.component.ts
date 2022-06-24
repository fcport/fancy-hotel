import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Reservation } from '../model/reservation';
import { ReservationService } from './reservation.service';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css'],
})
export class ReservationsComponent implements OnInit {
  reservations!: Reservation[];
  displayedColumns = [
    'room',
    'dateFrom',
    'dateTo',
    'price',
    'treatment',
    'clients',
    'checkedIn',
  ];
  selectedReservation: Reservation | null = null;

  @Input('filter') filter?: (res: Reservation) => boolean;

  @Output('confirmedReservation') confirmedReservation =
    new EventEmitter<Reservation>();

  constructor(private reservationService: ReservationService) {}

  ngOnInit(): void {
    this.reservations = this.reservationService.getReservations();

    if (!!this.filter) {
      this.reservations = this.reservations.filter(this.filter);
    }
  }

  onSelectedRow(selectedRow: any) {
    this.selectedReservation = selectedRow;

    this.confirmedReservation.emit(this.selectedReservation!);
  }
}
