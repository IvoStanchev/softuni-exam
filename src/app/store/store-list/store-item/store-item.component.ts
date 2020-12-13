import { Component, Input, OnInit } from '@angular/core';
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
export class StoreItemComponent implements OnInit {
  constructor(
    private storeService: StoreService,
    private dataStorageService: DataStorageService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe((user) => {
      this.isAuth = !!user;
    });
  }

  //* Vars
  id: number;
  isAuth = false;
  private userSub: Subscription;

  //coffee: Coffee;

  // * Bind the coffee and id
  @Input('coffee') coffee: Coffee;
  @Input() index: number;

  //* Delete
  onDeleteCoffee() {
    this.storeService.deleteCoffee(this.index);
    this.dataStorageService.storeCoffee();
  }

  onDetails() {
    this.storeService.detailMode = true;
  }

  onEdit() {
    this.storeService.editMode = true;
  }
}
