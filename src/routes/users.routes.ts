import { Router } from 'express'
import { loginController, registerController } from '~/controllers/users.controllers'
import { loginValidator, registerValidator } from '~/middlewares/users.middlewares'
import { wrapAsync } from '~/utils/handlers'
const usersRouter = Router()

usersRouter.get('/login', loginValidator, wrapAsync(loginController))

usersRouter.post('/register', registerValidator, wrapAsync(registerController))

export default usersRouter
