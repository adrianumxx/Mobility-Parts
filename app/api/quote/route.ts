import { NextResponse } from 'next/server'
import { z } from 'zod'

const quoteRequestSchema = z.object({
  sku: z.string().min(3),
  qty: z.number().int().min(1).max(999).optional(),
})

export async function POST(request: Request) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ ok: false as const, message: 'JSON invalide' }, { status: 400 })
  }

  const parsed = quoteRequestSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ ok: false as const, message: 'SKU ou quantité invalide' }, { status: 422 })
  }

  const qty = parsed.data.qty ?? 1

  return NextResponse.json({
    ok: true as const,
    placeholder: true as const,
    sku: parsed.data.sku,
    qty,
    currency: 'EUR',
    unitPriceExVat: 0,
    message: 'Prix fictif : connectez votre ERP / grille tarifaire ici.',
  })
}
