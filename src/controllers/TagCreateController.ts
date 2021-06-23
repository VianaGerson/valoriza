import { Request, Response } from "express"
import { TagCreateService } from "../services/TagCreateService"

class TagCreateController {
  async handle(req: Request, res: Response) {
    const { name } = req.body

    const tagCreateService = new TagCreateService()

    const tag = await tagCreateService.execute({ name })
  
    return res.json(tag)
  }
}

export { TagCreateController }