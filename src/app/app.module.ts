import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddClientComponent } from './add-client/add-client.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExtraCardComponent } from './extra/extra-card/extra-card.component';
import { ExtraComponent } from './extra/extra.component';
import { HomeComponent } from './home/home.component';
import { AddReservationComponent } from './reservations/add-reservation/add-reservation.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { SelectReservationDialogComponent } from './reservations/select-reservation-dialog/select-reservation-dialog.component';
import { RoomComponent } from './room/room.component';
import { SelectRoomDialogComponent } from './room/select-room-dialog/select-room-dialog.component';
import { CartComponent } from './extra/cart/cart.component';


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
    ExtraCardComponent,
    CartComponent,
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
    MatCardModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
