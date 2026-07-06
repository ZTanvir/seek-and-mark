import * as z from "zod";

export const envSchema = z.object({
  DATABASE_URL: z.url(),
  SUPABASE_STORAGE_BASE_URL: z.url(),
});
