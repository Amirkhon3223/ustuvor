import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() {
  }

  furnitureDetails = [
    {
      id: 1,
      furnituresName: "Стулчахо",
      furnituresDetail: "Далер кашкар месозад, удобный зур Далер кашкар месозад, удобный зур Далер кашкар месозад, удобный зур Далер кашкар месозад, удобный зур Далер кашкар месозад, удобный зур Далер кашкар месозад, удобный зур",
      furnituresPrice: 200,
      furnituresInStock: "Available: InStock",
      furnituresImg: "../../../assets/images/Product.png"
    },
    {
      id: 2,
      furnituresName: "Стулчахо",
      furnituresDetail: "Далер кашкар месозад, удобный зур Далер кашкар месозад, удобный зур Далер кашкар месозад, " +
        "удобный зур Далер кашкар месозад, удобный зур Далер кашкар месозад," +
        "удобный зур Далер кашкар месозад, удобный зур" +
        "LoremLorem ipsum dolor sit amet, consectetur adipisicing elit. At ipsa obcaecati placeat voluptates? Autem culpa distinctio expedita,Lorem ipsum dolor sit amet, consectetur adipisicing elit. At ipsa obcaecati placeat voluptates? Autem culpa distinctio expedita, ipsum iste molestiae nobis officiis quod reiciendis sit! Accusantium eaque ipsam odio officia? ipsum iste molestiae nobis officiis quod reiciendis sit! Accusantium eaque ipsam odio officia?",
      furnituresPrice: 200,
      furnituresInStock: "Available: InStock",
      furnituresImg: "../../../assets/images/Product1.png"
    },
    {
      id: 3,
      furnituresName: "Стулчахо",
      furnituresDetail: "Далер кашкар месозад, удобный зур Далер кашкар месозад, удобный зур Далер кашкар месозад, удобный зур Далер кашкар месозад, удобный зур Далер кашкар месозад, удобный зур Далер кашкар месозад, удобный зур",
      furnituresPrice: 200,
      furnituresInStock: "Available: InStock",
      furnituresImg: "../../../assets/images/Product12.png"
    },
    {
      id: 4,
      furnituresName: "Стулчахо",
      furnituresDetail: "Далер кашкар месозад, удобный зур Далер кашкар месозад, удобный зур Далер кашкар месозад, удобный зур",
      furnituresPrice: 200,
      furnituresInStock: "Available: InStock",
      furnituresImg: "../../../assets/images/Product3.png"
    },
    {
      id: 5,
      furnituresName: "Стулчахо",
      furnituresDetail: "Далер кашкар месозад, удобный зур",
      furnituresPrice: 200,
      furnituresInStock: "Available: InStock",
      furnituresImg: "../../../assets/images/Product4.png"
    },
    {
      id: 6,
      furnituresName: "Стулчахо",
      furnituresDetail: "Далер кашкар месозад, удобный зур",
      furnituresPrice: 200,
      furnituresInStock: "Available: InStock",
      furnituresImg: "../../../assets/images/Product5.png"
    },
    {
      id: 7,
      furnituresName: "Стулчахо",
      furnituresDetail: "Далер кашкар месозад, удобный зур",
      furnituresPrice: 200,
      furnituresInStock: "Available: InStock",
      furnituresImg: "../../../assets/images/Product6.png"
    },
    {
      id: 8,
      furnituresName: "Стулчахо",
      furnituresDetail: "Далер кашкар месозад, удобный зур",
      furnituresPrice: 200,
      furnituresInStock: "Available: InStock",
      furnituresImg: "../../../assets/images/Product7.png"
    },
    {
      id: 9,
      furnituresName: "Стулчахо",
      furnituresDetail: "Далер кашкар месозад, удобный зур",
      furnituresPrice: 200,
      furnituresInStock: "Available: InStock",
      furnituresImg: "../../../assets/images/Product8.png"
    },
    {
      id: 10,
      furnituresName: "Стулчахо",
      furnituresDetail: "Далер кашкар месозад, удобный зур",
      furnituresPrice: 200,
      furnituresInStock: "Available: InStock",
      furnituresImg: "../../../assets/images/Product9.png"
    },
    {
      id: 11,
      furnituresName: "Стулчахо",
      furnituresDetail: "Далер кашкар месозад, удобный зур",
      furnituresPrice: 200,
      furnituresInStock: "Available: InStock",
      furnituresImg: "../../../assets/images/Product10.png"
    },
    {
      id: 12,
      furnituresName: "Стулчахо",
      furnituresDetail: "Далер кашкар месозад, удобный зур",
      furnituresPrice: 200,
      furnituresInStock: "Available: InStock",
      furnituresImg: "../../../assets/images/Product11.png"
    },
  ]


  carouselSlide = [
    {
      id: 1,
      slideName: "Устувор - качественная мебель для вашего дома",
      slideDescription: "Ваш надежный выбор для создания стильной и удобной мебели",
      slideImg: "../../../assets/images/bannerako.png",
      orderThis: "Хар!",
      textColor: 'white',
    },
    {
      id: 2,
      slideName: "Идеальная кухня для вашего пространства",
      slideDescription: "Кухни, сочетающие функциональность, стиль и качество. Воплощаем вашу мечту в реальность",
      slideImg: "../../../assets/images/bannerako2.jpg",
      orderThis: "Хар!",
      textColor: 'white',
      objectPosition: 'center',
      backgroundColor: 'rgba(0,0,0,0.4)'
    },
    {
      id: 3,
      slideName: "Создайте идеальную атмосферу с нашими диванами",
      slideDescription: "Наши диваны — это слияние комфорта, элегантности и надежности. " +
        "Позвольте себе насладиться комфортом и качеством",
      slideImg: "../../../assets/images/bannerako3.png",
      orderThis: "Хар!",
      textColor: 'black',
    }
  ]

}
