import { Request, Response, NextFunction } from "express"
import { verify } from "jsonwebtoken"

interface IPayload {
  sub: string
}

export function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authToken = req.headers.authorization

  if (!authToken) {
    return res.status(401).json({
      message: "Não autenticado"
    })
  }

  const [, token] = authToken.split(" ")

  try {
    const { sub } = verify(token ,"08d2b6928d50de967f1d250651a61f0d") as IPayload

    req.userId = sub

    return next()
  } catch (error) {
    return res.status(401).end()
  }
}