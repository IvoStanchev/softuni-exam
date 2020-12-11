import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store/store.service';
import { Coffee } from '../store/coffee.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private storeService: StoreService, private router: Router) {}

  ngOnInit(): void {
    this.coffee = this.storeService.getCoffee().slice(0, 3);
  }

  //* Vars
  coffee: Coffee[];

  // * Functions
  toStore() {
    this.storeService.toStore();
  }
}
