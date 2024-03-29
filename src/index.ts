import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { connect } from 'mongoose'
import agentsRoutes from './routes/agent_routes'
import departmentsRoutes from './routes/department_routes'
import rolesRoutes from './routes/role_routes'

const app: Express = express()

dotenv.config()

const port = process.env.PORT || 3000
const DB_URI = process.env.MONGODB_URI
const DB_NAME = process.env.DB_NAME

try {
  connect(`${DB_URI}`, { dbName: DB_NAME }, () =>
    console.log('Success connecting to database', DB_NAME)
  )
} catch (error) {
  console.log('Could not connect to database', DB_NAME)
  console.log(error)
}
app.use(cors({
  origin: 'http://localhost:3001'
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/agents', agentsRoutes)
app.use('/departments', departmentsRoutes)
app.use('/roles', rolesRoutes)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello world')
})

app.listen(port, () => {
  console.log('Listening on port : ', port)
})
