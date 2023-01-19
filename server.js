const express = require('express')
const dotenv = require('dotenv')

dotenv.config({ path: './.env' })

const errorHandler = require('./src/middleware/error')
const articleRouter = require('./src/routers/articles')
const MongoClient = require('./src/database/MongoClient')


MongoClient.init()
const app = express()

app.use(express.json())
app.use(errorHandler)

const PORT = process.env.PORT || 8000

app.use('/api/article', articleRouter)

const server = app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
);
