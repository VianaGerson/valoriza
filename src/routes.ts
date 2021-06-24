import { Router } from "express"
import { UserCreateController } from "./controllers/UserCreateController"
import { TagCreateController } from "./controllers/TagCreateController"
import { ensureAdmin } from "./middlewares/ensureAdmin" 
import { AutenticateUserController } from "./controllers/AutenticateUserController"
import { ComplimentCreateController } from "./controllers/ComplimentCreateController"

const router = Router()

const userCreateController = new UserCreateController()
const tagCreateController = new TagCreateController()
const authenticateUserController = new AutenticateUserController()
const complimentCreateController = new ComplimentCreateController()

router.post("/users", userCreateController.handle)

router.post("/tags", ensureAdmin, tagCreateController.handle)

router.post("/auth/login", authenticateUserController.handle)

router.post("/compliments", complimentCreateController.handle)

export { router }