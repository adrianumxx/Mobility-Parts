'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react'
import { navLinks, siteMeta } from '@/lib/site-content'

const FOOTER_LINKS = {
  decouvrir: {
    title: 'Découvrir',
    links: [
      { label: 'Workflow atelier', href: '/workflow' },
      { label: 'Catalogue pièces', href: '/produits' },
      { label: 'Expertise fournisseur', href: '/expertise' },
      { label: 'Accès professionnel', href: '/#acces-pro' },
    ],
  },
  marques: {
    title: 'Marques',
    links: [
      { label: 'Bosch', href: '/produits' },
      { label: 'Valeo', href: '/produits' },
      { label: 'TRW', href: '/produits' },
      { label: 'Zimmermann', href: '/produits' },
    ],
  },
  legal: {
    title: 'Légal',
    links: [
      { label: 'Mentions légales', href: '/mentions' },
      { label: 'Confidentialité', href: '/privacy' },
      { label: 'Conditions B2B', href: '/terms' },
    ],
  },
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)' }}>
      <div className="container-site py-14 md:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="mb-5 flex items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-accent font-display text-sm font-bold text-on-accent">
                MP
              </span>
              <span className="font-display text-xl font-bold" style={{ color: 'var(--text-primary)' }}>
                Mobility<span style={{ color: 'var(--accent)' }}>Parts</span>
              </span>
            </div>
            <p className="mb-6 max-w-md text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {siteMeta.tagline}. Identification VIN, tarifs nets, stock réel et livraison J+1 pour ateliers et réseaux
              pros en Belgique.
            </p>
            <div className="mb-6 space-y-3">
              <div className="flex items-center gap-3">
                <Phone size={15} className="flex-shrink-0 text-[var(--accent)]" />
                <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  +32 (0)2 … … …
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={15} className="flex-shrink-0 text-[var(--accent)]" />
                <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  pro@mobility-parts.be
                </span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={15} className="mt-0.5 flex-shrink-0 text-[var(--accent)]" />
                <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  Belgique — flux logistiques Pologne → Benelux
                </span>
              </div>
            </div>
          </div>

          {Object.values(FOOTER_LINKS).map((col) => (
            <div key={col.title}>
              <h4 className="mb-4 font-display text-sm font-bold uppercase tracking-wider" style={{ color: 'var(--text-primary)' }}>
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-1 text-sm transition-colors hover:text-[var(--accent)]"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      <ArrowRight
                        size={12}
                        className="-ml-3 opacity-0 transition-all group-hover:ml-0 group-hover:opacity-100"
                      />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <motion.div
          className="mt-12 flex flex-wrap gap-2 border-t border-[var(--border)] pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-full border border-[var(--border)] px-3 py-1 text-xs font-semibold text-[var(--text-secondary)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
              style={{ background: 'var(--bg-tertiary)' }}
            >
              {l.label}
            </Link>
          ))}
        </motion.div>
      </div>

      <div className="py-4" style={{ borderTop: '1px solid var(--border)', background: 'var(--bg-primary)' }}>
        <div
          className="container-site flex flex-col items-center justify-between gap-3 text-xs sm:flex-row"
          style={{ color: 'var(--text-muted)' }}
        >
          <p>
            © {year} {siteMeta.name} — Tous droits réservés
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="transition-colors hover:text-[var(--accent)]">
              Confidentialité
            </Link>
            <Link href="/terms" className="transition-colors hover:text-[var(--accent)]">
              Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
