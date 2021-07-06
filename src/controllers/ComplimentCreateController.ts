import { Request, Response } from "express"
import { validationResult } from 'express-validator'
import { ComplimentCreateService } from "../services/ComplimentCreateService"

class ComplimentCreateController {
  async handle(req: Request, res: Response) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { tagId, userReceiverId, message } = req.body
    const { userId } = req

    const complimentCreateService = new ComplimentCreateService()

    const compliment = await complimentCreateService.execute({ tagId, userSenderId: userId, userReceiverId, message })
  
    return res.json(compliment)
  }
}

export { ComplimentCreateController }