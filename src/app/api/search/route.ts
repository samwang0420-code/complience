import { NextRequest, NextResponse } from 'next/server'
import errorCodes from '@/data/error-codes/database.json'

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get('q')?.toLowerCase() || ''
  const brand = searchParams.get('brand')?.toLowerCase()
  const category = searchParams.get('category')?.toLowerCase()

  let results = errorCodes.errorCodes

  // 按关键词搜索
  if (query) {
    results = results.filter((item: any) => 
      item.code.toLowerCase().includes(query) ||
      item.name.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query) ||
      item.brand.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query)
    )
  }

  // 按品牌筛选
  if (brand) {
    results = results.filter((item: any) => 
      item.brand.toLowerCase() === brand
    )
  }

  // 按分类筛选
  if (category) {
    results = results.filter((item: any) => 
      item.category.toLowerCase() === category
    )
  }

  return NextResponse.json({
    total: results.length,
    results
  })
}
