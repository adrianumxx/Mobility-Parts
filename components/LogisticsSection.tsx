'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Box, Lock, PackageSearch, Truck } from 'lucide-react'
import { logisticsIntro, logisticsPillars } from '@/lib/site-content'

const ICONS = {
  lock: Lock,
  search: PackageSearch,
  box: Box,
  truck: Truck,
} as const

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
}

export default function LogisticsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.12 })

  return (
    <section className="section" ref={ref}>
      <div className="container-site">
        <motion.div
          className="mx-auto mb-12 max-w-3xl text-center"
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="badge badge-accent mb-4">{logisticsIntro.eyebrow}</span>
          <h2 className="font-display font-bold leading-tight" style={{ fontSize: 'var(--tx-4xl)', color: 'var(--text-primary)' }}>
            {logisticsIntro.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed md:text-lg" style={{ color: 'var(--text-secondary)' }}>
            {logisticsIntro.subtitle}
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-5 md:grid-cols-2"
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
        >
          {logisticsPillars.map((pillar) => {
            const Icon = ICONS[pillar.icon]
            return (
              <motion.article
                key={pillar.title}
                variants={item}
                className="card flex gap-4 p-6 text-left"
              >
                <div
                  className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl"
                  style={{ background: 'var(--tone-a)', color: 'var(--accent)' }}
                >
                  <Icon size={24} strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-[var(--text-primary)] md:text-lg">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">{pillar.body}</p>
                </div>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
