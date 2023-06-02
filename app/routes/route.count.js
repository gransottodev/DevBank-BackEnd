import { Router } from "express";
import { verifyJWT } from "../middlewares/token.js";
import controllerCount from '../controllers/controller.count.js'

const countRouter = Router()

countRouter.get('/v1/mycounters', verifyJWT, controllerCount.GetCounters)
countRouter.post('/v1/counter', verifyJWT, controllerCount.CreateCount)
countRouter.get('/v1/counter/:id', verifyJWT, controllerCount.GetCounter)
countRouter.put('/v1/counter', verifyJWT, controllerCount.InsertCount)
countRouter.delete('/v1/counter', verifyJWT, controllerCount.DeleteCounter)

export default countRouter;