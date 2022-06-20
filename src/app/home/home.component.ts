import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
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
    this.selectedReservationSub =
      this.reservationService.selectedReservation.subscribe((res) => {
        this.selectedReservation = res;
        console.log(res);
        console.log(this.selectedReservation?.room);
      });
  }

  loadReservations() {
    this.router.navigate(['/reservations']);
  }

  addReservation() {}

  openDialogSelezionaCamera() {
    const dialogRef = this.dialog.open(SelectReservationDialogComponent, {});

    this.selectedReservationSub = dialogRef.afterClosed().subscribe((res) => {
      this.reservationService.setSelectedReservation(res);
    });
  }

  openDialogCheckInCamera() {
    const dialogRef = this.dialog.open(SelectReservationDialogComponent, {});

    dialogRef.afterClosed().subscribe((res) => {
      this.reservationService.checkInReservation(res);
    });
  }
}
