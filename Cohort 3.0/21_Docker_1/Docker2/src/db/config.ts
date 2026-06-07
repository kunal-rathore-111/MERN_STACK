import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as schema from './models';

let pool: Pool;
export let db: ReturnType<typeof drizzle>;

export async function connectDB() {
  try {
    const DB_URL = process.env.DB_URL;
    console.log('Connecting to db...');
    if (!DB_URL) throw new Error('DB url not found in .env');

    pool = new Pool({
      connectionString: DB_URL,
    });

    db = drizzle(pool, { schema });

    const client = await pool.connect();
    console.log('DB connected successfully');
    client.release();
  } catch (error) {
    console.error('Error in connect db- ', error);
  }
}
