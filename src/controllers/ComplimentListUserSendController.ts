import { Request, Response } from "express"
import { ComplimentListUserSendService } from "../services/ComplimentListUserSendService"

class ComplimentListUserSendController {
  async handle(req: Request, res: Response) {
    const { userId } = req

    const complimentsListuserSendService = new ComplimentListUserSendService()

    const compliments= await complimentsListuserSendService.execute(userId)
  
    return res.json(compliments)
  }
}

export { ComplimentListUserSendController }