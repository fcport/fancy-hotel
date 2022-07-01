import { Component, OnInit } from '@angular/core';
import { Extra } from 'src/app/model/extra';
import { ExtraService } from '../extra-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart: Extra[] = []

  constructor(private extraService: ExtraService) {}

  ngOnInit(): void {
    this.cart = this.extraService.getCart()
  }
}
