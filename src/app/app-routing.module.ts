import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddClientComponent } from './add-client/add-client.component';
import { AddReservationComponent } from './reservations/add-reservation/add-reservation.component';
import { HomeComponent } from './home/home.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { ExtraComponent } from './extra/extra.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {
    path: 'reservations',
    component: ReservationsComponent,
  },
  {
    path: 'add_reservation',
    component: AddReservationComponent,
  },
  {
    path: 'add_client',
    component: AddClientComponent,
  },
  {
    path: 'extras',
    component: ExtraComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
