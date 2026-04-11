'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { navLinks, siteMeta } from '@/lib/site-content'
import ThemeToggle from '@/components/ThemeToggle'

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <>
      <div className="hidden md:block bg-gradient-accent py-2 text-center text-xs font-semibold text-on-accent">
        {siteMeta.tagline} · Belgique · Flux pro sécurisés · Livraison J+1
      </div>

      <motion.header
        className={cn(
          'sticky top-0 z-[var(--z-sticky)] w-full transition-all duration-300',
          scrolled ? 'glass-nav shadow-md' : 'bg-transparent'
        )}
        initial={{ y: -72, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="container-site">
          <div className="flex h-16 items-center gap-4 md:h-[4.5rem]">
            <Link href="/" className="group flex flex-shrink-0 items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-accent font-display text-sm font-bold text-on-accent shadow-md">
                MP
              </span>
              <span className="hidden font-display text-lg font-bold sm:block" style={{ color: 'var(--text-primary)' }}>
                Mobility<span style={{ color: 'var(--accent)' }}>Parts</span>
              </span>
            </Link>

            <nav className="ml-2 hidden flex-1 items-center gap-1 lg:flex">
              {navLinks.map((item) => {
                const active = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'rounded-lg px-4 py-2 text-sm font-semibold transition-colors',
                      active
                        ? 'bg-[var(--accent-subtle)] text-[var(--accent)]'
                        : 'text-[var(--text-secondary)] hover:bg-[var(--accent-subtle)] hover:text-[var(--accent)]'
                    )}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </nav>

            <div className="ml-auto flex items-center gap-2">
              <ThemeToggle />
              <Link
                href="/#acces-pro"
                className="btn btn-primary hidden sm:inline-flex"
              >
                Demander votre accès
              </Link>
              <button
                type="button"
                onClick={() => setMobileOpen((v) => !v)}
                className="rounded-lg p-2 text-[var(--text-secondary)] transition-colors hover:bg-[var(--accent-subtle)] hover:text-[var(--accent)] lg:hidden"
                aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              className="border-t border-[var(--border)] lg:hidden"
              style={{ background: 'var(--bg-secondary)' }}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="container-site flex flex-col gap-1 py-4">
                {navLinks.map((item) => {
                  const active = pathname === item.href
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        'rounded-xl px-4 py-3 text-sm font-semibold',
                        active
                          ? 'bg-[var(--accent-subtle)] text-[var(--accent)]'
                          : 'text-[var(--text-primary)] hover:bg-[var(--bg-tertiary)]'
                      )}
                    >
                      {item.label}
                    </Link>
                  )
                })}
                <Link href="/#acces-pro" className="btn btn-primary btn-lg mt-2 w-full justify-center">
                  Demander votre accès
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  )
}
