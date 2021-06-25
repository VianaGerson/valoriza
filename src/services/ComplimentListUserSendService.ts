import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories"
import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../repositories/UsersRepositories"

interface IComplimentRequest {
  tagId: string
  userSenderId: string
  userReceiverId: string
  message: string
}

class ComplimentListUserSendService {
  
  async execute(userId: string) {
    const complimentsRepository = getCustomRepository(ComplimentsRepositories)

    const compliments = await complimentsRepository.find({
      where: {
        userSenderId: userId
      },
      relations: ["userSender", "userReceiver", "tag"]
    })

    return compliments
  }
}

export { ComplimentListUserSendService }