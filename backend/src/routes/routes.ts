import { Router } from "express";
import userRouter from './user.routes'

export const router = Router();

router.use('/user', userRouter);