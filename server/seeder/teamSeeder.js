const team = require('../models/team')
const dotenv = require('dotenv')

dotenv.config()

const data = [
  {
    name: 'Павел Матросов',
    job: 'Основатель и руководитель «MATROSOV ARCHITECTS»',
    image: './teams/1.jpg',
    alias: 'pavel-matrosov',
    sort: 0,
    head: {
      title: 'Павел Матросов',
      description: 'Павел Матросов',
      image: './teams/1.jpg',
      keywords: 'Павел Матросов'
    },
    content: {
      image: '/teams/matrosov.jpg',
      text:
        '<ul><li>Член Севастопольского Союза Архитекторов Украины с 2009 по 2014 г.</li><li>Член Союза Архитекторов Севастополя с 2014 г.</li></ul>',
      works: [
        {
          year: '2008-2009',
          list: [
            'Окончил градостроительный факультет Харьковской национальной академии городскогохозяйства.',
            'Архитектор в ООО «Институт Харьковпроект», г. Харьков.',
            'Архитектор в ООО «Стройпроект», г. Севастополь.'
          ]
        },
        {
          year: '2009 - 2013',
          list: [
            'Главный архитектор проектов в ООО «Стройпроект», г. Севастополь.',
            'Прошел профессиональную аттестацию архитекторов, получил сертификат по специализации «Архитектурное объемное проектирование».',
            'Частная практика, руководитель собственного архитектурного бюро.'
          ]
        },
        {
          year: '2014',
          list: [
            'Повышение квалификации по курсу «Проектирование зданий и сооружений 1 и 2 уровня ответственности».'
          ]
        },
        {
          year: '2017',
          list: [
            'Включен в Национальный реестр специалистов в области инженерных изысканий иархитектурно-строительного проектирования.'
          ]
        }
      ]
    }
  },
  {
    name: 'Яна Матросова',
    image: './teams/2.jpg',
    job: 'Архитектор',
    alias: 'yana-matrosova',
    sort: 1,
    head: {
      title: 'Яна Матросова',
      description: 'Яна Матросова',
      image: './teams/2.jpg',
      keywords: 'Яна Матросова'
    }
  }
]

module.exports = async () => {
  try {
    if (process.env.NODE_ENV !== 'production') {
      await team.deleteMany()
    }
    const count = await team.countDocuments()
    if (!count) {
      await team.insertMany(data)
    }
  } catch (err) {
    console.log(err)
  }
}
