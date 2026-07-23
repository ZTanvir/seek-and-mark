import * as z from "zod";

export const envSchema = z.object({
  DATABASE_URL: z.url(),
  SUPABASE_STORAGE_BASE_URL: z.url(),
  AUTH_SECRET:z.string().min(32,"Must be at least 32 characters long.")
});
