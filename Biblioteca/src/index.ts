import express from 'express'
import { connectDatabase } from './config/database'
import { livroRoutes } from './routes/livroRoutes'

const app = express()

app.use(express.json())

connectDatabase()

 app.use('/livros', livroRoutes)

app.listen(3333, () => {
  console.log('🚀 Server running on port 3333')
})