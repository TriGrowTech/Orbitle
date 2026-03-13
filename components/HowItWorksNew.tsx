'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Globe, Users, TrendingUp, Check } from 'lucide-react'
import { useLang } from '@/lib/LangContext'

export default function HowItWorksNew() {
  const { t } = useLang()
  const h = t.how
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })

  const icons = [Globe, Users, TrendingUp]

  return (
    <section id="how" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-slate-50 overflow-hidden" ref={containerRef}>
      <div className="relative z-10">
        <div className="text-center max-w-[800px] mx-auto mb-20 lg:mb-28">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 transparent border border-blue/20 bg-blue/5 rounded-full mb-6"
          >
            <span className="text-[12px] font-bold uppercase tracking-wider text-blue leading-none">
              {h.kicker}
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-8"
          >
            {h.h2a} <br className="hidden lg:block" /> {h.h2b}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-slate-600 max-w-[600px] mx-auto"
          >
            {h.sub}
          </motion.p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          {/* Connector Line (Desktop) */}
          <div className="absolute top-[60px] left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-blue/10 via-blue/40 to-blue/10 hidden md:block" />

          {h.steps.map((step, idx) => {
            const Icon = icons[idx]
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + idx * 0.15 }}
                className="relative group"
              >
                {/* Step Number Circle */}
                <div className="relative z-10 w-16 h-16 rounded-2xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex items-center justify-center mb-10 group-hover:border-blue/50 group-hover:shadow-blue/10 transition-all duration-300 transform group-hover:-translate-y-1">
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-blue text-white text-xs font-bold flex items-center justify-center shadow-lg">
                    {step.num}
                  </div>
                  <Icon className="w-7 h-7 text-blue" />
                </div>

                <div className="p-8 rounded-3xl bg-white border border-slate-200/60 shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] group-hover:border-blue/20 transition-all duration-500">
                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-green-50 text-green-700 text-[10px] font-bold uppercase tracking-wider mb-4 border border-green-100">
                    <Check className="w-3 h-3" />
                    {step.tag}
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-4 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed font-medium">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
