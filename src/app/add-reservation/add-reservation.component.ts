import { Component, OnInit } from '@angular/core';
import {
  FormBuilder, FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-add-reservation',
  templateUrl: './add-reservation.component.html',
  styleUrls: ['./add-reservation.component.css'],
})
export class AddReservationComponent implements OnInit {
  addReservationForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.addReservationForm = formBuilder.group({
      dateFrom: [(new Date()).toLocaleDateString(), Validators.required],
      dateTo: [(new Date()).toLocaleDateString(), Validators.required],
      price: ['', Validators.required],
    });
  }

  //check this out https://material.angular.io/components/datepicker/overview

  ngOnInit(): void {}

  addReservation() {
    console.log(this.addReservationForm.value);
  }
}
