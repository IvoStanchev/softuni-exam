import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
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
    private route: ActivatedRoute
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
}
