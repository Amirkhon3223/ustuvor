import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {OrderDetailsService} from "../../services/order-details.service";
import {Observable} from "rxjs";
import {LinksService, Social} from "../../services/links.service";

@Component({
  selector: 'app-detail-from-home',
  templateUrl: './detail-from-home.component.html',
  styleUrls: ['./detail-from-home.component.css']
})
export class DetailFromHomeComponent {
  detailId: any;
  detailData: any;
  detail: any;
  links!: Observable<Social[]>
  constructor(
    private route: ActivatedRoute,
    private service: OrderDetailsService,
    private link: LinksService
  ) { }

  ngOnInit() {
    this.links = this.link.getSocialLinks();
    this.detail = this.service.homePageFurniture;
    this.route.paramMap.subscribe(params => {
      this.detailId = params.get('id');
      this.updateData();
    });
  }

  updateData() {
    if (this.detailId) {
      this.detailData = this.service.homePageFurniture.find(item => item.id == this.detailId);
    }
  }
}
