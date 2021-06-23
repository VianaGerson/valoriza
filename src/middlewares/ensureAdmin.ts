import { Request, Response, NextFunction } from "express"

export function ensureAdmin(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const isAdmin = true

  if (isAdmin) {
    return next()
  }

  return res.status(401).json({
    error: "Unauthorized",
    message: "Ops :( Usuário não autenticado!"
  })
}