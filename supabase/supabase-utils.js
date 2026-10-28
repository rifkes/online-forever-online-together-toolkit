import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm'

// change these to your own url and key
// find these in your project dashboard
const supabaseUrl = 'https://dwcswgetibtmvnwpyamb.supabase.co'
const supabaseKey = 'sb_publishable_ijFiVLHR7wBTIVuA8EWLYQ_YEYwvgt3'
export const supabase = createClient(supabaseUrl, supabaseKey)
export const user = await supabase.auth.getUser()
