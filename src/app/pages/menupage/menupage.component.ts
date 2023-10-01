import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {OrderDetailsService} from "../../services/order-details.service";
import {Observable} from "rxjs";
import {LinksService, Social} from "../../services/links.service";


@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.css']
})
export class MenupageComponent implements OnInit {
  socialLinks!: Observable<Social[]>;
  menuId: any;
  menuData: any;
  furniture: any;
  constructor(
    private route: ActivatedRoute,
    private service: OrderDetailsService,
    private linkService: LinksService

  ) { }

  ngOnInit() {
    this.socialLinks = this.linkService.getSocialLinks()
    this.furniture = this.service.furnitureDetails;
    this.route.paramMap.subscribe(params => {
      this.menuId = params.get('id');
      this.updateData();
    });
  }

  updateData() {
    if (this.menuId) {
      this.menuData = this.service.furnitureDetails.find(item => item.id == this.menuId);
    }
  }
}
