import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Extra } from 'src/app/model/extra';

@Component({
  selector: 'app-extra-card',
  templateUrl: './extra-card.component.html',
  styleUrls: ['./extra-card.component.css'],
})
export class ExtraCardComponent implements OnInit {
  @Input('extra') extra!: Extra;
  @Output('addToCart') addToCart: EventEmitter<Extra> = new EventEmitter<Extra>();

  constructor() {}

  ngOnInit(): void {}
  onAddToCart() {
    this.addToCart.emit(this.extra);
  }
}
