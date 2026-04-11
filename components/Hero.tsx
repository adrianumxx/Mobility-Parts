'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion'
import { ArrowRight, ChevronDown, Gauge, PackageSearch, Truck } from 'lucide-react'
import { heroContent, officialBrands } from '@/lib/site-content'

const PARTICLES = [
  { size: 6, x: '12%', y: '18%', duration: 9, delay: 0 },
  { size: 4, x: '78%', y: '14%', duration: 11, delay: 1.2 },
  { size: 8, x: '62%', y: '68%', duration: 8, delay: 0.6 },
  { size: 3, x: '34%', y: '82%', duration: 12, delay: 2 },
  { size: 5, x: '88%', y: '48%', duration: 10, delay: 0.2 },
]

const MINI_STATS = [
  { icon: PackageSearch, label: 'VIN', value: '100%' },
  { icon: Gauge, label: 'Refs', value: '5M+' },
  { icon: Truck, label: 'Cut-off', value: '18h' },
]

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 90, damping: 28 })
  const springY = useSpring(mouseY, { stiffness: 90, damping: 28 })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -110])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0])

  useEffect(() => {
    let reduced = false
    try {
      reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    } catch {
      reduced = false
    }
    if (reduced) return

    const handleMouse = (e: MouseEvent) => {
      const cx = window.innerWidth / 2
      const cy = window.innerHeight / 2
      mouseX.set(((e.clientX - cx) / cx) * 18)
      mouseY.set(((e.clientY - cy) / cy) * 10)
    }
    window.addEventListener('mousemove', handleMouse)
    return () => window.removeEventListener('mousemove', handleMouse)
  }, [mouseX, mouseY])

  const rotateX = useTransform(springY, [-10, 10], [3.5, -3.5])
  const rotateY = useTransform(springX, [-18, 18], [-5, 5])

  return (
    <section ref={containerRef} className="relative flex min-h-screen flex-col justify-center overflow-hidden hero-bg">
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-25" />

      {PARTICLES.map((p, i) => (
        <motion.div
          key={i}
          className="particle"
          style={{
            width: p.size,
            height: p.size,
            left: p.x,
            top: p.y,
          }}
          animate={{
            y: [0, -26, -8, 0],
            x: [0, 12, -8, 0],
            scale: [1, 1.15, 0.95, 1],
            opacity: [0.12, 0.28, 0.12, 0.12],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      <div
        className="pointer-events-none absolute -right-24 -top-24 h-[520px] w-[520px] rounded-full"
        style={{
          background: 'radial-gradient(circle, color-mix(in srgb, var(--accent) 18%, transparent) 0%, transparent 70%)',
        }}
      />
      <div
        className="pointer-events-none absolute -bottom-28 -left-20 h-[420px] w-[420px] rounded-full"
        style={{
          background: 'radial-gradient(circle, color-mix(in srgb, var(--accent-wash) 12%, transparent) 0%, transparent 72%)',
        }}
      />

      <motion.div
        className="container-site relative z-10 pb-20 pt-10"
        style={{ y: heroY, opacity: heroOpacity }}
      >
        <div className="grid min-h-[calc(100vh-140px)] items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="flex flex-col gap-7">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="badge badge-accent">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--accent)]" />
                {heroContent.eyebrow}
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1
                className="font-display font-bold leading-[1.02] tracking-tight"
                style={{ fontSize: 'var(--tx-hero)' }}
              >
                <span style={{ color: 'var(--text-primary)' }}>{heroContent.titleLine1}</span>
                <br />
                <span className="text-gradient">{heroContent.titleGradient}</span>
              </h1>
            </motion.div>

            <motion.p
              className="max-w-xl text-lg leading-relaxed md:text-xl"
              style={{ color: 'var(--text-secondary)' }}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            >
              {heroContent.subtitle}
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link href={heroContent.primaryHref} className="btn btn-primary btn-lg group bg-gradient-accent">
                {heroContent.primaryCta}
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href={heroContent.secondaryHref} className="btn btn-ghost btn-lg">
                {heroContent.secondaryCta}
              </Link>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-3 pt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.5 }}
            >
              {MINI_STATS.map((s, i) => (
                <motion.div
                  key={s.label}
                  className="flex items-center gap-2 rounded-2xl border border-[var(--border)] px-4 py-2"
                  style={{ background: 'var(--bg-secondary)' }}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.45 + i * 0.08 }}
                >
                  <s.icon size={16} className="text-[var(--accent)]" />
                  <div className="leading-tight">
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-[var(--text-muted)]">
                      {s.label}
                    </p>
                    <p className="text-sm font-bold text-[var(--text-primary)]">{s.value}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="relative flex items-center justify-center"
            style={{ perspective: 1200 }}
            initial={{ opacity: 0, y: -56, rotateX: 18, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
            transition={{ duration: 1.05, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
              className="relative w-full max-w-lg"
            >
              <div
                className="noise relative overflow-hidden rounded-[28px] border border-[var(--border-strong)] p-6 shadow-xl"
                style={{ background: 'var(--bg-secondary)' }}
              >
                <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[28px]">
                  <div
                    className="absolute left-0 right-0 h-0.5"
                    style={{
                      background:
                        'linear-gradient(90deg, transparent, color-mix(in srgb, var(--accent) 65%, transparent), transparent)',
                      animation: 'scanLine 4.2s linear infinite',
                      top: 0,
                    }}
                  />
                </div>

                <div className="mb-5 flex items-center justify-between gap-3">
                  <div>
                    <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">
                      Distributeurs officiels
                    </p>
                    <p className="font-display text-lg font-bold text-[var(--text-primary)]">Marques synchronisées</p>
                  </div>
                  <span className="rounded-full border border-[var(--border)] px-3 py-1 text-xs font-semibold text-[var(--text-muted)]">
                    Live
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {officialBrands.map((brand) => (
                    <div
                      key={brand}
                      className="rounded-xl border border-[var(--border)] bg-[var(--bg-tertiary)] px-2 py-3 text-center font-display text-xs font-bold text-[var(--text-primary)]"
                    >
                      {brand}
                    </div>
                  ))}
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-primary)] p-4">
                    <p className="text-xs font-semibold text-[var(--text-muted)]">Filet logistique</p>
                    <p className="mt-1 font-display text-2xl font-bold text-[var(--text-primary)]">J+1</p>
                    <p className="text-xs text-[var(--text-secondary)]">Avant midi en atelier</p>
                  </div>
                  <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-primary)] p-4">
                    <p className="text-xs font-semibold text-[var(--text-muted)]">Précision VIN</p>
                    <p className="mt-1 font-display text-2xl font-bold text-[var(--accent)]">99.9%</p>
                    <p className="text-xs text-[var(--text-secondary)]">Filtrage erreurs</p>
                  </div>
                </div>

                <Link
                  href="/produits"
                  className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl py-3 text-sm font-semibold text-on-accent transition-opacity hover:opacity-95 bg-gradient-accent"
                >
                  Explorer le catalogue pro
                  <ArrowRight size={16} />
                </Link>
              </div>

              <motion.div
                className="absolute -right-4 -top-4 rounded-2xl border border-[var(--border-strong)] px-4 py-3 shadow-lg"
                style={{ background: 'var(--bg-tertiary)', transform: 'translateZ(36px)' }}
                animate={{ y: [0, -7, 0] }}
                transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <p className="font-display text-xl font-bold text-[var(--accent)]">Stock réel</p>
                <p className="text-xs text-[var(--text-muted)]">Pas de ghost inventory</p>
              </motion.div>

              <motion.div
                className="absolute -bottom-5 -left-4 rounded-2xl border border-[var(--border-strong)] px-4 py-3 shadow-lg"
                style={{ background: 'var(--bg-tertiary)', transform: 'translateZ(24px)' }}
                animate={{ y: [0, 7, 0] }}
                transition={{ duration: 6.4, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
              >
                <p className="text-sm font-semibold text-[var(--text-primary)]">Réseau Pologne → BE</p>
                <p className="text-xs text-[var(--text-muted)]">Flux direct garages</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 scroll-indicator">
        <p className="text-xs uppercase tracking-[0.28em] text-[var(--text-muted)]">Scroll</p>
        <ChevronDown size={18} className="text-[var(--text-muted)]" />
      </div>
    </section>
  )
}
