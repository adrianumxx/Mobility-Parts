'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, ArrowRight, CheckCircle } from 'lucide-react'

export default function Newsletter() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
  }

  return (
    <section
      className="section"
      ref={ref}
      style={{ background: 'var(--bg-tertiary)' }}
    >
      <div className="container-site">
        <motion.div
          className="relative rounded-3xl overflow-hidden p-8 md:p-14 text-center"
          style={{
            background: 'linear-gradient(135deg, rgba(0,119,255,0.15) 0%, rgba(0,194,255,0.08) 100%)',
            border: '1px solid rgba(0, 119, 255, 0.2)',
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Glow */}
          <div
            className="absolute pointer-events-none"
            style={{
              width: '400px',
              height: '400px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(0,119,255,0.15) 0%, transparent 70%)',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          />

          <div className="relative z-10">
            <div
              className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mx-auto mb-5"
              style={{ background: 'rgba(0, 119, 255, 0.15)', border: '1px solid rgba(0,119,255,0.3)' }}
            >
              <Mail size={26} style={{ color: 'var(--accent)' }} />
            </div>

            <h2
              className="font-display font-bold mb-3"
              style={{ fontSize: 'var(--tx-3xl)', color: 'var(--text-primary)' }}
            >
              Profiteer van exclusieve<br />
              <span className="text-gradient">kortingen & aanbiedingen</span>
            </h2>
            <p className="text-base mb-8 max-w-md mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Meld u aan voor onze nieuwsbrief en ontvang 10% korting op uw eerste bestelling + gratis technische tips.
            </p>

            {!submitted ? (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              >
                <input
                  type="email"
                  className="input flex-1"
                  placeholder="uw@email.be"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  aria-label="E-mailadres"
                />
                <button type="submit" className="btn btn-primary flex-shrink-0">
                  Inschrijven
                  <ArrowRight size={16} />
                </button>
              </form>
            ) : (
              <motion.div
                className="flex items-center justify-center gap-3 py-3"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >
                <CheckCircle size={24} style={{ color: '#10B981' }} />
                <p className="font-semibold" style={{ color: 'var(--text-primary)' }}>
                  Bedankt! Uw kortingscode is onderweg.
                </p>
              </motion.div>
            )}

            <p className="text-xs mt-4" style={{ color: 'var(--text-muted)' }}>
              Geen spam. Uitschrijven op elk moment. Wij respecteren uw privacy (GDPR).
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
