// Mock Supabase for static deployment
// Returns empty data to prevent build errors

export const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
export const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

// Mock client that won't crash
export const createClient = () => {
  return {
    from: () => ({
      select: () => Promise.resolve({ data: [], error: null }),
      eq: () => Promise.resolve({ data: [], error: null }),
      single: () => Promise.resolve({ data: null, error: null }),
    }),
  }
}

export const supabase = createClient()
