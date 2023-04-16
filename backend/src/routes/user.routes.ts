import { Router } from 'express';
import UserController from '../controllers/user.controller';
import authMiddleware from '../middlewares/auth.middleware';

const userController = new UserController();

const router = Router();

router.post('/login', userController.login);

router.post('/logout', userController.logout);

router.get('/me', authMiddleware, userController.me);

export default router;