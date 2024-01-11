import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT: number = 3000 || Number(process.env.PORT);
