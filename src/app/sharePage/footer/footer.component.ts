import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {LinksService, Social} from "../../services/links.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  socialLinks!: Observable<Social[]>;

  constructor( private linkService: LinksService) { }
  ngOnInit() {
    this.socialLinks = this.linkService.getSocialLinks();
  }
}
