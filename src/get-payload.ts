import dotenv from 'dotenv';
import path from 'path';
import { InitOptions } from 'payload/config';

dotenv.config({
  path: path.resolve(__dirname, '../.env'),
});

interface Args {
  initOptions?: Partial<InitOptions>;
}

let cache = (global as any).payload;

if (!cache) {
  cache = (global as any).payload = {
    payload: null,
    promise: null,
  };
}

export const getPayloadClient = async ({ initOptions }: Args = {}) => {
  if (!process.env.PAYLOAD_SECRET)
    throw new Error('PAYLOAD_SECRET is not set in .env file');
};
