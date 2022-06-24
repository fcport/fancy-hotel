import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Reservation } from '../model/reservation';
import { ReservationService } from '../reservations/reservation.service';
import { SelectReservationDialogComponent } from '../reservations/select-reservation-dialog/select-reservation-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  selectedReservation: Reservation | null = null;
  selectedReservationSub!: Subscription;

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private reservationService: ReservationService
  ) {}

  ngOnDestroy(): void {
    if (!!this.selectedReservationSub)
      this.selectedReservationSub.unsubscribe();
  }

  ngOnInit(): void {
    this.selectedReservationSub = this.reservationService
      .getSelectedReservation()
      .subscribe((res) => {
        this.selectedReservation = res;
      });
  }

  loadReservations() {
    this.router.navigate(['/reservations']);
  }

  addReservation() {}

  checkOutCamera() {
    this.reservationService.checkOutReservation(this.selectedReservation!);
  }

  checkInCamera() {
    this.reservationService.checkInReservation(this.selectedReservation!);
  }

  openDialogSelectReservation() {
    const dialogRef = this.dialog.open(SelectReservationDialogComponent, {
      data: {
        filter: (res: Reservation) => {return !(res.checkedIn && res.checkedOut)},
        out: null,
      },
      width: '60%',
    });

    this.selectedReservationSub = dialogRef.afterClosed().subscribe((res) => {
      if (!!res) this.reservationService.setSelectedReservation(res.out);
    });
  }
}
