import { text, timestamp, pgTable } from 'drizzle-orm/pg-core';
import { createId } from '@paralleldrive/cuid2'
import { users } from './users';

export const authLinks = pgTable('auth-links', {
  id: text('id').$defaultFn(() => createId()).primaryKey(),
  code: text('code').notNull().unique(),
  userId: text('user_id').references(() => users.id).notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});
