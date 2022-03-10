import { Component, OnInit } from '@angular/core';
import { CUSTOMERS } from './customer.object';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
customerList = CUSTOMERS
  constructor() { }

  ngOnInit(): void {
  }

}
