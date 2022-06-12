import { Item } from "./item";
import { reservation } from "./reservation";

export class Room{
    constructor(private number : number, private reservation: reservation, private items: Item[]){

    }
}