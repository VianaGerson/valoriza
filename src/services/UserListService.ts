import { UsersRepositories } from "../repositories/UsersRepositories"
import { getCustomRepository } from "typeorm"
import { classToPlain } from "class-transformer"

class UserListService {
  
  async execute() {
    const usersRepository = getCustomRepository(UsersRepositories)

    const users = await usersRepository.find()

    return classToPlain(users)
  }
}

export { UserListService }