import { Component, OnInit, ViewChild } from '@angular/core';
import {
  Form,
  FormArray,
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
  addReservationForm: FormGroup;

  @ViewChild('picker') picker!: MatDatepicker<Date>;

  constructor(private formBuilder: FormBuilder) {
    this.addReservationForm = formBuilder.group({
      dateFrom: new FormControl<Date | null>(new Date(), Validators.required),
      dateTo: new FormControl<Date | null>(new Date()),
      price: new FormControl<number | null>(null, Validators.required),
      clients: new FormArray([]),
    });
  }
  ngOnInit(): void {}

  addReservation() {
    console.log(this.addReservationForm);
  }
  addClient() {
    const clientInfo = this.formBuilder.group({
      name: new FormControl<string | null>(null, [Validators.required]),
      surname: new FormControl<string | null>(null, [Validators.required]),
      email: new FormControl<string | null>(null, [
        Validators.required,
        Validators.email,
      ]),
      age: new FormControl<number>(0, [Validators.required]),
    });
    (<FormArray>this.addReservationForm.get('clients')).push(clientInfo);
  }

  getClientsControls() {
    return (<FormArray>this.addReservationForm.get('clients')).controls;
  }
}
