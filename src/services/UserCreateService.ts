import { UsersRepositories } from "../repositories/UsersRepositories"
import { getCustomRepository } from "typeorm"

interface IUserRequest {
  name: string
  email: string
  isAdmin?: boolean
}

class UserCreateService {
  
  async execute({ name, email, isAdmin } : IUserRequest) {
    const usersRepository = getCustomRepository(UsersRepositories)

    if (!email) {
      throw new Error("O campo email é obrigatorio!")
    }

    const userAlreadyExists = await usersRepository.findOne({
      email
    })

    if (userAlreadyExists) {
      throw new Error("Ops :( Já existe um usuário com este email") 
    }

    const user = usersRepository.create({
      name,
      email,
      isAdmin
    })

    await usersRepository.save(user)

    return user
  }
}

export { UserCreateService }