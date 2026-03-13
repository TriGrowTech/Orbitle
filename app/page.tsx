'use client'
// Orbitle — Premium SaaS Landing Page
import { useState, useEffect } from 'react'
import TopBar from '@/components/TopBarNew'
import Nav from '@/components/NavNew'
import Hero from '@/components/HeroNew'
import HowItWorks from '@/components/HowItWorksNew'
import Modules from '@/components/ModulesNew'
import WhyOrbitle from '@/components/WhyOrbitleNew'
import Testimonials from '@/components/TestimonialsNew'
import Pricing from '@/components/PricingNew'
import Contact from '@/components/ContactNew'
import Footer from '@/components/FooterNew'

export default function Home() {
  const [slots, setSlots] = useState(47)
  const [pricingUnlocked, setPricingUnlocked] = useState(false)

  // Slowly tick down slots to create organic urgency
  useEffect(() => {
    const timers = [32000, 85000, 150000, 240000].map((delay) =>
      setTimeout(() => setSlots(s => Math.max(43, s - 1)), delay)
    )
    return () => timers.forEach(clearTimeout)
  }, [])

  const handleFormSuccess = () => {
    setPricingUnlocked(true)
    // Scroll to pricing after a beat so user sees the reveal
    setTimeout(() => {
      document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 900)
  }

  return (
    <>
      <TopBar slots={slots} />
      <Nav />
      <main>
        <Hero />
        <HowItWorks />
        <Modules />
        <WhyOrbitle />
        <Testimonials />
        <Pricing unlocked={pricingUnlocked} />
        <Contact slots={slots} onSuccess={handleFormSuccess} />
      </main>
      <Footer />
    </>
  )
}
