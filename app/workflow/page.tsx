import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { workflowPage } from '@/lib/site-content'

export const metadata = {
  title: 'Workflow atelier | Mobility Parts',
  description: workflowPage.subtitle,
}

export default function WorkflowPage() {
  return (
    <main>
      <Navbar />
      <div style={{ background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border)' }}>
        <div className="container-site py-14">
          <p className="badge badge-accent mb-4">Workflow</p>
          <h1 className="font-display font-bold" style={{ fontSize: 'var(--tx-4xl)', color: 'var(--text-primary)' }}>
            {workflowPage.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            {workflowPage.subtitle}
          </p>
          <Link href="/#acces-pro" className="btn btn-primary mt-8 inline-flex bg-gradient-accent">
            Demander votre accès
          </Link>
        </div>
      </div>
      <div className="container-site section">
        <ol className="grid gap-6 md:grid-cols-2">
          {workflowPage.steps.map((step, i) => (
            <li key={step.title} className="card p-6">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[var(--accent)]">
                Étape {i + 1}
              </p>
              <h2 className="font-display text-xl font-bold text-[var(--text-primary)]">{step.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
      <Footer />
    </main>
  )
}
