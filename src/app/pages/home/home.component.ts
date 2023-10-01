import {Component, OnInit} from '@angular/core';
import {OrderDetailsService} from "../../services/order-details.service";
import {formatCurrency} from "@angular/common";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']

})
export class HomeComponent implements OnInit {

  furnitureDetails: any;

  constructor(
    private service: OrderDetailsService
  ) { }

  ngOnInit(): void {
    this.furnitureDetails = this.service.homePageFurniture;
  }

  protected readonly formatCurrency = formatCurrency;


}
