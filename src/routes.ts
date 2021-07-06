import { Router } from 'express'

import { ensureAdmin, ensureAuthenticated } from './middlewares'
import { body } from 'express-validator'

import {
  UserCreateController,
  UserListController,
  TagListController,
  TagCreateController,
  AutenticateUserController,
  ComplimentCreateController,
  ComplimentListUserSendController,
  ComplimentListUserReceiveController
} from './controllers'

const router = Router()

router.post(
  '/users',
  body('name').notEmpty().withMessage('O campo nome é obrigatorio').isLength({ min: 2, max: 255 }).withMessage('Informe um nome com tamanho entre 2 e 255 caracteres'),
  body('email').isEmail().withMessage('O email informado nãa é um email válido').notEmpty().withMessage('O Campo email é obrigatorio!'),
  body('password').notEmpty().withMessage('O Campo password é obrigatorio!').isLength({ min: 6, max: 12 }).withMessage('Informe uma senha com tamanho entre 6 e 12 caracteres'),
  new UserCreateController().handle)
router.get('/users', ensureAuthenticated, new UserListController().handle)
router.get('/users/compliments/send', ensureAuthenticated, new ComplimentListUserSendController().handle)
router.get('/users/compliments/receive', ensureAuthenticated, new ComplimentListUserReceiveController().handle); //

router.post(
  '/tags',
  body('name').notEmpty().withMessage('O campo nome é obrigatorio').isLength({ min: 2, max: 50 }).withMessage('Informe um nome com tamanho entre 2 e 50 caracteres'),
  ensureAuthenticated, ensureAdmin, new TagCreateController().handle)
router.get('/tags', ensureAuthenticated, new TagListController().handle)

router.post(
  '/auth/login',
  body('email').isEmail().withMessage('O email informado nãa é um email válido').notEmpty().withMessage('O Campo email é obrigatorio!'),
  body('password').notEmpty().withMessage('O Campo password é obrigatorio!'),
  new AutenticateUserController().handle)

router.post(
  '/compliments',
  body('message').notEmpty().withMessage('O campo mensagem é obrigatorio').isLength({ min: 2, max: 255 }).withMessage('Informe uma mensagem com tamanho entre 5 e 255 caracteres'),
  body('tagId').notEmpty().withMessage('O campo tagId é obrigatorio').isUUID(4).withMessage('O id informado não é um id válido'),
  body('userReceiverId').notEmpty().withMessage('O campo userReceiverId é obrigatorio').isUUID(4).withMessage('O id informado não é um id válido'),
  ensureAuthenticated, new ComplimentCreateController().handle)

export { router }