import { Component, OnInit } from '@angular/core';
import { Extra } from '../model/extra';
import { ExtraService } from './extra-service.service';

@Component({
  selector: 'app-extra',
  templateUrl: './extra.component.html',
  styleUrls: ['./extra.component.css'],
})
export class ExtraComponent implements OnInit {
  extras: Extra[] = [];
  

  constructor(private extrasService: ExtraService) {}

  ngOnInit(): void {
    this.extras = this.extrasService.getExtras();
  }

  itemAddedToCart(extra: Extra){
    this.extras.push(extra);
  }
}
