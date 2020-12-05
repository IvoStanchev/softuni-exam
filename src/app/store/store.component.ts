import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Coffee } from './coffee.model';
import { StoreService } from './store.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],
})
export class StoreComponent implements OnInit {
  // * Imported service
  constructor(public storeService: StoreService) {}

  ngOnInit(): void {
    // * Form data
    this.coffeeForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      roast: new FormControl(null, Validators.required),
      imagePath: new FormControl(null, Validators.required),
      weight: new FormControl(null, Validators.required),
    });
    this.coffeeForm.statusChanges.subscribe((value) => {
      console.log(value);
    });
  }

  // * Vars

  coffeeForm: FormGroup;
  coffee: Coffee;
  isSubmitted = false;

  // * Methods

  onSubmit() {
    this.isSubmitted = true;
    this.storeService.addCoffee(this.coffeeForm.value);
    console.log(this.coffeeForm.value);
  }
}
