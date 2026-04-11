export type CatalogFamily =
  | 'Freinage'
  | 'Filtration'
  | 'Moteur'
  | 'Suspension'
  | 'Éclairage'
  | 'Huiles'

export type CatalogReferenceRow = {
  id: number
  label: string
  family: CatalogFamily
  oem: string
  brand: string
  inStock: boolean
}

export const catalogReferences: CatalogReferenceRow[] = [
  { id: 1, label: 'Plaquettes avant performance', family: 'Freinage', oem: 'BRK-TRW-9182', brand: 'TRW', inStock: true },
  { id: 2, label: 'Disques ventilés Ø308', family: 'Freinage', oem: 'BRK-ZIM-4404', brand: 'Zimmermann', inStock: true },
  { id: 3, label: 'Filtre à huile longue durée', family: 'Filtration', oem: 'FLT-BSH-4512', brand: 'Bosch', inStock: true },
  { id: 4, label: 'Filtre habitacle charbon actif', family: 'Filtration', oem: 'FLT-VLE-8831', brand: 'Valeo', inStock: false },
  { id: 5, label: 'Kit distribution + pompe à eau', family: 'Moteur', oem: 'ENG-LUK-7720', brand: 'Luk', inStock: true },
  { id: 6, label: 'Bobine d’allumage smart coil', family: 'Moteur', oem: 'ENG-BSH-2219', brand: 'Bosch', inStock: true },
  { id: 7, label: 'Amortisseur gaz arrière', family: 'Suspension', oem: 'SUS-TRW-5091', brand: 'TRW', inStock: true },
  { id: 8, label: 'Rotule de direction renforcée', family: 'Suspension', oem: 'SUS-MXG-221', brand: 'Max Gear', inStock: true },
  { id: 9, label: 'Phare LED complet gauche', family: 'Éclairage', oem: 'LED-VLE-1190', brand: 'Valeo', inStock: true },
  { id: 10, label: 'Ampoules halogène H7 longue portée', family: 'Éclairage', oem: 'LED-BSH-778', brand: 'Bosch', inStock: true },
  { id: 11, label: 'Huile 5W-30 LL synthétique', family: 'Huiles', oem: 'OIL-CAS-5W30', brand: 'Castrol', inStock: true },
  { id: 12, label: 'Liquide de frein DOT4 LV', family: 'Huiles', oem: 'OIL-TRW-DOT4', brand: 'TRW', inStock: true },
]
