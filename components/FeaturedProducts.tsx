'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { BadgeCheck, Shield, Sparkles } from 'lucide-react'
import { catalogBento, catalogIntro } from '@/lib/site-content'

const ICONS = {
  shield: Shield,
  badge: BadgeCheck,
  spark: Sparkles,
} as const

export default function FeaturedProducts() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.12 })

  return (
    <section className="section" ref={ref} style={{ background: 'var(--bg-secondary)' }}>
      <div className="container-site">
        <motion.div
          className="mb-10 max-w-2xl"
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="badge badge-accent mb-3">Pourquoi nous choisir</span>
          <h2
            className="font-display font-bold leading-tight"
            style={{ fontSize: 'var(--tx-3xl)', color: 'var(--text-primary)' }}
          >
            Une plateforme pensée pour{' '}
            <span className="text-gradient">débloquer vos ponts</span>
          </h2>
          <p className="mt-3 text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Tarifs nets, transparence stock, sourcing profond : les garagistes gagnent du temps, pas des excuses.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {catalogBento.map((card, i) => {
            const Icon = ICONS[card.icon]
            return (
              <motion.article
                key={card.title}
                className="card relative overflow-hidden p-7"
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <div
                  className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full"
                  style={{
                    background: 'radial-gradient(circle, color-mix(in srgb, var(--accent) 16%, transparent) 0%, transparent 70%)',
                  }}
                />
                <div
                  className="relative mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl"
                  style={{ background: 'var(--tone-a)', color: 'var(--accent)' }}
                >
                  <Icon size={22} strokeWidth={1.75} />
                </div>
                <h3 className="relative font-display text-lg font-bold text-[var(--text-primary)]">{card.title}</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">{card.body}</p>
              </motion.article>
            )
          })}
        </div>

        <motion.div
          className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-[var(--border)] p-6 md:p-8"
          style={{ background: 'var(--bg-primary)' }}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.25, duration: 0.5 }}
        >
          <div>
            <p className="font-display text-xl font-bold text-[var(--text-primary)]">Prêt à basculer votre approvisionnement ?</p>
            <p className="mt-1 text-sm text-[var(--text-secondary)]">
              Accès réservé aux professionnels — validation TVA sous 24h ouvrées.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/#acces-pro" className="btn btn-primary bg-gradient-accent">
              Demander votre accès
            </Link>
            <Link href={catalogIntro.ctaHref} className="btn btn-ghost">
              {catalogIntro.cta}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
