import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
productName = "Nike"
  constructor() { }

  ngOnInit(): void {
    console.log('Method called')
  }

}
