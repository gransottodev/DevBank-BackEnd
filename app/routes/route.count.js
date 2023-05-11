import { Router } from "express";
import { verifyJWT } from "../middlewares/token.js";
import controllerCount from '../controllers/controller.count.js'

const countRouter = Router()

countRouter.get('/v1/mycounters/:id', verifyJWT, controllerCount.GetCounters)
countRouter.post('/v1/counter', verifyJWT, controllerCount.CreateCount)
countRouter.put('/v1/counter/:id', verifyJWT, controllerCount.InsertCount)

export default countRouter;