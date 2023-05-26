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
      furnituresName: "Стол с стулчиками",
      furnituresDetail: "Стол с стулчиками для кухни, минималистичный и комфортный дизайн. Яркий и красивый вид сочетния этих стлуьем с столом, прекрасно подходит для вашей яркой кухней. Место где стоит этот стол и стулья будет выделяться в вашей куханной комнате",
      furnituresPrice: 680,
      furnituresInStock: "Доступно: В наличии",
      furnituresImg: "../../../assets/images/Product.png"
    },
    {
      id: 2,
      furnituresName: "Стул",
      furnituresDetail: "Стул для школьной парты. Идеальная форма и вид делает его не только удобным чтоб сидеть на неём, но и заботится о анатомии. Правильная форма позволяет дольше сидеть и не вредить организму",
      furnituresPrice: 180,
      furnituresInStock: "Доступно: В наличии",
      furnituresImg: "../../../assets/images/Product1.png"
    },
    {
      id: 3,
      furnituresName: "Маленький шкаф",
      furnituresDetail: "Шкафчик не смотря на маленький и скромный вид, имеет хорошую вместительность вещей. Также над ним тоже можно что-нибудь поставить цветы или лампу. Что делает вид блее эстетичным и минималистичным",
      furnituresPrice: 430,
      furnituresInStock: "Доступно: В наличии",
      furnituresImg: "../../../assets/images/Product12.png"
    },
    {
      id: 4,
      furnituresName: "Гостевой стул",
      furnituresDetail: "Гостевой стул, хорошо будет смотреться в гостинной. И на ней можно удобно сидеть и отдыхать. Играть в Play Station например.",
      furnituresPrice: 270,
      furnituresInStock: "Доступно: В наличии",
      furnituresImg: "../../../assets/images/Product3.png"
    },
    {
      id: 5,
      furnituresName: "Кухонная гарнитура",
      furnituresDetail: "Кухонная гарнитура(или Мебель для кухни). Можете сами выбрать материал изготовление, по качеству и виду. Сделаем любые мебели для вашей кухни и по вашему дизайну",
      furnituresPrice: "",
      furnituresInStock: "Доступно: В наличии",
      furnituresImg: "../../../assets/images/Product4.png"
    },
    {
      id: 6,
      furnituresName: "Стул",
      furnituresDetail: "Стул для гостинной или для офисов, также хорошо будет смотреться в переговорных кабинетах." +
        "Удобная и практичная",
      furnituresPrice: 270,
      furnituresInStock: "Доступно: В наличии",
      furnituresImg: "../../../assets/images/Product5.png"
    },
    {
      id: 7,
      furnituresName: "Большая тумбочка",
      furnituresDetail: "Большая тумбочка под большим телевизором. Создает уют и хорошую атмосферу для вашей комнаты",
      furnituresPrice: 200,
      furnituresInStock: "Доступно: В наличии",
      furnituresImg: "../../../assets/images/Product6.png"
    },
    {
      id: 8,
      furnituresName: "Барные стулья",
      furnituresDetail: "Барные стулья для вашей кухни, особо широко распротренно в странах европы, у которых столешнцы высокие ",
      furnituresPrice: 180,
      furnituresInStock: "Доступно: В наличии",
      furnituresImg: "../../../assets/images/Product7.png"
    },
    {
      id: 9,
      furnituresName: "Стул для гостинной",
      furnituresDetail: "Стул для гостинной или для офисов, также хорошо будет смотреться в переговорных кабинетах." +
        "Удобная и практичная",
      furnituresPrice: 270,
      furnituresInStock: "Доступно: В наличии",
      furnituresImg: "../../../assets/images/Product8.png"
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
