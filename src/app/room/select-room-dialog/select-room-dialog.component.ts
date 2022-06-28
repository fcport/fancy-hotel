import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Room } from 'src/app/model/room';
import { DialogData } from 'src/app/utils/dialog-data';

@Component({
  selector: 'app-select-room-dialog',
  templateUrl: './select-room-dialog.component.html',
  styleUrls: ['./select-room-dialog.component.css'],
})
export class SelectRoomDialogComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<SelectRoomDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  ngOnInit(): void { 
  }

  cancel() {
    this.data.out = null;
    this.dialogRef.close();
  }
  onConfirmSelectRoom(res: Room) {
    this.data.out = res;
  }
}
