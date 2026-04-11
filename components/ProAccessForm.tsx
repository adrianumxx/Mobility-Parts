'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { CheckCircle2 } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useProAccessSubmit } from '@/hooks/useProAccessSubmit'
import { proAccessContent } from '@/lib/site-content'
import { type ProLoginRequest, proLoginRequestSchema } from '@/lib/schemas'

export default function ProAccessForm() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })
  const [sent, setSent] = useState(false)
  const { submit, error, setError } = useProAccessSubmit()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ProLoginRequest>({
    resolver: zodResolver(proLoginRequestSchema),
    defaultValues: {
      companyName: '',
      vatNumber: '',
      fullName: '',
      phone: '',
      email: '',
    },
  })

  const onSubmit = handleSubmit(async (data) => {
    setError(null)
    try {
      await submit(data)
      setSent(true)
    } catch {
      /* message déjà dans `error` */
    }
  })

  return (
    <section id="acces-pro" className="section" ref={ref} style={{ background: 'var(--bg-tertiary)' }}>
      <div className="container-site">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="badge badge-accent mb-3">{proAccessContent.eyebrow}</span>
          <h2 className="font-display font-bold" style={{ fontSize: 'var(--tx-3xl)', color: 'var(--text-primary)' }}>
            {proAccessContent.title}
          </h2>
          <p className="mt-3 text-base text-[var(--text-secondary)]">{proAccessContent.subtitle}</p>
        </motion.div>

        <motion.div
          className="mx-auto mt-10 max-w-xl rounded-[28px] border border-[var(--border-strong)] bg-[var(--bg-secondary)] p-8 shadow-xl"
          initial={{ opacity: 0, y: 22 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.08 }}
        >
          <h3 className="font-display text-lg font-bold text-[var(--text-primary)]">{proAccessContent.formTitle}</h3>

          {sent ? (
            <motion.div
              className="mt-6 flex items-start gap-3 rounded-2xl border border-[var(--border)] bg-[var(--bg-primary)] p-4"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
            >
              <CheckCircle2 className="mt-0.5 text-[var(--accent)]" size={22} />
              <div>
                <p className="font-semibold text-[var(--text-primary)]">{proAccessContent.successTitle}</p>
                <p className="mt-1 text-sm leading-relaxed text-[var(--text-secondary)]">{proAccessContent.successBody}</p>
              </div>
            </motion.div>
          ) : (
            <form className="mt-6 space-y-4" onSubmit={onSubmit} noValidate>
              {error && (
                <p className="rounded-xl border border-[var(--border)] bg-[var(--bg-primary)] px-3 py-2 text-sm" style={{ color: 'var(--error)' }}>
                  {error}
                </p>
              )}
              <div>
                <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-[var(--text-muted)]">
                  Nom entreprise *
                </label>
                <input className="input" autoComplete="organization" {...register('companyName')} />
                {errors.companyName && (
                  <p className="mt-1 text-xs" style={{ color: 'var(--error)' }}>
                    {errors.companyName.message}
                  </p>
                )}
              </div>
              <div>
                <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-[var(--text-muted)]">
                  Numéro de TVA *
                </label>
                <input className="input" autoComplete="on" {...register('vatNumber')} />
                {errors.vatNumber && (
                  <p className="mt-1 text-xs" style={{ color: 'var(--error)' }}>
                    {errors.vatNumber.message}
                  </p>
                )}
              </div>
              <div>
                <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-[var(--text-muted)]">
                  Nom &amp; Prénom *
                </label>
                <input className="input" autoComplete="name" {...register('fullName')} />
                {errors.fullName && (
                  <p className="mt-1 text-xs" style={{ color: 'var(--error)' }}>
                    {errors.fullName.message}
                  </p>
                )}
              </div>
              <div>
                <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-[var(--text-muted)]">
                  GSM *
                </label>
                <input className="input" inputMode="tel" autoComplete="tel" {...register('phone')} />
                {errors.phone && (
                  <p className="mt-1 text-xs" style={{ color: 'var(--error)' }}>
                    {errors.phone.message}
                  </p>
                )}
              </div>
              <div>
                <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-[var(--text-muted)]">
                  Email pro *
                </label>
                <input className="input" type="email" autoComplete="email" {...register('email')} />
                {errors.email && (
                  <p className="mt-1 text-xs" style={{ color: 'var(--error)' }}>
                    {errors.email.message}
                  </p>
                )}
              </div>
              <button type="submit" className="btn btn-primary btn-lg w-full justify-center bg-gradient-accent" disabled={isSubmitting}>
                {isSubmitting ? 'Envoi…' : proAccessContent.submitLabel}
              </button>
              <p className="text-center text-xs text-[var(--text-muted)]">
                Données traitées conformément au RGPD — usage strictement professionnel.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
