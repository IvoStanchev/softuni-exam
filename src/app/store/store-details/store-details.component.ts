import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { Coffee } from '../coffee.model';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-store-details',
  templateUrl: './store-details.component.html',
  styleUrls: ['./store-details.component.css'],
})
export class StoreDetailsComponent implements OnInit {
  constructor(
    private storeService: StoreService,
    private route: ActivatedRoute,
    private dataStorageService: DataStorageService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.coffee = this.storeService.singleCoffee(this.id);
    });
  }

  //* Vars
  id: number;
  coffee: Coffee;

  // * Functions
  toStore() {
    this.storeService.toStore();
  }

  onOrder() {
    alert(`Order placed`);
  }
}
