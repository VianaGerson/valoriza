import { Router } from "express"
import { UserCreateController } from "./controllers/UserCreateController"
import { TagCreateController } from "./controllers/TagCreateController"
import { ensureAdmin } from "./middlewares/ensureAdmin" 

const router = Router()

const userCreateController = new UserCreateController()
const tagCreateController = new TagCreateController()

router.post("/users", userCreateController.handle)

router.post("/tags", ensureAdmin, tagCreateController.handle)

export { router }