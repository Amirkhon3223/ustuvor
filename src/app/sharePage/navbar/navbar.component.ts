import {Component, HostListener} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [
    trigger('menuAnimation', [
      state('true', style({
        transform: 'translateX(0)'
      })),
      state('false', style({
        transform: 'translateX(100%)'
      })),
      transition('false <=> true', animate('300ms ease-in-out'))
    ])
  ]
})
export class NavbarComponent {
  scrolled: boolean= false;
  lastScrollPosition = 0;
  isMenuOpen: boolean = false;


  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScrollPosition = window.pageYOffset;
    this.scrolled = currentScrollPosition > this.lastScrollPosition;
    this.lastScrollPosition = currentScrollPosition;
  }

}
