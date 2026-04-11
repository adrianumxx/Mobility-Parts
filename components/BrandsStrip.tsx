'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { officialBrands } from '@/lib/site-content'

export default function BrandsStrip() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })
  const doubled = [...officialBrands, ...officialBrands]

  return (
    <section
      className="section-sm border-y border-[var(--border)]"
      ref={ref}
      style={{ background: 'var(--bg-primary)' }}
    >
      <div className="container-site mb-6">
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-1 text-sm font-semibold uppercase tracking-widest text-[var(--text-muted)]">
            Distributeur officiel
          </p>
          <h3 className="font-display text-2xl font-bold text-[var(--text-primary)]">Marques synchronisées</h3>
        </motion.div>
      </div>

      <div className="overflow-hidden">
        <div className="marquee-track gap-4" style={{ gap: 16 }}>
          {doubled.map((brand, i) => (
            <div key={`${brand}-${i}`} className="brand-logo mx-2">
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
