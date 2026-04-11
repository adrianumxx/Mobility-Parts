'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { kpiStrip } from '@/lib/site-content'

export default function StatsStrip() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section
      ref={ref}
      className="relative overflow-hidden border-y border-[var(--border)] py-12"
      style={{ background: 'var(--bg-secondary)' }}
    >
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20"
        style={{ background: 'linear-gradient(90deg, var(--bg-secondary) 0%, transparent 100%)' }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20"
        style={{ background: 'linear-gradient(-90deg, var(--bg-secondary) 0%, transparent 100%)' }}
      />

      <div className="container-site">
        <div className="grid grid-cols-1 gap-8 divide-[var(--border)] md:grid-cols-3 md:gap-0 md:divide-x">
          {kpiStrip.map((item, i) => (
            <motion.div
              key={item.title}
              className="flex flex-col items-center px-4 text-center"
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="stat-number">{item.title}</div>
              <p className="mt-2 max-w-xs text-sm" style={{ color: 'var(--text-muted)' }}>
                {item.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
