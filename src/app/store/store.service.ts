import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Coffee } from './coffee.model';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  constructor(private router: Router, private route: ActivatedRoute) {}
  // * Vars
  addProductMode = false;
  loggedIn = false;
  detailMode = false;
  editMode = false;

  // * Fetch the current coffee stock
  getCoffee() {
    return this.coffee;
  }

  // * Add a new coffee
  addCoffee(coffee: Coffee) {
    this.coffee.push(coffee);
  }

  // * Delete a coffee
  deleteCoffee(index: number) {
    this.coffee.splice(index, 1);
  }

  // * Get a single coffee
  singleCoffee(index: number) {
    return this.coffee[index];
  }
  // * Set all coffees from the database arr to coffee arr.

  setCoffee(coffee: Coffee[]) {
    this.coffee = coffee;
  }

  //* Update a product

  updateCoffee(index: number, newCoffee: Coffee) {
    this.coffee[index] = newCoffee;
  }

  // ? redirect to store.
  toStore() {
    this.router.navigate(['store'], { relativeTo: this.route });
    this.detailMode = false;
    this.addProductMode = false;
    this.editMode = false;
  }
  private coffee: Coffee[] = [];

  // ? Dummy data
  // private coffee: Coffee[] = [
  //   new Coffee(
  //     'BALI: Blue Moon',
  //     12.99,
  //     'Organic Bali Blue Moon coffee is overwhelmingly rich with syrupy dark chocolate notes, a creamy mouthfeel and spiced finish. The earthiness found in many Indonesian coffees takes a backseat with this Bali Blue Moon coffee, where earthy notes are very subtle overall. This stunning Rainforest Alliance Certified, single origin organic coffee remains one of our all-time best sellers.',
  //     'Medium Roast',
  //     'https://cdn.shopify.com/s/files/1/2217/5179/products/medium_ae3e650f-e054-435f-9214-d184afebea45_600x.jpg?v=1603314125',
  //     340,
  //     new Date()
  //   ),
  //   new Coffee(
  //     'Black Knight: Artisian Blend',
  //     12.99,
  //     "Black Knight is a dangerously dark roast coffee blend whose bold flavor and full body will never disappoint. This fair trade organic coffee has notorious notes of tropical plantains and an intense caramelized sugar finish that will give your mouth a daring taste of deliciously dark mayhem you'll never forget.",
  //     'Dark Roast',
  //     'https://cdn.shopify.com/s/files/1/2217/5179/products/medium_839f6d94-ff7c-4763-8d1b-a0149a77ff3c_600x.jpg?v=1603314653',
  //     340,
  //     new Date()
  //   ),
  //   new Coffee(
  //     'Sumatra: Swiss Water Decaf',
  //     15.99,
  //     'Excellent Sumatran coffees truly capture the jungle essence flavor-wise, producing an earthy and sometimes vegetal cup with chocolate undertones and a creamy finish. Our Sumatra Swiss Water Decaf Coffee is a Fair Trade Organic option that uses a completely chemical-free decaffeination method to retain optimal flavor and body.',
  //     'Medium Roast',
  //     'https://cdn.shopify.com/s/files/1/2217/5179/products/medium_9eae62a1-5d5c-4342-a8b6-13648b7b74a7_600x.jpg?v=1603315044',
  //     340,
  //     new Date()
  //   ),
  //   new Coffee(
  //     'White Knight: Artisian Blend',
  //     28.99,
  //     'White Knight light roast coffee is so bold, yet so clean. This artisan blend uses a royal combination of only the fairest and purest single origin coffee beans. With notes of wild bing cherries, cocoa and a clean finish, our White Knight coffee is a cup of royal gold sure to steal your heart.',
  //     'Medium Roast',
  //     'https://cdn.shopify.com/s/files/1/2217/5179/products/medium_ae3e650f-e054-435f-9214-d184afebea45_600x.jpg?v=1603314125',
  //     340,
  //     new Date()
  //   ),
  // ];
}
