import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataStorageService } from '../shared/data-storage.service';

import { Coffee } from './coffee.model';
import { StoreService } from './store.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],
})
export class StoreComponent implements OnInit {
  // * Imported service
  constructor(
    public storeService: StoreService,
    private dataStorageService: DataStorageService
  ) {}

  ngOnInit(): void {
    // * Form data
    this.coffeeForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      roast: new FormControl(null, Validators.required),
      imagePath: new FormControl(null, Validators.required),
      weight: new FormControl(null, Validators.required),
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
    this.dataStorageService.storeRecipes();
    this.storeService.addProductMode = false;
    this.onCancel();
  }

  onCancel() {
    this.storeService.toStore();
  }
}
