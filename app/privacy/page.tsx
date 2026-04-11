import type { Metadata } from 'next'
import LegalPage from '@/components/LegalPage'

export const metadata: Metadata = {
  title: 'Confidentialité | Mobility Parts',
  description: 'Politique de confidentialité (placeholder) — Mobility Parts.',
}

export default function PrivacyPage() {
  return (
    <LegalPage title="Politique de confidentialité" updated="11 avril 2026">
      <p>
        Texte <strong>placeholder</strong> : décrivez ici le traitement des données personnelles (bases légales, durées de
        conservation, destinataires, transferts hors UE, droits RGPD, réclamations auprès de l’APD).
      </p>
      <p>
        Les demandes d’accès professionnel collectent des données strictement nécessaires à l’ouverture d’un compte B2B
        (ex. TVA, contact). Branchez votre CRM ou outil interne sur l’endpoint{' '}
        <code className="rounded bg-[var(--bg-tertiary)] px-1.5 py-0.5 text-sm text-[var(--text-primary)]">
          POST /api/pro-login
        </code>{' '}
        pour persister côté serveur.
      </p>
      <p>
        Cookies : si vous ajoutez une bannière CMP, documentez les finalités et la durée de conservation des traceurs.
      </p>
    </LegalPage>
  )
}
