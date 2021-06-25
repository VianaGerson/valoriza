import { Request, Response, NextFunction } from "express"
import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../repositories/UsersRepositories"

export async function ensureAdmin(
  req: Request,
  res: Response,
  next: NextFunction
) {

  const { userId } = req

  const usersRepository = getCustomRepository(UsersRepositories)

  const { isAdmin } = await usersRepository.findOne(userId)

  if (isAdmin) {
    return next()
  }

  return res.status(403).json({
    error: "Unauthorized",
    message: "Ops :( Usuário não autorizado!"
  })
}