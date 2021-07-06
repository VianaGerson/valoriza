import { Request, Response } from "express"
import { validationResult } from "express-validator";
import { TagCreateService } from "../services/TagCreateService"

class TagCreateController {
  async handle(req: Request, res: Response) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name } = req.body

    const tagCreateService = new TagCreateService()

    const tag = await tagCreateService.execute({ name })
  
    return res.json(tag)
  }
}

export { TagCreateController }