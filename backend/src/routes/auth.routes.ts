import { Router } from 'express';
import authMiddleware from '../middlewares/auth.middleware';
import AuthController from '../controllers/auth.controller';

const authController = new AuthController();

const router = Router();

router.post('/login', authController.login);

router.post('/logout', authController.logout);

router.get('/status', authMiddleware, authController.status);

export default router;