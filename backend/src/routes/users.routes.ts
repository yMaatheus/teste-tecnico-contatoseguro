import { StatusCodes } from 'http-status-codes';
import { Request, Response, Router } from "express";

const router = Router();

router.get('/', async (req: Request, res: Response) => {
  return res.status(StatusCodes.OK).json({ message: 'Hello World!'});
})

export default router;