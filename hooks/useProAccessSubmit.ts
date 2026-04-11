'use client'

import { useCallback, useState } from 'react'
import { proLoginSuccessSchema } from '@/lib/api/schemas'
import type { ProLoginRequest } from '@/lib/schemas'

export function useProAccessSubmit() {
  const [error, setError] = useState<string | null>(null)

  const submit = useCallback(async (data: ProLoginRequest) => {
    setError(null)
    let res: Response
    try {
      res = await fetch('/api/pro-login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
    } catch {
      const message = 'Réseau indisponible.'
      setError(message)
      throw new Error(message)
    }

    const json: unknown = await res.json().catch(() => null)

    if (!res.ok) {
      const message =
        typeof json === 'object' && json !== null && 'message' in json && typeof (json as { message: unknown }).message === 'string'
          ? (json as { message: string }).message
          : 'Envoi impossible pour le moment.'
      setError(message)
      throw new Error(message)
    }

    const parsed = proLoginSuccessSchema.safeParse(json)
    if (!parsed.success) {
      const message = 'Réponse serveur inattendue.'
      setError(message)
      throw new Error(message)
    }

    return parsed.data
  }, [])

  return { submit, error, setError }
}
