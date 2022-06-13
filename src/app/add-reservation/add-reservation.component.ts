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
  addReservationForm: FormGroup = new FormGroup({
    dateFrom: new FormControl<Date | null>(new Date(), Validators.required),
    dateTo: new FormControl<Date | null>(new Date(), ),
    price: new FormControl<number | null>(null, Validators.required),
  });


  rangeFormGroup = new FormGroup({  
    start: new FormControl(null, Validators.required),  
    end: new FormControl(null, Validators.required)  
  })  

  @ViewChild('picker') picker!: MatDatepicker<Date>;

  constructor(private formBuilder: FormBuilder) {
  
  }
  ngOnInit(): void {}

  addReservation() {
    console.log(this.addReservationForm.value);
  }
}
