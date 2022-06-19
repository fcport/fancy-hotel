import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ReservationService } from '../reservations/reservation.service';
import { SelectReservationDialogComponent } from '../reservations/select-reservation-dialog/select-reservation-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {


  constructor(private router: Router, private dialog: MatDialog, private reservationService : ReservationService) {}

  ngOnInit(): void {}

  loadReservations() {
    this.router.navigate(['/reservations']);
  }

  addReservation() {}

  openDialog() {
    const dialogRef = this.dialog.open(SelectReservationDialogComponent, {});

    dialogRef.afterClosed().subscribe((res) => {
      this.reservationService.setSelectedReservation(res);
    });
  }
}
