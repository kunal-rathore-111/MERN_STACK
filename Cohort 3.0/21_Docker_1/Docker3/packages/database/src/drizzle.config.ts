import { defineConfig } from 'drizzle-kit';

const DB_URL = process.env.DB_URL;
if (!DB_URL) throw new Error('DB url not found in .env error from drizzle config');

export default defineConfig({
  dialect: 'postgresql',
  dbCredentials: {
    url: DB_URL,
  },
  schema: './src/db/schema.ts',
  out: './drizzle',
});
