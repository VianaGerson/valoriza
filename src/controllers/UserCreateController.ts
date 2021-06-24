import { Request, Response } from "express"
import { UserCreateService } from "../services/UserCreateService"

class UserCreateController {
  async handle(req: Request, res: Response) {
    const { name, email, password, isAdmin } = req.body

    const userCreateService = new UserCreateService()

    const user = await userCreateService.execute({ name, email, password, isAdmin })
  
    return res.json(user)
  }
}

export { UserCreateController }