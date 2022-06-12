import { Client } from "./client";

export class reservation {

    constructor(private id: string, private dateFrom : Date, private dateTo: Date, private clients: Client[], private price : number){
        
    }
}