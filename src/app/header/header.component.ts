import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { __awaiter } from 'tslib';
import { AuthService } from '../auth/auth.service';
import { StoreService } from '../store/store.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  constructor(
    private storeService: StoreService,
    private authService: AuthService
  ) {}

  private userSub: Subscription;

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe((user) => {
      this.isAuth = !!user;
    });
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

  onLogout() {
    this.authService.logout();
  }
  onAdd() {
    this.storeService.addProductMode = !this.storeService.addProductMode;
  }

  // * Vars
  isAuth = false;
  currentUser = JSON.parse(localStorage.getItem('userData'));
}
