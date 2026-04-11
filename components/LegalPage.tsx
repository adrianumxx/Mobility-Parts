import type { ReactNode } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function LegalPage({
  title,
  updated,
  children,
}: {
  title: string
  updated: string
  children: ReactNode
}) {
  return (
    <main>
      <Navbar />
      <div className="container-site section max-w-3xl">
        <p className="badge badge-accent mb-4">Document juridique (placeholder)</p>
        <h1 className="mb-2 font-display font-bold" style={{ fontSize: 'var(--tx-3xl)', color: 'var(--text-primary)' }}>
          {title}
        </h1>
        <p className="mb-8 text-sm text-[var(--text-muted)]">Dernière mise à jour (fictive) : {updated}</p>
        <div className="space-y-5 text-base leading-relaxed text-[var(--text-secondary)]">{children}</div>
      </div>
      <Footer />
    </main>
  )
}
