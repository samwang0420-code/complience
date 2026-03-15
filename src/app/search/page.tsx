import { Suspense } from 'react'
import SearchContent from './SearchContent'

function Loading() {
  return (
    <div style={{ textAlign: 'center', padding: '40px', color: '#64748b' }}>
      Loading...
    </div>
  )
}

export default function SearchPage() {
  return (
    <Suspense fallback={<Loading />}>
      <SearchContent />
    </Suspense>
  )
}
