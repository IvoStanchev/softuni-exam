import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { RouterModule } from '@angular/router';
import { ContactRouterModule } from './contact-router.module';

@NgModule({
  declarations: [ContactComponent],
  imports: [CommonModule, RouterModule, ContactRouterModule],
})
export class ContactModule {}
