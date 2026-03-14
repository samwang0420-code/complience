'use client'

// Mock AuthProvider for static site
export function AuthProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

export const useAuth = () => ({
  user: null,
  loading: false,
})
