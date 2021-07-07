import { Request, Response } from "express"
import { TagListService } from "../services/TagListService"

/**
 * @swagger
 * /tags:
 *  get:
 *     security:
 *      - bearerAuth: []
 *     tags:
 *      - Tags
 *     description: Lista de tags
 *     summary: Lista de tags
 *     responses:
 *        '200':
 *         description: Lista de tags
 */
class TagListController {
  async handle(req: Request, res: Response) {
    const tagsService = new TagListService()

    const tags= await tagsService.execute()
  
    return res.json(tags)
  }
}

export { TagListController }