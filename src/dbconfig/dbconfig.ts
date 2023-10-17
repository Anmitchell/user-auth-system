import mongoose from 'mongoose'
require('dotenv').config()

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URI!)
    const db = mongoose.connection

    db.on('connected', () => {
      console.log('Successfully connected to MongoDB database')
    })

    db.on('error', (err) => {
      console.log(
        'Connection to MongoDB database failed. Please ensure that MongoDB is running' +
          err
      )
      process.exit()
    })
  } catch (error) {
    console.log()
  }
}
