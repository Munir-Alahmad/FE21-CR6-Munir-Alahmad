import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  cart:any;
  constructor(private CS: CartService) { }

  ngOnInit(): void {
    this.cart = this.CS.getItems();
  }

}
