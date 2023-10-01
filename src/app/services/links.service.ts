import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";


export interface Social {
  id: number;
  alt: string;
  name: string;
  icon: string;
  link: string;
}

@Injectable({
  providedIn: 'root'
})

export class LinksService {

  constructor() {
  }

  private socialLinks: Social[] =
    [
      {
        id: 1,
        name: 'Instagram',
        icon: '/assets/icons/instagram.svg',
        alt: 'Ustuvor Instagram мебель в Таджикистане',
        link: 'https://www.instagram.com/ustuvor_mebel/'
      },
      {
        id: 2,
        name: 'Telegram',
        icon: '/assets/icons/telegram.svg',
        alt: 'Ustuvor Telegram мебель в Таджикистане',
        link: 'https://t.me/daler0002'
      },
      {
        id: 3,
        name: 'Facebook',
        icon: '/assets/icons/facebook.svg',
        alt: 'Ustuvor Facebook мебель в Таджикистане',
        link: 'https://www.facebook.com/profile.php?id=100039272946541'
      }
    ]
  getSocialLinks(): Observable<Social[]> {
    return of(this.socialLinks);
  }

}
