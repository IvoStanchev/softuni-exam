import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Coffee } from '../../coffee.model';
import { StoreService } from '../../store.service';

@Component({
  selector: 'app-store-item',
  templateUrl: './store-item.component.html',
  styleUrls: ['./store-item.component.css'],
})
export class StoreItemComponent implements OnInit {
  constructor(
    public storeService: StoreService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {}

  //* Vars
  id: number;
  //coffee: Coffee;

  // * Bind the coffee and id
  @Input('coffee') coffee: Coffee;
  @Input() index: number;

  //* Delete
  onDeleteCoffee() {
    this.storeService.deleteCoffee(this.index);
    console.log(this.index);
  }

  onDetails() {
    this.storeService.detailMode = true;
  }

  onEdit() {
    this.storeService.editMode = true;
  }
}
