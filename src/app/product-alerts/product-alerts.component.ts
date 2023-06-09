import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.scss'],
})
export class ProductAlertsComponent {
  // @Input() product!: Product; // What is !: search in TS
  @Input() product: Product | undefined;
  @Output() notify = new EventEmitter();
}
