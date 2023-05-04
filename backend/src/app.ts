import cookieParser from 'cookie-parser';
import express from 'express';
import cors from 'cors';
import 'express-async-errors';
import { router } from './routes';
import dotenv from 'dotenv';
import { errorHandler } from './middlewares';

dotenv.config();

const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:3000';

const app = express();

app.use(express.json());
app.use(cors({
  origin: 'https://contato-seguro.ymaatheus.me',
  credentials: true,
}));
app.use(cookieParser());

app.use(router);

app.use(errorHandler);

export default app;