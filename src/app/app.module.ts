import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddClientComponent } from './add-client/add-client.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddReservationComponent } from './reservations/add-reservation/add-reservation.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { SelectReservationDialogComponent } from './reservations/select-reservation-dialog/select-reservation-dialog.component';
import { RoomComponent } from './room/room.component';
import { SelectRoomDialogComponent } from './room/select-room-dialog/select-room-dialog.component';
import { ExtraComponent } from './extra/extra.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReservationsComponent,
    AddReservationComponent,
    AddClientComponent,
    SelectReservationDialogComponent,
    RoomComponent,
    SelectRoomDialogComponent,
    ExtraComponent,
  ],
  imports: [
    MatDialogModule,
    MatSliderModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDatepickerModule,
    MatSidenavModule,
    MatNativeDateModule,
    MatRadioModule,
    MatTableModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
