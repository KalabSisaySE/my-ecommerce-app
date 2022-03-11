import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CUSTOMERS } from './customer.object';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
customerList = CUSTOMERS
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  editCustomer(id: number){
    console.log('id');
    this.router.navigateByUrl('/customers/edit/' + id);
  }

}
