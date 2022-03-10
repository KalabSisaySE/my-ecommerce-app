export class Customer{
    id: number;
    name: string;

    constructor(){
        this.id = 0;
        this.name = '';
    }
}

export const CUSTOMERS:Customer[] = [
    {id: 1, name:"Abel"},
    {id: 2, name:"Biruk"},
    {id: 3, name:"Daniel"},
    {id: 1, name:"Meron"}
];