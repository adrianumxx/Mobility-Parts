export const siteMeta = {
  name: 'Mobility Parts',
  tagline: 'Distributeur de pièces auto B2B',
  locale: 'fr-BE',
}

export const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/workflow', label: 'Workflow' },
  { href: '/produits', label: 'Produits' },
  { href: '/expertise', label: 'Expertise' },
] as const

export const heroContent = {
  eyebrow: 'Distributeur officiel',
  titleLine1: 'La référence',
  titleGradient: 'pour les pros.',
  subtitle:
    'Pièces multi-marques, identification VIN, stock réel et logistique pensée pour les ateliers belges. Moins d’erreurs, moins d’immobilisation.',
  primaryCta: 'Demander votre accès',
  primaryHref: '#acces-pro',
  secondaryCta: 'Voir le catalogue',
  secondaryHref: '/produits',
}

export const kpiStrip = [
  { title: 'Vérification VIN', body: 'Compatibilité 100%.' },
  { title: '5M+ Références', body: 'Stock constructeur.' },
  { title: 'Livraison J+1', body: 'Commande < 18h.' },
] as const

export const officialBrands = [
  'Max Gear',
  'Cuarro',
  'TRW',
  'Zimmermann',
  'Castrol',
  'Luk',
  'Bosch',
  'Valeo',
] as const

export const logisticsIntro = {
  eyebrow: 'Logistique',
  title: 'Une logistique qui fait la différence',
  subtitle:
    'Optimisé pour réduire vos coûts d’immobilisation et maximiser votre rotation d’atelier.',
}

export const logisticsPillars = [
  {
    title: 'Connexion Sécurisée',
    body: 'Accédez à votre espace pro personnalisé avec vos conditions tarifaires nettes et un historique complet de vos commandes.',
    icon: 'lock' as const,
  },
  {
    title: 'Identification Précise',
    body: "Notre système VIN avancé filtre 99.9% des erreurs. Vous ne voyez que les pièces compatibles avec le véhicule de votre client.",
    icon: 'search' as const,
  },
  {
    title: 'Stock & Prix Nets',
    body: "Visibilité en temps réel sur la disponibilité. Pas de surprise : ce qui est indiqué 'en stock' est réellement sur nos étagères.",
    icon: 'box' as const,
  },
  {
    title: 'Livraison J+1',
    body: 'Toute commande validée avant 18h00 part le soir même pour une livraison garantie le lendemain matin avant midi dans votre atelier.',
    icon: 'truck' as const,
  },
]

export const catalogIntro = {
  eyebrow: 'Catalogue',
  title: 'Pièces Premium',
  subtitle:
    'Catalogue exhaustif multi-marques : références constructeurs, OEM et équipementiers, avec identification VIN pour une compatibilité sans erreur.',
  cta: 'Voir tout le catalogue',
  ctaHref: '/produits',
}

export const catalogFamilies = [
  { group: 'Sécurité', label: 'Freinage', icon: 'gauge' as const },
  { group: 'Entretien', label: 'Filtration', icon: 'layers' as const },
  { group: 'Technique', label: 'Moteur', icon: 'cpu' as const },
  { group: 'Châssis', label: 'Suspension', icon: 'wrench' as const },
  { group: 'Vision', label: 'Éclairage', icon: 'light' as const },
  { group: 'Fluides', label: 'Huiles', icon: 'droplet' as const },
] as const

export const catalogBento = [
  {
    title: 'OEM & équipementiers',
    body: 'TRW, Bosch, Valeo, Zimmermann… accès direct aux gammes pro.',
    icon: 'shield' as const,
  },
  {
    title: 'VIN-first',
    body: 'Recherche guidée : fini les retours pour incompatibilité.',
    icon: 'badge' as const,
  },
  {
    title: 'Asie & premium',
    body: 'Couverture étendue, y compris les marques asiatiques demandées par vos clients.',
    icon: 'spark' as const,
  },
] as const

export const testimonialsIntro = {
  eyebrow: 'Avis clients',
  title: 'Ces garagistes nous font confiance',
}

