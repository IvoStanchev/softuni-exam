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
  mode = false;
  // detailMode = false;
  // editMode = false;
  private coffee: Coffee[] = [];

  // * Fetch the current coffee stock
  getCoffee() {
    if (this.coffee != null) {
      return this.coffee;
    } else {
      return (this.coffee = []);
    }
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
    if (this.coffee !== null) {
      this.coffee = coffee;
    } else {
      this.coffee = [];
    }
  }

  //* Update a product

  updateCoffee(index: number, newCoffee: Coffee) {
    this.coffee[index] = newCoffee;
  }

  // ? redirect to store.
  toStore() {
    this.router.navigate(['store'], { relativeTo: this.route });
    this.addProductMode = false;
    this.mode = false;
  }
}
