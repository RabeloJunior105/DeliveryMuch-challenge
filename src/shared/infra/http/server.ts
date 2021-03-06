import dotenv from 'dotenv'
import path from 'path'
import express, { Request, Response, NextFunction } from 'express';

dotenv.config({ path: '../../../../.env' });
import '@shared/container'

import 'express-async-errors';
import cors from 'cors';

import routes from '@shared/infra/http/routes';

import AppError from '@shared/errors/AppError';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use((err: Error, req: Request, res: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  console.log(err);

  return res.status(500).json({
    status: 'error',
    message: 'Internal Server Error',
  });
});

app.listen(3333, () => {
  console.log('server started');
});
