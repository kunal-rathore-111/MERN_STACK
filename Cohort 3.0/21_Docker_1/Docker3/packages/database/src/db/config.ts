import { drizzle } from 'drizzle-orm/node-postgres';

const DB_URL = process.env.DB_URL;
if (!DB_URL) throw new Error('DB url not found in .env');

export const db = drizzle(DB_URL);
