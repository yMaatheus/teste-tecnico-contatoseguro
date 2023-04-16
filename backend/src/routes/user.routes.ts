import { Router } from 'express';
import UserController from '../controllers/user.controller';

const userController = new UserController();

const router = Router();

router.route('/')
  .post(userController.create)
  .get(userController.getAll)

router.route('/:id')
  .put(userController.updateById)
  .delete(userController.deleteById);

export default router;