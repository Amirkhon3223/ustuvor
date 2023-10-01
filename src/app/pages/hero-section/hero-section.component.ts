import {Component, OnInit} from '@angular/core';
import {OrderDetailsService} from "../../services/order-details.service";
import {LinksService, Social} from "../../services/links.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css']
})
export class HeroSectionComponent  implements OnInit{
  heroSectionFurniture: any;
  socialLinks!: Observable<Social[]>
  constructor(
    private heroService: OrderDetailsService,
    private linkService: LinksService,
  ) { }

  ngOnInit(): void {
    this.heroSectionFurniture = this.heroService.homePageFurniture;
    this.socialLinks = this.linkService.getSocialLinks();
  }

}
