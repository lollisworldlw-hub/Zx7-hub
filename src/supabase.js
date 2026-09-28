import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://smkwrvvpqhoktozuwlpe.supabase.co'
const SUPABASE_ANON_KEY = 'sb_publishable_y4OY6QPGustrmvrq1BO8MQ_0OKIfARj'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
