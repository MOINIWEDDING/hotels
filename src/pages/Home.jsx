import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero'
import DayPass from '../components/DayPass'
import Restaurant from '../components/Restaurant'
import WeddingsEvents from '../components/WeddingsEvents'
import Accommodation from '../components/Accommodation'
import Gallery from '../components/Gallery'

export default function Home() {
  const location = useLocation()

  // Permite navegar desde otras páginas a una sección con /#alojamiento
  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash)
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 150)
    }
  }, [location])

  return (
    <>
      <Hero />
      <DayPass />
      <Restaurant />
      <WeddingsEvents />
      <Accommodation />
      <Gallery />
    </>
  )
}
