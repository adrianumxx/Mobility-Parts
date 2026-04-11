import { NextResponse } from 'next/server'
import { newsletterRequestSchema, newsletterResponseSchema } from '@/lib/api/schemas'

export async function POST(request: Request) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ ok: false as const, message: 'JSON invalide' }, { status: 400 })
  }

  const parsed = newsletterRequestSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ ok: false as const, message: 'Email invalide' }, { status: 422 })
  }

  await new Promise((r) => setTimeout(r, 300))

  return NextResponse.json(newsletterResponseSchema.parse({ ok: true, queued: true }))
}
