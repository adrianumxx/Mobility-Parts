'use client'

import { useCallback, useEffect, useState } from 'react'
import type { CatalogReferencesResponse } from '@/lib/api/schemas'
import { catalogReferencesResponseSchema } from '@/lib/api/schemas'

type State =
  | { status: 'idle' | 'loading' }
  | { status: 'ready'; items: CatalogReferencesResponse['items'] }
  | { status: 'error'; message: string }

export function useCatalogReferences() {
  const [state, setState] = useState<State>({ status: 'loading' })
  const [reloadKey, setReloadKey] = useState(0)

  const reload = useCallback(() => {
    setReloadKey((k) => k + 1)
  }, [])

  useEffect(() => {
    let cancelled = false

    async function load() {
      setState({ status: 'loading' })
      try {
        const res = await fetch('/api/catalog/references', { method: 'GET' })
        const json: unknown = await res.json().catch(() => null)
        if (!res.ok) {
          throw new Error('Chargement impossible.')
        }
        const parsed = catalogReferencesResponseSchema.safeParse(json)
        if (!parsed.success) {
          throw new Error('Format catalogue inattendu.')
        }
        if (!cancelled) {
          setState({ status: 'ready', items: parsed.data.items })
        }
      } catch (e) {
        if (!cancelled) {
          setState({
            status: 'error',
            message: e instanceof Error ? e.message : 'Erreur inconnue.',
          })
        }
      }
    }

    void load()
    return () => {
      cancelled = true
    }
  }, [reloadKey])

  return { state, reload }
}
