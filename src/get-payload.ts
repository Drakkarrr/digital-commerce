import payload from 'payload';
import path from 'path';
import dotenv from 'dotenv';
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

  if (cache.client) return cache.client;

  if (!cache.promise) {
    cache.promise = payload.init({
      secret: process.env.PAYLOAD_SECRET,
      local: initOptions?.express ? true : false,
      ...initOptions,
    });
  }

  try {
    cache.client = await cache.promise;
  } catch (error: unknown) {
    cache.promise = null;
    throw error;
  }

  return cache.client;
};
