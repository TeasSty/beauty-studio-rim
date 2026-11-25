import { Booking } from './components/Booking'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Roads } from './components/Roads'
import { Services } from './components/Services'
import { Training } from './components/Training'
import { Works } from './components/Works'

export default function App() {
  return (
    <div className="site">
      <Header />
      <main>
        <Hero />
        <Roads />
        <Works />
        <Services />
        <Training />
        <Booking />
      </main>
      <Footer />
    </div>
  )
}
