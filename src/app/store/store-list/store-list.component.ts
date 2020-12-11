import { Component, OnInit } from '@angular/core';
import { Coffee } from '../coffee.model';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.css'],
})
export class StoreListComponent implements OnInit {
  constructor(private storeService: StoreService) {}

  // * Fetch all coffee
  ngOnInit(): void {
    this.coffee = this.storeService.getCoffee();
  }

  coffee: Coffee[];
}
