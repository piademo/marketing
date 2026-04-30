import { createClient } from '@supabase/supabase-js';
import { getSupabaseServiceRoleKey, getSupabaseUrl } from './env';

let supabaseSingleton: ReturnType<typeof createClient<any>> | null = null;

export function getSupabaseServiceClient() {
  if (supabaseSingleton) return supabaseSingleton;

  supabaseSingleton = createClient<any>(getSupabaseUrl(), getSupabaseServiceRoleKey(), {
    auth: { persistSession: false, autoRefreshToken: false },
  });
  return supabaseSingleton;
}

export function slugify(input: string) {
  return input
    .toLowerCase()
    .trim()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60);
}

