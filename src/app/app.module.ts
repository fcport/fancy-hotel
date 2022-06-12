import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { AddReservationComponent } from './add-reservation/add-reservation.component';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { AddClientComponent } from './add-client/add-client.component'
import {MatIconModule} from '@angular/material/icon'

@NgModule({
  declarations: [AppComponent, HomeComponent, ReservationsComponent, AddReservationComponent, AddClientComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
