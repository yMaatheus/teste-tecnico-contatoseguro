import { Router } from 'express';
import { UserService } from '../services/user.service';
import { Controller } from '../controllers/controller';
import User from '../database/models/user';
import { userValidationMiddleware } from '../middlewares';

const userService = new UserService(User);
const userController = new Controller(userService);

const router = Router();

router.route('/')
  .post(userValidationMiddleware, userController.create)
  .get(userController.getAll)

router.route('/:id')
  .get(userController.getById)
  .put(userValidationMiddleware, userController.updateById)
  .delete(userController.deleteById);

export default router;