export const testimonials = [
  {
    quote:
      'Depuis que nous travaillons avec Mobility Parts, nous avons réduit nos retours de 80%. L’identification par VIN est infaillible.',
    name: 'Midas',
    location: 'Bruxelles, 1030',
  },
  {
    quote:
      'Livraison toujours à l’heure le lendemain matin. C’est crucial pour notre planning d’atelier.',
    name: 'Bosch Car Service',
    location: 'Anderlecht, 1070',
  },
  {
    quote:
      'Le catalogue est complet, même pour les marques asiatiques. Tarifs nets très compétitifs pour les pros.',
    name: 'MJ Garage',
    location: 'Ixelles, 1050',
  },
  {
    quote: 'Un service client qui répond vraiment au téléphone. Ça change tout quand on a un doute.',
    name: 'Eurorepar',
    location: 'Schaerbeek, 1030',
  },
  {
    quote:
      'Rapidité, efficacité. Les pièces arrivent bien emballées et correspondent toujours à la commande.',
    name: 'Mecanique V',
    location: 'Jette, 1090',
  },
] as const

export const dnaContent = {
  eyebrow: 'Notre ADN',
  title: 'L’expertise mécanique réinventée.',
  paragraphs: [
    'Chez Mobility Parts, nous parlons le même langage que vous. Nous savons qu’un pont bloqué coûte cher.',
    'Distribution repensée : plus rapide, plus précise, et plus fiable. Pas d’erreur de commande, pas de délai flou.',
  ],
  stats: [
    { value: '98%', label: 'Satisfaction' },
    { value: '+78', label: 'Constructeurs' },
  ],
}

export const storyContent = {
  eyebrow: 'Notre histoire',
  title: 'La réponse à un problème universel.',
  blocks: [
    'Toutes les concessions auto ont le même problème : la logistique. Après avoir travaillé pour les plus grands distributeurs automobiles, le fondateur de Mobility Parts a repéré toujours la même faiblesse : trop d’intermédiaires, trop de retard, trop d’erreurs… et des coûts qui explosent.',
    'Mobility Parts casse cette chaîne.',
    'Grâce à un réseau de partenaires béton en Pologne et une logistique pensée uniquement pour les garagistes, on supprime les couches inutiles, on sécurise les flux et on accélère la disponibilité des pièces.',
    'Résultat : moins d’attente, moins de ponts bloqués, plus de rentabilité pour les garages qui n’acceptent plus de perdre de l’argent à cause de leurs fournisseurs.',
  ],
}

export const proAccessContent = {
  eyebrow: 'Espace professionnel',
  title: 'Rejoignez le réseau leader.',
  subtitle: 'Accès réservé aux professionnels.',
  formTitle: 'Demandez un login',
  submitLabel: 'Demandez un login',
  successTitle: 'Demande reçue',
  successBody:
    'Notre équipe vérifie votre numéro de TVA et vous contacte sous 24h ouvrées avec vos accès.',
}

export const workflowPage = {
  title: 'Workflow atelier',
  subtitle:
    'Un flux simple : identifier le véhicule, valider la pièce, recevoir demain matin. Conçu pour réduire les allers-retours.',
  steps: [
    {
      title: 'VIN & véhicule',
      body: 'Saisissez le VIN : le catalogue se restreint aux références compatibles.',
    },
    {
      title: 'Prix nets & stock',
      body: 'Conditions pro, disponibilité temps réel, historique de commandes.',
    },
    {
      title: 'Validation avant 18h',
      body: 'Expédition le soir même pour une mise à disposition J+1 avant midi.',
    },
    {
      title: 'Suivi & SAV',
      body: 'Une équipe joignable pour lever les doutes techniques avant achat.',
    },
  ],
}

export const expertisePage = {
  title: 'Expertise fournisseur',
  subtitle:
    'Nous combinons data VIN, sourcing multi-marques et logistique courte pour sécuriser votre marge et votre planning.',
  highlights: [
    {
      title: 'Fiabilité catalogue',
      body: 'Références constructeur, alternatives OEM et équipementiers premium.',
    },
    {
      title: 'Zéro friction',
      body: 'Interface pro, tarifs nets, pas de surprises sur le stock.',
    },
    {
      title: 'Couverture belge',
      body: 'Livraisons structurées pour alimenter les ateliers bruxellois et wallons.',
    },
  ],
}
