import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreComponent } from './store.component';
import { StoreRoutingModule } from './store-router.module';

@NgModule({
  declarations: [StoreComponent],
  imports: [CommonModule, StoreRoutingModule, RouterModule],
})
export class StoreModule {}
