import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
  path: path.resolve(__dirname, '../.env'),
});

interface Args {
  initOptions?: Partial<initOptions>;
}

let cache = (global as any).payload;

if (!cache) {
  cache = (global as any).payload = {
    payload: null,
    promise: null,
  };
}

export const getPayloadClient = async ({ initOptions }: Args) => {};
