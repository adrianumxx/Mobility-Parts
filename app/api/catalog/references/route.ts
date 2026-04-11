import { NextResponse } from 'next/server'
import { catalogReferences } from '@/lib/data/catalog-references'

export function GET() {
  return NextResponse.json({
    ok: true as const,
    items: catalogReferences,
  })
}
