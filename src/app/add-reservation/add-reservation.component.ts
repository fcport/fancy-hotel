import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDatepicker } from '@angular/material/datepicker';

@Component({
  selector: 'app-add-reservation',
  templateUrl: './add-reservation.component.html',
  styleUrls: ['./add-reservation.component.css'],
})
export class AddReservationComponent implements OnInit {
  // addReservationForm: FormGroup = this.formBuilder.group({
  //   dateFrom: new FormControl<Date | null>(new Date()),
  //   dateTo: new FormControl<Date | null>(new Date()),
  //   price: ['', Validators.required],
  // });
  addReservationForm: FormGroup = new FormGroup({
    dateFrom: new FormControl<Date | null>(new Date()),
    dateTo: new FormControl<Date | null>(new Date()),
    price: new FormControl<number>(0),
  });


  rangeFormGroup = new FormGroup({  
    start: new FormControl(null, Validators.required),  
    end: new FormControl(null, Validators.required)  
  })  

  @ViewChild('picker') picker!: MatDatepicker<Date>;

  constructor(private formBuilder: FormBuilder) {
    // this.addReservationForm = formBuilder.group({
    //   dateFrom: new FormControl<Date | null>(new Date()),
    //   dateTo: new FormControl<Date | null>(new Date()),
    //   price: ['', Validators.required],
    // });
  }

  //check this out https://material.angular.io/components/datepicker/overview

  ngOnInit(): void {}

  addReservation() {
    this.picker.open();
    console.log(this.addReservationForm.value);
  }
}
