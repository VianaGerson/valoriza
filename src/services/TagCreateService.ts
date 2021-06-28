import { TagsRepositories } from "../repositories/TagsRepositories"
import { getCustomRepository } from "typeorm"
// import * as Validator from 'validatorjs'

interface ITagRequest {
  name: string
}

let tagCreateRules = {
  name: "required|string|min:2|max:255",
}

class TagCreateService {
  
  async execute({ name } : ITagRequest) {

    let data = {
      name: 'John',
      email: 'johndoe@gmail.com',
      age: 28
    };
    
    let rules = {
      name: 'required',
      email: 'required|email',
      age: 'min:18'
    };
    
    // let validation = Validator(data, rules);

    // console.log(validation.passes(), validation.fails());
    

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