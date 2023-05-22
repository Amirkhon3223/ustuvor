import {Component} from '@angular/core';
import {OrderDetailsService} from "../../services/order-details.service";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  constructor(
    private services: OrderDetailsService,
  ) {
  }

  furniture: any;

  ngOnInit(): void {
    this.furniture = this.services.furnitureDetails;
  }

}
