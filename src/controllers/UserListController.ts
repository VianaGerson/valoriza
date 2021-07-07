import { Request, Response } from "express"
import { UserListService } from "../services/UserListService"

/**
 * @swagger
 * /users:
 *  get:
 *     security:
 *      - bearerAuth: []
 *     tags:
 *      - Users
 *     description: Lista de usuários
 *     summary: Lista de usuários
 *     responses:
 *        '200':
 *         description: Lista de usuários
 */
class UserListController {
  async handle(req: Request, res: Response) {
    const usersService = new UserListService()

    const users= await usersService.execute()
  
    return res.json(users)
  }
}

export { UserListController }