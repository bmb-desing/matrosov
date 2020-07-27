const page = require('../models/pages')
const dotenv = require('dotenv')

dotenv.config()


const data = [
  {
    alias: 'about',
    title: 'Обо мне',
    description: 'Обо мне',
    image: 'about.jpg',
    keywords: 'Обо мне',
    content: {
      firstScreen: {
        title: 'О нас',
        text: '«Если в правильно спроектированном и правильно построенном доме учтено все, что дают нам солнце и природа, он обязательно будет только хорошим и светлым, даже если мы выбрали не самый дорогой вариант.»',
        target: '- Изд. Йожеф Косо',
        background: './about.jpg'
      },
      secondScreen: {
        title: 'Ведущее архитектурное дизайн-бюро Крыма',
        text: 'Главным принципом работы «MATROSOV ARCHITECTS» является создание качественной среды, архитектура которой является актуальной в любом времени, неустаревающей через десятки лет, всегда ценной.'
      },
      thirdScreen: {
        title: 'Услуги',
        subtitle: 'Охватываем три направлениях:',
        items: [
          'дизайн интерьеров',
          'архитектура',
          'предметный дизайн'
        ],
        counter: [
          {
            count: '10',
            text: 'лет на рынке'
          },
          {
            count: '4',
            text: 'сотрудника'
          },
          {
            count: '25',
            text: 'наград'
          },
          {
            count: '300+',
            text: 'реализованных проектов'
          }
        ]
      },
      fourthScreen: {
        title: 'Награды'
      },
      fivethScreen: {
        title: 'Наша философия',
        text: '<p class="about__normal">В отличие от многих проектных организаций, в наших работах мы применяем комплексный архитектурный подход, начиная с ландшафта, формируя соответствующее среде здание, его интерьер или предмет в его интерьере. Мы стремимся создать среду в виде объемно-пространственной композиции, которую можно наполнить деталями и необходимыми предметами интерьера, при этом суть самого пространства останется неизменной.</p> <p class="about__normal">Мы уважительно относимся к природе и создаем соответствующую среду, используя соответствующие этой среде натуральные материалы и цвета: дерево, стекло, бетон, металл, камень, лен, глину и т.д. Обрабатываем материалы сохраняя их фактуры, чтобы можно было не только зрительно, но и тактильно, на ощупь ощутить тепло деревянной поверхности или легкую прохладу камня. Мы создаем пространство, которое будет жить вне времени.</p>'
      },
      sixthScreen: {
        text: '«Качественная архитектура — это внимание каждой детали, это удобство и комфорт для жизни, работы и отдыха.»',
        title: 'Павел Матросов',
        desc: 'Основатель и руководитель «MATROSOV ARCHITECTS».',
        image: './about.png'
      },
      seventhScreen: {
        title: 'Клиенты',
        text: 'Все наши клиенты разные, они живут в своих мирах, но, как и мы, понимающие важность эстетики и ценность природы. Все заняты в разных сферах, но все как один — хотят создавать, развивать и видеть красоту вокруг себя. Своим желанием менять и творить они вдохновляют нас, а мы стараемся вдохновлять их, и в итоге получается именно то, чего хочет и заказчик, и нам. Если Вам близка наша философия - будем рады с вами поработать.'
      }
    }
  },
  {
    alias: 'index',
    title: 'Главная страница',
    description: 'Главная страница',
    image: './slider/first.jpg',
    keywords: 'Главная страница',
    content: [
      {
        title: 'Новый проект в Севастополе',
        image: './slider/first.jpg',
        link: {link: '/123', text: 'Подробнее о проекте'}
      },
      {
        title: 'Проект «Пенза»',
        image: './slider/second.jpg',
        link: {link: '/123', text: 'Подробнее о проекте'}
      },
      {
        title: 'Дом Калиниченко',
        image: './slider/third.jpg',
        link: {link: '/123', text: 'Подробнее о проекте'}
      },
    ]
  },
  {
    alias: 'team',
    title: 'Главная страница',
    description: 'Главная страница',
    image: './slider/first.jpg',
    keywords: 'Главная страница',
   
  }
]

module.exports = async () => {
  try {
    if(process.env.NODE_ENV !== 'production') {
      await page.deleteMany()
    }
    const count = await page.countDocuments()
    if(!count) {
      await page.insertMany(data)
    }
  }
  catch(err) {
    console.log(err)
  }
}