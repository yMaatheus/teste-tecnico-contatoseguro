import { Router } from 'express';
import { UserService } from '../services/user.service';
import { createUserMiddleware } from '../middlewares';
import { Controller } from '../controllers/controller';
import User from '../database/models/user';

const userService = new UserService(User);
const userController = new Controller(userService);

const router = Router();

router.route('/')
  .post(createUserMiddleware, userController.create)
  .get(userController.getAll)

router.route('/:id')
  .get(userController.getById)
  .put(userController.updateById)
  .delete(userController.deleteById);

export default router;