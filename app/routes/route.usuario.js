import { Router } from "express";
import controllerUser from "../controllers/controller.usuario.js";
import validate from '../validation/user.validation.js'
import { verifyJWT } from "../middlewares/token.js";

const userRoutes = Router()

userRoutes.post('/v1/user/register', validate.Register, controllerUser.Register)
userRoutes.post('/v1/user/login', validate.Login, controllerUser.Login)
userRoutes.get('/v1/user', verifyJWT, controllerUser.GetById)

export default userRoutes;
