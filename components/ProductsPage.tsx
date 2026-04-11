'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, Grid3X3, List, Search, SlidersHorizontal, X } from 'lucide-react'
import { useCatalogReferences } from '@/hooks/useCatalogReferences'
import { catalogIntro } from '@/lib/site-content'
import type { CatalogFamily, CatalogReferenceRow } from '@/lib/data/catalog-references'
import { cn } from '@/lib/utils'

type Family = 'Toutes' | CatalogFamily

const FAMILIES: Family[] = ['Toutes', 'Freinage', 'Filtration', 'Moteur', 'Suspension', 'Éclairage', 'Huiles']

const SORT_OPTIONS = [
  { value: 'family', label: 'Famille' },
  { value: 'label', label: 'Libellé' },
  { value: 'stock', label: 'Stock d’abord' },
]

type ViewMode = 'grid' | 'list'

export default function ProductsPage() {
  const { state, reload } = useCatalogReferences()
  const [search, setSearch] = useState('')
  const [family, setFamily] = useState<Family>('Toutes')
  const [sort, setSort] = useState('family')
  const [viewMode, setViewMode] = useState<ViewMode>('grid')
  const [filterOpen, setFilterOpen] = useState(false)

  const items: CatalogReferenceRow[] = state.status === 'ready' ? state.items : []

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase()
    const rows = items.filter((r) => {
      const matchFamily = family === 'Toutes' || r.family === family
      const matchSearch =
        !q ||
        r.label.toLowerCase().includes(q) ||
        r.oem.toLowerCase().includes(q) ||
        r.brand.toLowerCase().includes(q)
      return matchFamily && matchSearch
    })
    if (sort === 'label') {
      return [...rows].sort((a, b) => a.label.localeCompare(b.label, 'fr'))
    }
    if (sort === 'stock') {
      return [...rows].sort((a, b) => Number(b.inStock) - Number(a.inStock))
    }
    return [...rows].sort((a, b) => a.family.localeCompare(b.family, 'fr'))
  }, [family, items, search, sort])

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>
      <div style={{ background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border)' }}>
        <div className="container-site py-12">
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
            <span className="badge badge-accent mb-3">Catalogue</span>
            <h1 className="font-display font-bold" style={{ fontSize: 'var(--tx-4xl)', color: 'var(--text-primary)' }}>
              {catalogIntro.title}
            </h1>
            <p className="mt-3 max-w-2xl text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {catalogIntro.subtitle} Les références ci-dessous proviennent de l’API placeholder{' '}
              <code className="rounded bg-[var(--bg-tertiary)] px-1.5 py-0.5 text-xs text-[var(--text-primary)]">
                GET /api/catalog/references
              </code>
              .
            </p>
            <Link href="/#acces-pro" className="btn btn-primary mt-6 inline-flex bg-gradient-accent">
              Demander un login catalogue
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="container-site py-10">
        {state.status === 'error' && (
          <div className="mb-8 rounded-2xl border border-[var(--border)] bg-[var(--bg-secondary)] p-5 text-sm text-[var(--text-secondary)]">
            <p className="font-semibold text-[var(--text-primary)]">Catalogue indisponible</p>
            <p className="mt-1">{state.message}</p>
            <button type="button" className="btn btn-ghost mt-4" onClick={() => reload()}>
              Réessayer
            </button>
          </div>
        )}

        <div className="flex flex-col gap-8 lg:flex-row">
          <aside className={cn('lg:w-64 lg:flex-shrink-0', filterOpen ? 'block' : 'hidden lg:block')}>
            <div className="sticky top-28 space-y-6">
              <div>
                <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">Famille</h3>
                <div className="space-y-1">
                  {FAMILIES.map((f) => (
                    <button
                      key={f}
                      type="button"
                      onClick={() => setFamily(f)}
                      className={cn(
                        'w-full rounded-lg px-3 py-2 text-left text-sm transition-all',
                        family === f
                          ? 'bg-[var(--accent-subtle)] font-semibold text-[var(--accent)]'
                          : 'text-[var(--text-secondary)] hover:bg-[var(--bg-secondary)]'
                      )}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>
              <div className="h-px" style={{ background: 'var(--border)' }} />
              <p className="text-xs leading-relaxed text-[var(--text-muted)]">
                VIN : endpoint placeholder{' '}
                <code className="rounded bg-[var(--bg-tertiary)] px-1 py-0.5 text-[11px]">POST /api/vin/lookup</code>.
              </p>
            </div>
          </aside>

          <div className="min-w-0 flex-1">
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <div className="relative min-w-[200px] flex-1">
                <Search size={16} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
                <input
                  className="input pl-9"
                  placeholder="Rechercher référence, OEM, marque…"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  disabled={state.status !== 'ready'}
                />
                {search && (
                  <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2" onClick={() => setSearch('')}>
                    <X size={14} className="text-[var(--text-muted)]" />
                  </button>
                )}
              </div>
              <button type="button" className="btn btn-ghost lg:hidden" onClick={() => setFilterOpen((v) => !v)}>
                <SlidersHorizontal size={16} />
                Filtres
              </button>
              <div className="relative">
                <select
                  className="input cursor-pointer appearance-none pr-8"
                  style={{ minWidth: 180 }}
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  disabled={state.status !== 'ready'}
                >
                  {SORT_OPTIONS.map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  size={14}
                  className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]"
                />
              </div>
              <div className="flex overflow-hidden rounded-lg border border-[var(--border)]">
                {(['grid', 'list'] as ViewMode[]).map((v) => (
                  <button
                    key={v}
                    type="button"
                    onClick={() => setViewMode(v)}
                    className={cn(
                      'p-2.5 transition-colors',
                      viewMode === v ? 'bg-[var(--accent)] text-[var(--on-accent)]' : 'text-[var(--text-muted)] hover:bg-[var(--bg-secondary)]'
                    )}
                    aria-label={v === 'grid' ? 'Vue grille' : 'Vue liste'}
                    disabled={state.status !== 'ready'}
                  >
                    {v === 'grid' ? <Grid3X3 size={16} /> : <List size={16} />}
                  </button>
                ))}
              </div>
              <span className="ml-auto text-sm text-[var(--text-muted)]">
                {state.status === 'ready' ? `${filtered.length} références` : state.status === 'loading' ? 'Chargement…' : '—'}
              </span>
            </div>

            {state.status === 'loading' && (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-40 animate-pulse rounded-2xl border border-[var(--border)] bg-[var(--bg-secondary)]"
                  />
                ))}
              </div>
            )}

            {state.status === 'ready' && (
              <AnimatePresence mode="popLayout">
                {filtered.length === 0 ? (
                  <motion.div key="empty" className="py-20 text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <p className="mb-2 font-semibold text-[var(--text-primary)]">Aucune référence</p>
                    <p className="text-sm text-[var(--text-muted)]">Ajustez la recherche ou la famille.</p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="grid"
                    layout
                    className={cn(viewMode === 'grid' ? 'grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3' : 'flex flex-col gap-3')}
                  >
                    {filtered.map((r, i) => (
                      <motion.div
                        key={r.id}
                        layout
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.02 }}
                      >
                        {viewMode === 'grid' ? (
                          <article className="product-card h-full p-5">
                            <div className="mb-3 flex items-center justify-between gap-2">
                              <span className="text-xs font-semibold text-[var(--accent)]">{r.family}</span>
                              <span
                                className="rounded-full px-2 py-0.5 text-[11px] font-semibold"
                                style={{
                                  background: r.inStock ? 'var(--tone-a)' : 'var(--tone-c)',
                                  color: r.inStock ? 'var(--accent)' : 'var(--text-muted)',
                                }}
                              >
                                {r.inStock ? 'En stock' : 'Rupture'}
                              </span>
                            </div>
                            <h3 className="font-semibold text-[var(--text-primary)]">{r.label}</h3>
                            <p className="mt-1 text-xs text-[var(--text-muted)]">{r.oem}</p>
                            <p className="mt-3 text-sm font-semibold text-[var(--text-secondary)]">{r.brand}</p>
                          </article>
                        ) : (
                          <article
                            className="flex flex-wrap items-center gap-4 rounded-2xl border border-[var(--border)] p-4 transition-colors hover:border-[var(--accent)]"
                            style={{ background: 'var(--bg-secondary)' }}
                          >
                            <div className="min-w-0 flex-1">
                              <p className="text-xs font-semibold text-[var(--accent)]">{r.family}</p>
                              <h3 className="truncate font-semibold text-[var(--text-primary)]">{r.label}</h3>
                              <p className="text-xs text-[var(--text-muted)]">{r.oem}</p>
                            </div>
                            <p className="text-sm font-semibold text-[var(--text-secondary)]">{r.brand}</p>
                            <span
                              className="rounded-full px-2 py-1 text-[11px] font-semibold"
                              style={{
                                background: r.inStock ? 'var(--tone-a)' : 'var(--tone-c)',
                                color: r.inStock ? 'var(--accent)' : 'var(--text-muted)',
                              }}
                            >
                              {r.inStock ? 'En stock' : 'Rupture'}
                            </span>
                          </article>
                        )}
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
