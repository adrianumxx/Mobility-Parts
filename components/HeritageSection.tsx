'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { dnaContent, storyContent } from '@/lib/site-content'

export default function HeritageSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.12 })

  return (
    <section className="section" ref={ref}>
      <div className="container-site grid gap-12 lg:grid-cols-2 lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
        >
          <span className="badge badge-accent mb-3">{dnaContent.eyebrow}</span>
          <h2 className="font-display font-bold leading-tight" style={{ fontSize: 'var(--tx-3xl)', color: 'var(--text-primary)' }}>
            {dnaContent.title}
          </h2>
          <div className="mt-5 space-y-4 text-base leading-relaxed text-[var(--text-secondary)]">
            {dnaContent.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4">
            {dnaContent.stats.map((s) => (
              <div key={s.label} className="rounded-2xl border border-[var(--border)] bg-[var(--bg-secondary)] p-5">
                <p className="stat-number">{s.value}</p>
                <p className="mt-1 text-sm text-[var(--text-muted)]">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="rounded-[28px] border border-[var(--border-strong)] bg-[var(--bg-secondary)] p-8 shadow-lg"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.08 }}
        >
          <span className="badge badge-accent mb-3">{storyContent.eyebrow}</span>
          <h3 className="font-display text-2xl font-bold text-[var(--text-primary)]">{storyContent.title}</h3>
          <div className="mt-5 space-y-4 text-sm leading-relaxed text-[var(--text-secondary)] md:text-base">
            {storyContent.blocks.map((block) => (
              <p key={block}>{block}</p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
