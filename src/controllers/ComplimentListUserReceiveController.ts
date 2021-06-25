import { Request, Response } from "express"
import { ComplimentListUserReceiveService } from "../services/ComplimentListUserReceiveService"

class ComplimentListUserReceiveController {
  async handle(req: Request, res: Response) {
    const { userId } = req

    const complimentsListuserReceiveService = new ComplimentListUserReceiveService()

    const compliments= await complimentsListuserReceiveService.execute(userId)
  
    return res.json(compliments)
  }
}

export { ComplimentListUserReceiveController }