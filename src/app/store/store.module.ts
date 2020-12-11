import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreComponent } from './store.component';
import { StoreRoutingModule } from './store-router.module';
import { StoreListComponent } from './store-list/store-list.component';
import { StoreItemComponent } from './store-list/store-item/store-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreDetailsComponent } from './store-details/store-details.component';
import { StoreEditComponent } from './store-edit/store-edit.component';

@NgModule({
  declarations: [
    StoreComponent,
    StoreListComponent,
    StoreItemComponent,
    StoreDetailsComponent,
    StoreEditComponent,
  ],
  imports: [
    CommonModule,
    StoreRoutingModule,
    RouterModule,
    ReactiveFormsModule,
  ],
})
export class StoreModule {}
