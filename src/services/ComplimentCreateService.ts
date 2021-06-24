import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories"
import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../repositories/UsersRepositories"

interface IComplimentRequest {
  tagId: string
  userSenderId: string
  userReceiverId: string
  message: string
}

class ComplimentCreateService {
  
  async execute({ tagId, userSenderId, userReceiverId, message } : IComplimentRequest) {
    const complimentsRepository = getCustomRepository(ComplimentsRepositories)
    const usersRepository = getCustomRepository(UsersRepositories)

    if ( userSenderId === userReceiverId) {
      throw new Error("Não é possivel enviar um elogio para si mesmo")
    }

    const userReceiverExists = await usersRepository.findOne(userReceiverId)

    if (!userReceiverExists) {
      throw new Error("O usuário de destino do elogio não existe!")
    }

    const compliment = complimentsRepository.create({
      tagId,
      userReceiverId,
      userSenderId,
      message
    })

    await complimentsRepository.save(compliment)

    return compliment
  }
}

export { ComplimentCreateService }