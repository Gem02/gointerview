import { defineConfig } from "drizzle-kit";

if (!process.env.NEXT_PUBLIC_DRIZZLE_DB_URL) {
  throw new Error("NEXT_PUBLIC_DRIZZLE_DB_URL is not defined in environment variables.");
}

export default defineConfig({
  dialect: "postgresql",
  schema: "./utils/schema.ts",
  out: "./drizzle",
  dbCredentials: {
    url: process.env.NEXT_PUBLIC_DRIZZLE_DB_URL,
  },
});
