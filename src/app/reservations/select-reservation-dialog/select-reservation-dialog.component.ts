import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Reservation } from 'src/app/model/reservation';
import { DialogReservationData } from 'src/app/utils/dialog-reservation-data';

@Component({
  selector: 'app-select-reservation-dialog',
  templateUrl: './select-reservation-dialog.component.html',
  styleUrls: ['./select-reservation-dialog.component.css'],
})
export class SelectReservationDialogComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<SelectReservationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogReservationData
  ) {}

  ngOnInit(): void {
  }

  cancel() {
    this.data.out = null;
    this.dialogRef.close();
  }
  onConfirmSelectReservation(res: Reservation) {
    this.data.out = res;
  }
}
