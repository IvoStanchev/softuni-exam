import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreDetailsComponent } from './store-details/store-details.component';
import { StoreEditComponent } from './store-edit/store-edit.component';
import { StoreComponent } from './store.component';

const routes: Routes = [
  {
    path: '',
    component: StoreComponent,
    children: [
      {
        path: ':id/details',
        component: StoreDetailsComponent,
      },
      {
        path: ':id/edit',
        component: StoreEditComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoreRoutingModule {}
