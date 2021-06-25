import { Request, Response } from "express"
import { ComplimentCreateService } from "../services/ComplimentCreateService"

class ComplimentCreateController {
  async handle(req: Request, res: Response) {
    const { tagId, userReceiverId, message } = req.body
    const { userId } = req

    const complimentCreateService = new ComplimentCreateService()

    const compliment = await complimentCreateService.execute({ tagId, userSenderId: userId, userReceiverId, message })
  
    return res.json(compliment)
  }
}

export { ComplimentCreateController }