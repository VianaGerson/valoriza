import { TagsRepositories } from "../repositories/TagsRepositories"
import { getCustomRepository } from "typeorm"

interface ITagRequest {
  name: string
}

class TagCreateService {
  
  async execute({ name } : ITagRequest) {
    const tagsRepository = getCustomRepository(TagsRepositories)

    if (!name) {
      throw new Error("O campo name é obrigatorio!")
    }

    const tagAlreadyExists = await tagsRepository.findOne({
      name
    })

    if (tagAlreadyExists) {
      throw new Error("Ops :( Já existe uma tag com este nome") 
    }

    const tag = tagsRepository.create({
      name,
    })

    await tagsRepository.save(tag)

    return tag
  }
}

export { TagCreateService }