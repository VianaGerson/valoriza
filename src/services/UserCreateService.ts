import { UsersRepositories } from "../repositories/UsersRepositories"
import { getCustomRepository } from "typeorm"
import { hash } from "bcryptjs"

interface IUserRequest {
  name: string
  email: string
  password: string
  isAdmin?: boolean
}

class UserCreateService {
  
  async execute({ name, email, password, isAdmin } : IUserRequest) {
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

    const passwordhash = await hash(password, 8)

    const user = usersRepository.create({
      name,
      email,
      password: passwordhash,
      isAdmin
    })

    await usersRepository.save(user)

    return user
  }
}

export { UserCreateService }