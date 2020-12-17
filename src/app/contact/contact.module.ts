import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactRouterModule } from './contact-router.module';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    ContactRouterModule,
    RouterModule,
    ReactiveFormsModule,

    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDGiysWx8FDoZin3qrhqGGH77P7otY4Blo',
    }),
  ],
})
export class ContactModule {}
