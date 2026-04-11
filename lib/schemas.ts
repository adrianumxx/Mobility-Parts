import { z } from 'zod'

export const proLoginRequestSchema = z.object({
  companyName: z.string().min(2, 'Nom entreprise requis'),
  vatNumber: z
    .string()
    .min(8, 'Numéro de TVA incomplet')
    .regex(/^[A-Za-z0-9.\s+-]+$/, 'Format TVA invalide'),
  fullName: z.string().min(2, 'Nom & prénom requis'),
  phone: z.string().min(8, 'GSM requis'),
  email: z.string().email('Email pro invalide'),
})

export type ProLoginRequest = z.infer<typeof proLoginRequestSchema>
