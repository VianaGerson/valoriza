import { Request, Response } from "express"
import { TagListService } from "../services/TagListService"

class TagListController {
  async handle(req: Request, res: Response) {
    const tagsService = new TagListService()

    const tags= await tagsService.execute()
  
    return res.json(tags)
  }
}

export { TagListController }