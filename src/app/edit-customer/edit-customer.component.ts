import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer, CUSTOMERS } from '../customers/customer.object';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {
  customers = CUSTOMERS;
  selectedCustomer = new Customer();
  c = new Customer()
  constructor(
    private route:ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      param => {
          console.log (param['id']);     		
      }
    );
    this.route.params.subscribe(
      param => {
          for (let customer of this.customers){
            if (customer.id == param["id"]){ this.selectedCustomer = customer; }
          }
      }
    ); 
  }

  updateCustomer(){
    console.log('This is update customers')
    this.selectedCustomer.name = this.c.name;
    this.selectedCustomer.numberOfYear = this.c.numberOfYear;
    //this.p = new Customers();
    this.router.navigateByUrl('customers');
  }

}
