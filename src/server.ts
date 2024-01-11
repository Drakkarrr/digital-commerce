import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import { getPayloadClient } from './get-payload';
import { nextApp, nextHandler } from './next-utils';

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

  nextApp.prepare().then(() => {
    // payload.logger.info('Next.js started');

    app.listen(PORT, async () => {
      // payload.logger.info(
      //   `Next.js App URL: ${process.env.NEXT_PUBLIC_SERVER_URL}`
      // );
    });
  });
};

startServer();
