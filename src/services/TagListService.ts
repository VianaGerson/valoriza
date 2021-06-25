import { TagsRepositories } from "../repositories/TagsRepositories"
import { getCustomRepository } from "typeorm"
import { classToPlain } from "class-transformer"

class TagListService {
  
  async execute() {
    const tagsRepository = getCustomRepository(TagsRepositories)

    const tags = await tagsRepository.find()

    return classToPlain(tags)
  }
}

export { TagListService }