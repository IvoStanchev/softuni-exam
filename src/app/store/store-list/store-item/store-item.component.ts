import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { Coffee } from '../../coffee.model';
import { StoreService } from '../../store.service';

@Component({
  selector: 'app-store-item',
  templateUrl: './store-item.component.html',
  styleUrls: ['./store-item.component.css'],
})
export class StoreItemComponent implements OnInit, OnDestroy {
  constructor(
    private storeService: StoreService,
    private dataStorageService: DataStorageService,
    private authService: AuthService
  ) {}

  //* Vars
  id: number;
  isAuth = false;
  private userSub: Subscription;

  // * Bind the coffee and id
  @Input('coffee') coffee: Coffee;
  @Input() index: number;

  // ? Fetch auth state
  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe((user) => {
      this.isAuth = !!user;
    });
  }

  // ? Delete
  onDeleteCoffee() {
    this.storeService.deleteCoffee(this.index);
    this.dataStorageService.storeCoffee();
  }

  // ? Load the details page
  onDetails() {
    this.storeService.detailMode = true;
  }
  // ? Load the edit page
  onEdit() {
    this.storeService.editMode = true;
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}
