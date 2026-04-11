import { NextResponse } from 'next/server'

export function GET() {
  return NextResponse.json({
    ok: true,
    service: 'mobility-parts-web',
    mode: 'placeholder',
    timestamp: new Date().toISOString(),
  })
}
