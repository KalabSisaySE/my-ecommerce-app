export class Customer{
    id: number;
    name: string;
    profileImg: string;
    numberOfYear: number;
    constructor(){
        this.id = 0;
        this.name = '';
        this.profileImg = '';
        this.numberOfYear = 0;
    }
}

export const CUSTOMERS:Customer[] = [
    {id: 1, name:"Abel", profileImg: '../../assets/person1.jpg', numberOfYear: 2},
    {id: 2, name:"Biruk", profileImg: '../../assets/person2.jpg', numberOfYear: 5},
    {id: 3, name:"Daniel", profileImg: '../../assets/person3.jpg', numberOfYear: 10},
    {id: 4, name:"Meron", profileImg: '../../assets/person4.jpg', numberOfYear: 1}
];