const client = require('../models/clients')
const dotenv = require('dotenv')

dotenv.config()


const data = [
  {
    name: 'Polyus',
    image: './clients/1.png'
  },
  {
    name: 'Zarubezhneft',
    image: './clients/2.png'
  },
  {
    name: 'BSH',
    image: './clients/3.png'
  },
  {
    name: 'Mitsubishi Motors',
    image: './clients/4.png'
  },
]

module.exports = async () => {
  try {
    if(process.env.NODE_ENV !== 'production') {
      await client.deleteMany()
    }
    const count = await client.countDocuments()
    if(!count) {
      await client.insertMany(data)
    }
  }
  catch(err) {
    console.log(err)
  }
}