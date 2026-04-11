'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Cpu, Droplets, Gauge, Layers, Lightbulb, Wrench } from 'lucide-react'
import { catalogFamilies, catalogIntro } from '@/lib/site-content'

const ICONS = {
  gauge: Gauge,
  layers: Layers,
  cpu: Cpu,
  wrench: Wrench,
  light: Lightbulb,
  droplet: Droplets,
} as const

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
}

const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
}

export default function Categories() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="section" ref={ref}>
      <div className="container-site">
        <motion.div
          className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div>
            <span className="badge badge-accent mb-3">{catalogIntro.eyebrow}</span>
            <h2
              className="font-display font-bold leading-tight"
              style={{ fontSize: 'var(--tx-4xl)', color: 'var(--text-primary)' }}
            >
              {catalogIntro.title}
              <br />
              <span className="text-gradient">multi-marques</span>
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            {catalogIntro.subtitle}
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 gap-4 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
        >
          {catalogFamilies.map((cat) => {
            const Icon = ICONS[cat.icon]
            return (
              <motion.div key={cat.label} variants={item}>
                <Link
                  href={catalogIntro.ctaHref}
                  className="cat-card group h-full text-left"
                >
                  <div
                    className="mb-1 flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110"
                    style={{ background: 'var(--tone-b)' }}
                  >
                    <Icon size={26} className="text-[var(--accent)]" strokeWidth={1.75} />
                  </div>
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-[var(--text-muted)]">
                    {cat.group}
                  </p>
                  <p className="font-display text-base font-bold text-[var(--text-primary)]">{cat.label}</p>
                  <p className="mt-2 text-xs text-[var(--text-secondary)]">
                    Accès VIN, alternatives OEM, visibilité stock.
                  </p>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.45 }}
        >
          <Link href={catalogIntro.ctaHref} className="btn btn-ghost">
            {catalogIntro.cta}
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
