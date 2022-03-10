import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product, PRODUCTS } from './product.object';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
productName = "Nike"
product: Product = {
  id: 1,
  name: "Nike",
  price: 2000,
  imageUrl: '../../assets/Nike.jpg',
  description: 'you can read more'
}

productList = PRODUCTS
  constructor(private router:Router) { }

  ngOnInit(): void {
    console.log('Method called')
  }

  editProduct(id: number){
    console.log(id);
    this.router.navigateByUrl('/products/edit/' + id)
  }

}
