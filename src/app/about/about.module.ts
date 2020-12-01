import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { RouterModule } from '@angular/router';
import { AboutRouterModule } from './about-router.module';

@NgModule({
  declarations: [AboutComponent],
  imports: [CommonModule, RouterModule, AboutRouterModule],
})
export class AboutModule {}
