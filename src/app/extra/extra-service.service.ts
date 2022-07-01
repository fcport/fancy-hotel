import { Injectable } from '@angular/core';
import { Extra } from '../model/extra';

@Injectable({
  providedIn: 'root',
})
export class ExtraService {
  private extras: Extra[] = [
    {
      id: 'EXTRA001',
      name: 'Bottle of wine',
      price: 25,
      description: 'just a basic white wine',
      image:
        'https://images.vivino.com/thumbs/eUncFig1RhKgF7bfqC-bcw_pb_600x600.png',
    },
    {
      id: 'EXTRA002',
      name: 'Coca-Cola',
      price: 8,
      description: 'Does this really need a description?',
      image:
        'https://www.carrefour.it/on/demandware.static/-/Sites-carrefour-master-catalog-IT/default/dwa9c033bb/large/COCACOLAPETLT1-5449000054227-1.png',
    },
    {
      id: 'EXTRA003',
      name: 'Beer',
      price: 18,
      description: 'Lord Beer me strength',
      image:
        'https://www.heineken.com/media-az/01pfxdqq/heineken-original-bottle.png?quality=85',
    },
    {
      id: 'EXTRA004',
      name: 'Fuze tea',
      price: 10,
      description: 'Fuuuuuze',
      image:
        'https://gecoshop.com/5604-large_default/fuze-tea-pesca-12-x-400-ml.jpg',
    },
    {
      id: 'EXTRA005',
      name: 'Bepis',
      price: 285,
      description: 'La bepis',
      image:
        'https://i.discogs.com/zNBWXFX0hN-8yhbk3ifDatxn2T87oWlql-UbB9axRoI/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEzMjA2/NzMwLTE1NDk5MjUy/MzMtNjQ4Ny5qcGVn.jpeg',
    },
    {
      id: 'EXTRA006',
      name: 'Dr. Pepe',
      price: 40,
      description: 'extra rare',
      image:
        'https://ih1.redbubble.net/image.1339218681.5542/flat,750x,075,f-pad,750x1000,f8f8f8.jpg',
    },
  ];

  private cart: Extra[] = []

  getExtras() {
    return this.extras;
  }
  getCart(){
    return this.cart;
  }
}
