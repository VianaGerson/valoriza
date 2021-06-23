import { Router } from "express"
import { UserCreateController } from "./controllers/UserCreateController"

const router = Router()

const userCreateController = new UserCreateController()

router.post("/users", userCreateController.handle)

export { router }