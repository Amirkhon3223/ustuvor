import {Component, OnInit} from '@angular/core';
import {OrderDetailsService} from "../../services/order-details.service";
import {formatCurrency} from "@angular/common";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']

})
export class HomeComponent implements OnInit {

  constructor(
    private service: OrderDetailsService
  ) {}

  furniture: any;
  carouselData: any;

  ngOnInit(): void {
    this.furniture = this.service.furnitureDetails;
    this.carouselData = this.service.carouselSlide;
  }

  protected readonly formatCurrency = formatCurrency;


}
