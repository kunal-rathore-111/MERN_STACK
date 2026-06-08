import { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';

export const UsersTable = pgTable('UsersTable', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: text('name').notNull(),
  createdAt: timestamp('createdAt').defaultNow().notNull(),
});
