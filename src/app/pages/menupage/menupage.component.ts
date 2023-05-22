import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {OrderDetailsService} from "../../services/order-details.service";


@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.css']
})
export class MenupageComponent implements OnInit {
  menuId: any;
  menuData: any;
  furniture: any;

  constructor(
    private route: ActivatedRoute,
    private service: OrderDetailsService
  ) {
  }

  ngOnInit() {
    this.furniture = this.service.furnitureDetails;
    this.route.paramMap.subscribe(params => {
      this.menuId = params.get('id');
      this.updateData(); // Вызываем функцию обновления данных при изменении параметра 'id'
    });
  }

  updateData() {
    if (this.menuId) {
      this.menuData = this.service.furnitureDetails.filter(value => value.id == this.menuId);
    }
  }
}
