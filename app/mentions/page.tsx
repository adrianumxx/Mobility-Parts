import type { Metadata } from 'next'
import LegalPage from '@/components/LegalPage'

export const metadata: Metadata = {
  title: 'Mentions légales | Mobility Parts',
  description: 'Informations légales (placeholder) — Mobility Parts.',
}

export default function MentionsPage() {
  return (
    <LegalPage title="Mentions légales" updated="11 avril 2026">
      <p>
        Ce document est un <strong>placeholder</strong>. Remplacez-le par vos données réelles (forme juridique, siège social,
        numéro d’entreprise, TVA, contact DPO, hébergeur, etc.).
      </p>
      <p>
        <strong>Éditeur (fictif) :</strong> Mobility Parts SPRL — Belgique.
      </p>
      <p>
        <strong>Contact :</strong> pro@mobility-parts.be
      </p>
      <p>
        L’accès aux fonctionnalités B2B (tarifs, stocks, commandes) peut être soumis à validation d’un numéro de TVA
        professionnel.
      </p>
    </LegalPage>
  )
}
