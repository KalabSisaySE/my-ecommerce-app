import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, PRODUCTS } from '../products/product.object';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  products = PRODUCTS; // List of products
  selectedProduct = new Product(); // the selected product
  newProduct: Product = new Product;
  
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      param => {
          for (let product of this.products){
            if (product.id == param['id']){ this.selectedProduct = product; }
          }
      }
    );
  }

  updateProduct(){
    this.selectedProduct.name = this.newProduct.name;
    this.selectedProduct.price = this.newProduct.price;
    this.newProduct = new Product();
    //this.route.navigateByUrl('products');

  }

}
