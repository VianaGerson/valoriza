import { Request, Response } from "express"
import { validationResult } from 'express-validator'
import { AuthenticateUserService } from "../services/AuthenticateUserService"

class AutenticateUserController {
  async handle(req: Request, res: Response) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body

    const authenticateUserService = new AuthenticateUserService()

    const token = await authenticateUserService.execute({ email, password })
  
    return res.json({
      token: token
    })
  }
}

export { AutenticateUserController }