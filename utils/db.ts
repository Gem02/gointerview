/* import {supabase} from '@supabase/postgrest-js'
import { drizzle } from 'drizzle-orm/supabase';

const sql = supabase(process.env.NEXT_PUBLIC_DRIZZLE_DB_URL);
export const db = drizzle(sql,{schema}); */

// Make sure to install the 'postgres' package
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema'

if (!process.env.NEXT_PUBLIC_DRIZZLE_DB_URL) {
    throw new Error("Missing environment variable: NEXT_PUBLIC_DRIZZLE_DB_URL");
  }
  
  // Create a Postgres client with SSL required
  const client = postgres(process.env.NEXT_PUBLIC_DRIZZLE_DB_URL);
 
  export const db = drizzle(client, {schema});

//const result = await db.execute('select 1');
