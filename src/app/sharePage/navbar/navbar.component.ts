import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  scrolled = false;
  lastScrollPosition = 0;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScrollPosition = window.pageYOffset;

    if (currentScrollPosition > this.lastScrollPosition) {
      this.scrolled = true;
    } else {
      this.scrolled = false;
    }

    this.lastScrollPosition = currentScrollPosition;
  }
}
