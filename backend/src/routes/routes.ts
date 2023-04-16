import { Router } from "express";
import authRouter from './auth.routes'
import userRouter from './user.routes'
import companyRouter from './company.routes'
import reportRouter from './report.routes'

export const router = Router();

router.use('/auth', authRouter);
router.use('/user', userRouter);
router.use('/company', companyRouter);
router.use('/report', reportRouter);