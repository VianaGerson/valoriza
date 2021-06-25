import { Request, Response } from "express"
import { UserListService } from "../services/UserListService"

class UserListController {
  async handle(req: Request, res: Response) {
    const usersService = new UserListService()

    const users= await usersService.execute()
  
    return res.json(users)
  }
}

export { UserListController }