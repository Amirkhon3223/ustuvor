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
      slideName: "Далери Устувор Мебель",
      slideDescription: "Камтар дарбораи устуорча навистан даркор, и что Далер рукожопча",
      slideImg: "../../../assets/images/bannerako.png",
      orderThis: "Хар!",
      textColor: 'white',
    },
    {
      id: 2,
      slideName: "Далери кашкар Китчен",
      slideDescription: "Камтар дарбораи Китчен навистан даркор, и что ин ганда зур НЕ, и что Далер чмо",
      slideImg: "../../../assets/images/bannerako2.jpg",
      orderThis: "Хар!",
      textColor: 'white',
      objectPosition: 'center',
      backgroundColor: 'rgba(0,0,0,0.4)'
    },
    {
      id: 3,
      slideName: "Дванча, эси усуча короче",
      slideDescription: "Камтар дарбораи Диванча навистан даркор, и что ин ганда зур НЕ, сали",
      slideImg: "../../../assets/images/bannerako3.png",
      orderThis: "Хар!",
      textColor: 'black',
    }
  ]

}
