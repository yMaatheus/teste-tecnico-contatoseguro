import { Router } from "express";
import userRouter from './users.routes'

export const router = Router();

router.use('/user', userRouter);