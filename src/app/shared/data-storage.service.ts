import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Coffee } from '../store/coffee.model';
import { StoreService } from '../store/store.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(private http: HttpClient, private storeService: StoreService) {}

  storeCoffee() {
    const coffee = this.storeService.getCoffee();

    this.http
      .put(
        'https://softuni-exam-3cc55-default-rtdb.europe-west1.firebasedatabase.app/products.json',
        coffee
      )
      .subscribe((response) => {
        console.log(response);
      });
  }

  fetchCoffee() {
    // * Take one value from the observable and unsubscribe.

    return this.http
      .get<Coffee[]>(
        'https://softuni-exam-3cc55-default-rtdb.europe-west1.firebasedatabase.app/products.json'
      )
      .pipe(
        tap((coffee) => {
          this.storeService.setCoffee(coffee);
        })
      );
  }
}
