import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { RouterModule } from '@angular/router';
import { ContactRouterModule } from './contact-router.module';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    RouterModule,
    ContactRouterModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDGiysWx8FDoZin3qrhqGGH77P7otY4Blo',
    }),
  ],
})
export class ContactModule {}
