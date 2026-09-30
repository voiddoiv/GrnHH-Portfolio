// client/src/services/supabase.ts
import { createClient } from '@supabase/supabase-js';

// URL Project Anda dari dashboard Supabase
const SUPABASE_URL = 'https://uthwvwbgqeeypnkmsmkf.supabase.co';

// Tempelkan (paste) kunci 'anon public' yang Anda copy tadi di dalam tanda kutip:
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV0aHd2d2JncWVleXBua21zbWtmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTA3MzI3NTcsImV4cCI6MjEwNjMwODc1N30.9Ahc3xs0vhNefW0DaNMDILjL4Sf8zM5nw-sVISTEpSY';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
