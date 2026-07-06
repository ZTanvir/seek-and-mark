import { envSchema } from "./lib/zod-schemas/env-schema";
import * as z from "zod";

const result = envSchema.safeParse(process.env);

if (!result.success) {
  console.error("Invalid environment variable", z.prettifyError(result.error));
  process.exit(1);
}
export const env = result.data;
