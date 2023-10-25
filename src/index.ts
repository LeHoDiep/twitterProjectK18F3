import express, { NextFunction, Response, Request } from 'express'
import usersRouter from './routes/users.routes'
import databaseService from './services/database.services'
import { defaultErrorHandler } from './middlewares/error.middlewares'
const app = express()
app.use(express.json())
const PORT = 3000
databaseService.connect()
//localhost:3000/
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/users', usersRouter)
//localhost:3000/users/register

app.use(defaultErrorHandler)

app.listen(PORT, () => {
  console.log(`Server đang chạy trên port ${PORT}`)
})
