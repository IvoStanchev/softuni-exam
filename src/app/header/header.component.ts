import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store/store.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(public storeService: StoreService) {}

  ngOnInit(): void {}

  // * Vars

  logIn() {
    this.storeService.loggedIn = true;
  }

  logOut() {
    this.storeService.loggedIn = false;
  }

  onAdd() {
    this.storeService.addProductMode = !this.storeService.addProductMode;
  }
}
