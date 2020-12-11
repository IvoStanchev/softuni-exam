import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AuthComponent } from './auth.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: AuthComponent }]),
  ],
})
export class AuthModule {}
