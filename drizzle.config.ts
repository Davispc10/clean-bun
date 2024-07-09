import type { Config } from 'drizzle-kit'

export default {
  schema: './src/db/drizzle/schema/index.ts',
  out: './src/db/drizzle/sql',
  dialect: 'postgresql',
} satisfies Config;
