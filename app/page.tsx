import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import BrandsStrip from '@/components/BrandsStrip'
import StatsStrip from '@/components/StatsStrip'
import LogisticsSection from '@/components/LogisticsSection'
import Categories from '@/components/Categories'
import FeaturedProducts from '@/components/FeaturedProducts'
import TrustSection from '@/components/TrustSection'
import HeritageSection from '@/components/HeritageSection'
import ProAccessForm from '@/components/ProAccessForm'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <BrandsStrip />
      <StatsStrip />
      <LogisticsSection />
      <Categories />
      <FeaturedProducts />
      <TrustSection />
      <HeritageSection />
      <ProAccessForm />
      <Footer />
    </main>
  )
}
