import { Component, OnChanges, OnInit } from '@angular/core';
import { StoreService } from '../store/store.service';
import { Coffee } from '../store/coffee.model';
import { Router } from '@angular/router';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnChanges {
  constructor(
    private storeService: StoreService,
    private router: Router,
    private dataStorageService: DataStorageService
  ) {}

  ngOnInit(): void {
    this.dataStorageService.fetchCoffee().subscribe();
  }
  ngOnChanges() {}
  ngDoCheck(): void {
    this.coffee = this.storeService.getCoffee().slice(0, 3);
  }

  //* Vars
  coffee: Coffee[];

  // * Functions
  toStore() {
    this.storeService.toStore();
  }
}
