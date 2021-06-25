import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories"
import { getCustomRepository } from "typeorm"

class ComplimentListUserReceiveService {
  
  async execute(userId: string) {
    const complimentsRepository = getCustomRepository(ComplimentsRepositories)

    const compliments = await complimentsRepository.find({
      where: {
        userReceiverId: userId
      },
      relations: ["userSender", "userReceiver", "tag"]
    })

    return compliments
  }
}

export { ComplimentListUserReceiveService }