import { Router } from "express"

import { ensureAdmin, ensureAuthenticated } from "./middlewares"

import {
  UserCreateController,
  UserListController,
  TagListController,
  TagCreateController,
  AutenticateUserController,
  ComplimentCreateController,
  ComplimentListUserSendController,
  ComplimentListUserReceiveController
} from "./controllers"

const router = Router()

router.post("/users", new UserCreateController().handle)
router.get("/users", ensureAuthenticated, new UserListController().handle)
router.get("/users/compliments/send", ensureAuthenticated, new ComplimentListUserSendController().handle)
router.get("/users/compliments/receive", ensureAuthenticated, new ComplimentListUserReceiveController().handle); //

router.post("/tags", ensureAuthenticated, ensureAdmin, new TagCreateController().handle)
router.get("/tags", ensureAuthenticated, new TagListController().handle)

router.post("/auth/login", new AutenticateUserController().handle)

router.post("/compliments", ensureAuthenticated, new ComplimentCreateController().handle)

export { router }