import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Room } from '../model/room';
import { RoomService } from './room.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css'],
})
export class RoomComponent implements OnInit {
  rooms!: Room[];

  displayedColumns = ['number', 'maxCapacity'];

  selectedRoom: Room | null = null;

  @Input('filter') filter?: (room: Room) => boolean;

  @Output('confirmedRoom') confirmedRoom = new EventEmitter<Room>();

  constructor(private roomService: RoomService) {}

  ngOnInit(): void {
    this.rooms = this.roomService.getRooms();

    if (!!this.filter) {
      this.rooms = this.rooms.filter(this.filter);
    }
  }

  onSelectedRow(selectedRow: any) {
    this.selectedRoom = selectedRow;

    this.confirmedRoom.emit(this.selectedRoom!);
  }
}
