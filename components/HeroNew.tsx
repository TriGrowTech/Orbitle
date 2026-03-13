'use client'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Play, CheckCircle2, Users, Globe, Zap } from 'lucide-react'
import Image from 'next/image'
import { useLang } from '@/lib/LangContext'

export default function HeroNew() {
  const { t } = useLang()
  const h = t.hero

  return (
    <section className="relative overflow-hidden pt-20 pb-20 lg:pt-32 lg:pb-32 bg-white px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[50%] bg-blue/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-[-5%] w-[30%] h-[40%] bg-sky/20 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10">
        <div className="text-center max-w-[900px] mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-3 py-1 transparent border border-blue/20 bg-blue/5 rounded-full mb-8 max-w-full"
          >
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue"></span>
            </span>
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-blue leading-none whitespace-nowrap overflow-hidden text-ellipsis">
              {h.kicker}
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.1] tracking-tight text-slate-900 mb-8"
          >
            {h.h1a} <span className="text-blue">{h.h1b}</span> {h.h1c}
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-[700px] mx-auto mb-10"
          >
            {h.desc}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Button size="lg" className="rounded-full px-8 py-6 h-auto text-base font-semibold group premium">
              {h.cta1}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 py-6 h-auto text-base font-semibold transition-all hover:bg-slate-50">
              <Play className="mr-2 w-4 h-4 fill-current" />
              {h.cta2}
            </Button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500 font-medium"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span>Free 1-week trial</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span>Full branding included</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span>Live in 48 hours</span>
            </div>
          </motion.div>
        </div>

        {/* Dashboard Preview */}
        <motion.div 
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto mt-4 max-w-[1100px]"
        >
          <div className="relative rounded-[2rem] p-2 bg-gradient-to-b from-slate-200/50 to-slate-100 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.12)] border border-slate-200/60 overflow-hidden">
            <div className="relative rounded-[1.4rem] overflow-hidden border border-slate-200/50 bg-white">
              <Image 
                src="/images/dashboard-mockup.png" 
                alt="Orbitle Dashboard" 
                width={1600} 
                height={900} 
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>

          {/* Floating UI Elements */}
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="absolute -left-6 top-1/4 hidden lg:block bg-white p-4 rounded-2xl shadow-xl border border-slate-100 max-w-[200px]"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-blue/10 rounded-lg text-blue">
                <Users className="w-5 h-5" />
              </div>
              <div className="text-xs font-bold text-slate-800">42 {h.agents}</div>
            </div>
            <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full w-2/3 bg-blue rounded-full" />
            </div>
          </motion.div>

          <motion.div 
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="absolute -right-6 bottom-1/4 hidden lg:block bg-white p-4 rounded-2xl shadow-xl border border-slate-100 max-w-[220px]"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-green-50 rounded-lg text-green-600">
                <Zap className="w-5 h-5" />
              </div>
              <div className="text-xs font-bold text-slate-800">New Lead sold → Sara</div>
            </div>
            <p className="text-[10px] text-slate-500 font-medium">sara.sunrisetravel.com · just now</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Trust Indicator / Logo Strip */}
      <div className="mt-20 lg:mt-32 border-y border-slate-100 bg-slate-50/50 py-10">
        <div className="max-w-container mx-auto px-6">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-slate-400 mb-8">
            Trusted by forward-thinking travel operators
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {['Sunrise Travel', 'Horizon Holidays', 'CoastalTours', 'GreenRoutes', 'IndiaXplore'].map((brand) => (
              <span key={brand} className="text-xl font-extrabold text-slate-900 tracking-tighter">
                {brand.toUpperCase()}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
