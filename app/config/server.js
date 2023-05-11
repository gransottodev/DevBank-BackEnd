import express from 'express'
import cors from 'cors'
import userRoutes from '../routes/route.usuario.js'
import countRouter from '../routes/route.count.js'
const app = express()

app.use(express.json())
app.use(cors())

//Rotas
app.use(userRoutes)
app.use(countRouter)

export default app;