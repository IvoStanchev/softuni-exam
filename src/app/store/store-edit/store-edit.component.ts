import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { Coffee } from '../coffee.model';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-store-edit',
  templateUrl: './store-edit.component.html',
  styleUrls: ['./store-edit.component.css'],
})
export class StoreEditComponent implements OnInit {
  constructor(
    private storeService: StoreService,
    private route: ActivatedRoute,
    private dataStorageService: DataStorageService
  ) {}

  ngOnInit(): void {
    this.dataStorageService.fetchCoffee().subscribe();
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.InitForm();
    });
  }

  private InitForm() {
    let name = '';
    let price = 0;
    let description = '';
    let roast = '';
    let imagePath = '';
    let weight = 0;

    const coffee = this.storeService.singleCoffee(this.id);

    name = coffee.name;
    price = coffee.price;
    description = coffee.description;
    roast = coffee.roast;
    imagePath = coffee.imagePath;
    weight = coffee.weight;

    // * Form data
    this.editCoffeForm = new FormGroup({
      name: new FormControl(name, Validators.required),
      price: new FormControl(price, Validators.required),
      description: new FormControl(description, Validators.required),
      roast: new FormControl(roast, Validators.required),
      imagePath: new FormControl(imagePath, Validators.required),
      weight: new FormControl(weight, Validators.required),
    });
  }

  // * Vars

  editCoffeForm: FormGroup;
  coffee: Coffee;
  isSubmitted = false;
  editMode = false;
  id: number;

  // * Methods

  onSubmit() {
    this.storeService.updateCoffee(this.id, this.editCoffeForm.value);
    this.dataStorageService.storeCoffee();
    this.storeService.editMode = false;
    this.ngOnInit();
    this.onCancel();
  }

  onCancel() {
    this.storeService.toStore();
  }
}
