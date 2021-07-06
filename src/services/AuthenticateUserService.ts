import { UsersRepositories } from "../repositories/UsersRepositories"
import { getCustomRepository } from "typeorm"
import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken"

interface IAuthenticateRequest {
  email: string
  password: string
}

class AuthenticateUserService {

  async execute({ email, password }: IAuthenticateRequest) {
    const usersRepository = getCustomRepository(UsersRepositories)

    const userDB = await usersRepository.findOne({
      email
    })

    if (!userDB) {
      throw new Error("Ops :( Email ou senha incorretos")
    }

    const passwordMatch = await compare(password, userDB.password)

    if (!passwordMatch) {
      throw new Error("Ops :( Email ou senha incorretos")
    }

    const token = sign({
      email: userDB.email,
    }, process.env.JWT_SECRET, {
      subject: userDB.id,
      expiresIn: "1d"
    })

    return token
  }
}

export { AuthenticateUserService }