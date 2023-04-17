import { Router } from 'express';
import UserController from '../controllers/user.controller';
import UserService from '../services/user.service';
import { createUserMiddleware } from '../middlewares';

const userService = new UserService();
const userController = new UserController(userService);

const router = Router();

router.route('/')
  .post(createUserMiddleware, userController.create)
  .get(userController.getAll)

router.route('/:id')
  .put(userController.updateById)
  .delete(userController.deleteById);

export default router;