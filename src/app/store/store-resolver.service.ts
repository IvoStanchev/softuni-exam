import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { DataStorageService } from '../shared/data-storage.service';
import { Coffee } from './coffee.model';
import { StoreService } from './store.service';

@Injectable({ providedIn: 'root' })
export class StoreResolverService implements Resolve<Coffee[]> {
  constructor(
    private dataStorageService: DataStorageService,
    private storeService: StoreService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const coffee = this.storeService.getCoffee();

    if (coffee.length === 0) {
      return this.dataStorageService.fetchCoffee();
    } else {
      return coffee;
    }
  }
}
