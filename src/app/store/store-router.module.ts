import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreDetailsComponent } from './store-details/store-details.component';
import { StoreEditComponent } from './store-edit/store-edit.component';
import { StoreResolverService } from './store-resolver.service';
import { StoreComponent } from './store.component';

const routes: Routes = [
  {
    path: '',
    component: StoreComponent,
    children: [
      {
        path: ':id/details',
        component: StoreDetailsComponent,
        //resolve: [StoreResolverService],
      },
      {
        path: ':id/edit',
        component: StoreEditComponent,
        // resolve: [StoreResolverService],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoreRoutingModule {}
