import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './src/db/models.ts',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DB_URL || 'postgresql://myUser:mySecretPass123@localhost:5432/docker22DB',
  },
});
