import { Router } from "express"
import { ensureAdmin } from "./middlewares/ensureAdmin"
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated"
import { UserCreateController } from "./controllers/UserCreateController"
import { TagCreateController } from "./controllers/TagCreateController"
import { TagListController } from "./controllers/TagListController"
import { AutenticateUserController } from "./controllers/AutenticateUserController"
import { ComplimentCreateController } from "./controllers/ComplimentCreateController"
import { ComplimentListUserSendController } from "./controllers/ComplimentListUserSendController"
import { ComplimentListUserReceiveController } from "./controllers/ComplimentListUserReceiveController"
import { UserListController } from "./controllers/UserListController"

const router = Router()

const userCreateController = new UserCreateController()
const userListController = new UserListController()
const tagCreateController = new TagCreateController()
const tagListController = new TagListController()
const authenticateUserController = new AutenticateUserController()
const complimentCreateController = new ComplimentCreateController()
const complimentListUserSendController = new ComplimentListUserSendController()
const complimentListUserReceiveController = new ComplimentListUserReceiveController()

router.post("/users", userCreateController.handle)
router.get("/users", ensureAuthenticated, userListController.handle)
router.get("/users/compliments/send", ensureAuthenticated, complimentListUserSendController.handle)
router.get("/users/compliments/receive", ensureAuthenticated, complimentListUserReceiveController.handle); //

router.post("/tags", ensureAuthenticated, ensureAdmin, tagCreateController.handle)
router.get("/tags", ensureAuthenticated, tagListController.handle)

router.post("/auth/login", authenticateUserController.handle)

router.post("/compliments", ensureAuthenticated, complimentCreateController.handle)

export { router }