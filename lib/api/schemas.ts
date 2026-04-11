import { z } from 'zod'

export const proLoginSuccessSchema = z.object({
  ok: z.literal(true),
  requestId: z.string(),
  receivedAt: z.string(),
})

export type ProLoginSuccess = z.infer<typeof proLoginSuccessSchema>

export const apiErrorSchema = z.object({
  ok: z.literal(false),
  message: z.string(),
})

export type ApiErrorBody = z.infer<typeof apiErrorSchema>

const catalogFamilyEnum = z.enum(['Freinage', 'Filtration', 'Moteur', 'Suspension', 'Éclairage', 'Huiles'])

export const catalogReferencesResponseSchema = z.object({
  ok: z.literal(true),
  items: z.array(
    z.object({
      id: z.number(),
      label: z.string(),
      family: catalogFamilyEnum,
      oem: z.string(),
      brand: z.string(),
      inStock: z.boolean(),
    })
  ),
})

export type CatalogReferencesResponse = z.infer<typeof catalogReferencesResponseSchema>

export const vinLookupRequestSchema = z.object({
  vin: z.string().min(11).max(17),
})

export const vinLookupResponseSchema = z.object({
  ok: z.literal(true),
  vin: z.string(),
  placeholder: z.literal(true),
  summary: z.string(),
  families: z.array(z.string()),
})

export const newsletterRequestSchema = z.object({
  email: z.string().email(),
})

export const newsletterResponseSchema = z.object({
  ok: z.literal(true),
  queued: z.literal(true),
})
