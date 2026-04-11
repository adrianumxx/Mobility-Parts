import { NextResponse } from 'next/server'
import { proLoginRequestSchema } from '@/lib/schemas'

function randomId() {
  return `req_${Math.random().toString(36).slice(2, 10)}`
}

export async function POST(request: Request) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ ok: false as const, message: 'JSON invalide' }, { status: 400 })
  }

  const parsed = proLoginRequestSchema.safeParse(body)
  if (!parsed.success) {
    const issues = parsed.error.flatten().fieldErrors
    return NextResponse.json(
      { ok: false as const, message: 'Validation échouée', issues },
      { status: 422 }
    )
  }

  await new Promise((r) => setTimeout(r, 450))

  return NextResponse.json({
    ok: true as const,
    requestId: randomId(),
    receivedAt: new Date().toISOString(),
  })
}
