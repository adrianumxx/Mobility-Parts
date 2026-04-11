import type { Metadata } from 'next'
import LegalPage from '@/components/LegalPage'

export const metadata: Metadata = {
  title: 'Conditions B2B | Mobility Parts',
  description: 'Conditions générales B2B (placeholder) — Mobility Parts.',
}

export default function TermsPage() {
  return (
    <LegalPage title="Conditions générales B2B" updated="11 avril 2026">
      <p>
        Document <strong>placeholder</strong> : intégrez vos CGV/CGT propres au commerce de gros (paiement, retours,
        garanties légales, clauses de limitation, litiges, droit applicable).
      </p>
      <p>
        Les tarifs nets, délais de livraison et disponibilités affichés dans l’espace connecté prévalent sur toute
        indication générique du site marketing.
      </p>
      <p>
        Pour un devis dynamique, remplacez la réponse fictive de{' '}
        <code className="rounded bg-[var(--bg-tertiary)] px-1.5 py-0.5 text-sm text-[var(--text-primary)]">
          POST /api/quote
        </code>{' '}
        par votre moteur tarifaire.
      </p>
    </LegalPage>
  )
}
