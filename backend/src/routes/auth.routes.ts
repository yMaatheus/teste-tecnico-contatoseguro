import { Router } from 'express';
import authMiddleware from '../middlewares/auth.middleware';
import AuthController from '../controllers/auth.controller';
import AuthService from '../services/auth.service';
import registerAuthMiddleware from '../middlewares/auth/register.auth.middleware';

const authService = new AuthService();
const authController = new AuthController(authService);

const router = Router();

router.post('/register', registerAuthMiddleware, authController.register);

router.post('/login', authController.login);

router.post('/logout', authController.logout);

router.get('/status', authMiddleware, authController.status);

export default router;