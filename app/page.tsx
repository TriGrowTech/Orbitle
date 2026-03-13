'use client'
import { useState, useEffect } from 'react'
import TopBar from '@/components/TopBar'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import UrgencyStrip from '@/components/UrgencyStrip'
import HowItWorks from '@/components/HowItWorks'
import Modules from '@/components/Modules'
import WhyOrbitle from '@/components/WhyOrbitle'
import LogoStrip from '@/components/LogoStrip'
import WaitlistComments from '@/components/WaitlistComments'
import Pricing from '@/components/Pricing'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

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
        <UrgencyStrip slots={slots} />
        <HowItWorks />
        <Modules />
        <WhyOrbitle />
        <LogoStrip />
        <WaitlistComments />
        <Pricing unlocked={pricingUnlocked} />
        <Contact slots={slots} onSuccess={handleFormSuccess} />
      </main>
      <Footer />
    </>
  )
}
