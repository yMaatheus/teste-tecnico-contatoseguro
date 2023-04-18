import { Router } from 'express';
import { authMiddleware, registerAuthMiddleware, loginAuthMiddleware } from '../middlewares';
import { AuthController } from '../controllers';
import { AuthService } from '../services/auth.service';

const authService = new AuthService();
const authController = new AuthController(authService);

const router = Router();

router.post('/register', registerAuthMiddleware, authController.register);

router.post('/login', loginAuthMiddleware, authController.login);

router.post('/logout', authController.logout);

router.get('/status', authMiddleware, authController.status);

export default router;