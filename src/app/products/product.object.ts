export class Product{
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    description: string;

    constructor(){
        this.id = 0;
        this.name = '';
        this.price = 0;
        this.imageUrl = '';
        this.description = '';

    }
}

export const PRODUCTS: Product[] = [
    {id: 1, name: 'Nike', price: 8, imageUrl: '../../assets/Nike.jpg', description: 'Nike Shoes'},
    {id: 2, name: 'Puma', price: 10, imageUrl: '../../assets/Puma.jpg', description: 'Puma Shoes'},
    {id: 3, name: 'Skechers', price: 12, imageUrl: '../../assets/Adidas.jpg', description: 'Skechers Shoes'},
];