import { Request, Response } from "express"
import { AuthenticateUserService } from "../services/AuthenticateUserService"

class AutenticateUserController {
  async handle(req: Request, res: Response) {
    const { email, password } = req.body

    const authenticateUserService = new AuthenticateUserService()

    const token = await authenticateUserService.execute({ email, password })
  
    return res.json({
      token: token
    })
  }
}

export { AutenticateUserController }