import { Request, Response } from "express"
import { ComplimentCreateService } from "../services/ComplimentCreateService"

class ComplimentCreateController {
  async handle(req: Request, res: Response) {
    const { tagId, userSenderId, userReceiverId, message } = req.body

    const complimentCreateService = new ComplimentCreateService()

    const compliment = await complimentCreateService.execute({ tagId, userSenderId, userReceiverId, message })
  
    return res.json(compliment)
  }
}

export { ComplimentCreateController }