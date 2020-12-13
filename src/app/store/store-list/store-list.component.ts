import { Component, OnChanges, OnInit } from '@angular/core';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { Coffee } from '../coffee.model';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.css'],
})
export class StoreListComponent implements OnInit, OnChanges {
  constructor(
    private storeService: StoreService,
    public dataStorageService: DataStorageService
  ) {}

  // * Fetch all coffee
  ngOnInit(): void {
    this.dataStorageService.fetchCoffee().subscribe();
  }
  ngOnChanges() {
    this.dataStorageService.fetchCoffee().subscribe();
  }
  ngDoCheck(): void {
    this.coffee = this.storeService.getCoffee();
  }

  coffee: Coffee[];
}
