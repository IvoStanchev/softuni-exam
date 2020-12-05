import { Component, Input, OnInit } from '@angular/core';
import { Coffee } from '../../coffee.model';
import { StoreService } from '../../store.service';

@Component({
  selector: 'app-store-item',
  templateUrl: './store-item.component.html',
  styleUrls: ['./store-item.component.css'],
})
export class StoreItemComponent implements OnInit {
  constructor(public storeService: StoreService) {}

  ngOnInit(): void {}

  // * Bind the coffee and id
  @Input('coffee') coffee: Coffee;
}
