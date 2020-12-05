import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Coffee } from '../coffee.model';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.css'],
})
export class StoreListComponent implements OnInit {
  constructor(
    private storeService: StoreService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  // * Fetch the coffee
  ngOnInit(): void {
    this.coffee = this.storeService.getCoffee();
  }

  coffee: Coffee[];
}
