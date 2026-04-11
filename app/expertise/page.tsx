import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import HeritageSection from '@/components/HeritageSection'
import { expertisePage } from '@/lib/site-content'

export const metadata = {
  title: 'Expertise | Mobility Parts',
  description: expertisePage.subtitle,
}

export default function ExpertisePage() {
  return (
    <main>
      <Navbar />
      <div style={{ background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border)' }}>
        <div className="container-site py-14">
          <p className="badge badge-accent mb-4">Expertise</p>
          <h1 className="font-display font-bold" style={{ fontSize: 'var(--tx-4xl)', color: 'var(--text-primary)' }}>
            {expertisePage.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            {expertisePage.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/produits" className="btn btn-ghost">
              Voir le catalogue
            </Link>
            <Link href="/#acces-pro" className="btn btn-primary bg-gradient-accent">
              Espace pro
            </Link>
          </div>
        </div>
      </div>
      <div className="container-site section">
        <div className="grid gap-5 md:grid-cols-3">
          {expertisePage.highlights.map((h) => (
            <article key={h.title} className="card p-6">
              <h2 className="font-display text-lg font-bold text-[var(--text-primary)]">{h.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">{h.body}</p>
            </article>
          ))}
        </div>
      </div>
      <HeritageSection />
      <Footer />
    </main>
  )
}
