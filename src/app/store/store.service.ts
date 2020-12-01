import { Injectable } from '@angular/core';
import { Coffee } from './coffee.model';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  constructor() {}

  private coffee: Coffee[] = [
    new Coffee(
      'BALI: Blue Moon',
      'Bold bodied',
      'Medium Roast',
      'https://cdn.shopify.com/s/files/1/2217/5179/products/medium_ae3e650f-e054-435f-9214-d184afebea45_600x.jpg?v=1603314125',
      340,
      new Date()
    ),
    new Coffee(
      'Black Knight: Artisian Blend',
      'Bold bodied',
      'Dark Roast',
      'https://cdn.shopify.com/s/files/1/2217/5179/products/medium_839f6d94-ff7c-4763-8d1b-a0149a77ff3c_600x.jpg?v=1603314653',
      340,
      new Date()
    ),
    new Coffee(
      'Sumatra: Swiss Water Decaf',
      'Bold bodied',
      'Medium Roast',
      'https://cdn.shopify.com/s/files/1/2217/5179/products/medium_9eae62a1-5d5c-4342-a8b6-13648b7b74a7_600x.jpg?v=1603315044',
      340,
      new Date()
    ),
    new Coffee(
      'White Knight: Artisian Blend',
      'Bold bodied',
      'Medium Roast',
      'https://cdn.shopify.com/s/files/1/2217/5179/products/medium_ae3e650f-e054-435f-9214-d184afebea45_600x.jpg?v=1603314125',
      340,
      new Date()
    ),
  ];
}
