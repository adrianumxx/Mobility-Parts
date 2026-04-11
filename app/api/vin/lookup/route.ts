import { NextResponse } from 'next/server'
import { vinLookupRequestSchema, vinLookupResponseSchema } from '@/lib/api/schemas'

export async function POST(request: Request) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ ok: false as const, message: 'JSON invalide' }, { status: 400 })
  }

  const parsed = vinLookupRequestSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ ok: false as const, message: 'VIN invalide (11–17 caractères)' }, { status: 422 })
  }

  const payload = {
    ok: true as const,
    vin: parsed.data.vin.toUpperCase(),
    placeholder: true as const,
    summary: 'Réponse fictive : branchez ici votre fournisseur VIN / TecDoc.',
    families: ['Freinage', 'Filtration', 'Moteur', 'Suspension', 'Éclairage', 'Huiles'],
  }

  return NextResponse.json(vinLookupResponseSchema.parse(payload))
}
