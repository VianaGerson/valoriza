import { Request, Response } from "express"
import { validationResult } from "express-validator";
import { UserCreateService } from "../services/UserCreateService"

/**
 * @swagger
 * /users:
 *  post:
 *     security:
 *      - bearerAuth: []
 *     tags:
 *      - Users
 *     description: Adicionar um novo usuário
 *     summary: Adicionar um novo usuário
 *     responses:
 *        '200':
 *         description: Adicionar um novo usuário
 */
class UserCreateController {
  async handle(req: Request, res: Response) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password, isAdmin } = req.body

    const userCreateService = new UserCreateService()

    const user = await userCreateService.execute({ name, email, password, isAdmin })
  
    return res.json(user)
  }
}

export { UserCreateController }