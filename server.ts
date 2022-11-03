import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { getPermits } from './permits';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get('/api/permits', (req: Request, res: Response) => {
  // res.json({ message: 'get something' });
  getPermits();
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
