import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { travels } from '../travels';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-travels-details',
  templateUrl: './travels-details.component.html',
  styleUrls: ['./travels-details.component.css']
})
export class TravelsDetailsComponent implements OnInit {
  trip:any;
  constructor(private route: ActivatedRoute, private CS: CartService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      var id: any = params.get('tripId')
      this.trip = travels[id];
    });
  }

  addToCart(trip:any) {
    alert("You added this Trip to Shopping Basket")
    this.CS.addToCart(trip);
  }

}
