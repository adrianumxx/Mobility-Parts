'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Quote } from 'lucide-react'
import { testimonials, testimonialsIntro } from '@/lib/site-content'

export default function TrustSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section className="section" ref={ref} style={{ background: 'var(--bg-secondary)' }}>
      <div className="container-site">
        <motion.div
          className="mb-10 text-center"
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="badge badge-accent mb-4">{testimonialsIntro.eyebrow}</span>
          <h2 className="font-display font-bold" style={{ fontSize: 'var(--tx-3xl)', color: 'var(--text-primary)' }}>
            {testimonialsIntro.title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={`${t.name}-${i}`}
              className="card relative overflow-hidden p-6"
              initial={{ opacity: 0, y: 22 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
            >
              <Quote className="mb-3 text-[var(--accent)] opacity-70" size={22} />
              <blockquote className="text-base leading-relaxed text-[var(--text-secondary)]">&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption className="mt-5 border-t border-[var(--border)] pt-4">
                <p className="text-sm font-semibold text-[var(--text-primary)]">{t.name}</p>
                <p className="text-xs text-[var(--text-muted)]">{t.location}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
