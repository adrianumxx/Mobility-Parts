import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ProductsPage from '@/components/ProductsPage'

export const metadata = {
  title: 'Catalogue pièces | Mobility Parts',
  description:
    'Freinage, filtration, moteur, suspension, éclairage, huiles — références OEM et équipementiers avec validation VIN.',
}

export default function ProduitsRoute() {
  return (
    <main>
      <Navbar />
      <ProductsPage />
      <Footer />
    </main>
  )
}
