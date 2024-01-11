import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import { getPayloadClient } from './get-payload';
import { nextHandler } from './next-utils';

dotenv.config();

const app = express();
const PORT: number = Number(process.env.PORT) || 3000;

const startServer = async () => {
  const payload = await getPayloadClient({
    initOptions: {
      express: app,
      onInit: async (cms) => {
        cms.logger.info(`Admin URL: ${cms.getAdminURL()}`);
      },
    },
  });

  app.use((req: Request, res: Response) => nextHandler(req, res));
};

startServer();
