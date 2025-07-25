// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://vckultlvktsognfqqtye.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZja3VsdGx2a3Rzb2duZnFxdHllIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI4NTAwNzksImV4cCI6MjA2ODQyNjA3OX0.VqSW5o5RhNOv0Tib24ktXkYFJJVsr1AgM73P7UQcbnc";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  }
});