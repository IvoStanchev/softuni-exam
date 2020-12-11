import { Component, OnChanges, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
    this.dataStorageService.fetchCoffee().subscribe();
    // * Form data
    this.coffeeForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      roast: new FormControl(null, Validators.required),
      imagePath: new FormControl(null, Validators.required),
      weight: new FormControl(null, Validators.required),
      date: new FormControl(new Date()),
    });
  }

  // * Vars

  coffeeForm: FormGroup;

  isSubmitted = false;
  // * Methods

  onSubmit() {
    this.isSubmitted = true;
    this.storeService.addCoffee(this.coffeeForm.value);
    this.dataStorageService.storeCoffee();
    this.storeService.addProductMode = false;
    this.ngOnInit();
    this.onCancel();
  }

  onCancel() {
    this.storeService.toStore();
  }
}
