import express from 'express';
import dotenv from 'dotenv';
import { getPayloadClient } from './get-payload';

dotenv.config();

const app = express();
const PORT: number = Number(process.env.PORT) || 3000;

const startServer = async () => {
  const payload = await getPayloadClient();

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

startServer();
