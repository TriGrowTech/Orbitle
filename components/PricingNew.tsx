'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Check, Info, Lock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLang } from '@/lib/LangContext'
import { cn } from '@/lib/utils'

export default function PricingNew({ unlocked }: { unlocked: boolean }) {
  const { t } = useLang()
  const p = t.pricing
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })

  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-slate-50 relative overflow-hidden" ref={containerRef}>
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-blue/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-blue/5 rounded-full blur-[80px]" />
      </div>

      <div className="relative z-10">
        <div className="text-center max-w-[800px] mx-auto mb-20 lg:mb-28">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 transparent border border-blue/20 bg-blue/5 rounded-full mb-6"
          >
            <span className="text-[12px] font-bold uppercase tracking-wider text-blue leading-none">
              {p.kicker}
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-8"
          >
            {p.h2a} <br className="hidden lg:block" /> {p.h2b}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-slate-600 max-w-[600px] mx-auto"
          >
            {p.sub}
          </motion.p>
        </div>

        <div className="relative">
          {/* Unlock overlay */}
          {!unlocked && (
            <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
              <div className="w-full h-full bg-slate-50/40 backdrop-blur-[6px] rounded-[3rem]" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md pointer-events-auto p-12 rounded-[2.5rem] bg-white border border-slate-200 shadow-[0_32px_64px_rgba(0,0,0,0.12)] text-center">
                <div className="p-4 rounded-3xl bg-blue/5 text-blue w-fit mx-auto mb-8">
                  <Lock className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{p.lockTitle}</h3>
                <p className="text-slate-600 mb-8">{p.lockSub}</p>
                <Button size="lg" className="w-full rounded-2xl py-6 h-auto text-base font-bold premium" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                  {p.lockCta}
                </Button>
                <p className="mt-4 text-xs text-slate-400 font-medium">{p.lockNote}</p>
              </div>
            </div>
          )}

          <div className={cn("grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8 transition-all duration-700", !unlocked && "blur-[8px] grayscale pointer-events-none opacity-40 select-none scale-[0.98]")}>
            {p.plans.map((plan, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + idx * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={cn(
                  "relative flex flex-col p-8 lg:p-10 rounded-[2.5rem] bg-white border transition-all duration-500 group h-full",
                  plan.featured 
                    ? "border-blue ring-4 ring-blue/5 shadow-[0_40px_80px_rgba(37,99,233,0.16)] lg:scale-105 z-10" 
                    : "border-slate-200/60 shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:shadow-[0_24px_48px_rgba(0,0,0,0.06)] hover:border-blue/30"
                )}
              >
                {plan.featured && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-blue text-white text-xs font-bold uppercase tracking-wider shadow-lg">
                    Most Popular
                  </div>
                )}
                {'badge' in plan && plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-orange-500 text-white text-[10px] font-bold uppercase tracking-wider shadow-md">
                    {plan.badge}
                  </div>
                )}

                <div className="mb-10">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl lg:text-5xl font-black tracking-tight text-slate-900">{plan.price}</span>
                    <span className="text-slate-500 font-bold ml-1">{plan.per}</span>
                  </div>
                  <p className="text-sm text-slate-400 font-semibold mt-2">{plan.bill}</p>
                </div>

                <div className="flex-1">
                  <ul className="space-y-4 mb-10">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-4">
                        <div className="mt-1 p-0.5 rounded-full bg-blue/10 text-blue group-hover:bg-blue group-hover:text-white transition-all duration-200">
                          <Check className="w-3 h-3" />
                        </div>
                        <span className="text-sm font-bold text-slate-700 leading-snug">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button 
                  size="lg" 
                  variant={plan.featured ? "premium" : "outline"}
                  className="w-full rounded-2xl py-6 h-auto text-base font-bold mt-auto group"
                >
                  Get Started
                  <Check className="ml-2 w-5 h-5 hidden group-hover:block transition-all" />
                </Button>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 lg:mt-32 p-8 lg:p-12 rounded-[2.5rem] bg-white border border-slate-200/60 shadow-xl overflow-hidden relative"
        >
          <div className="absolute top-0 right-0 p-8 text-slate-100 hidden lg:block">
            <Info className="w-48 h-48" />
          </div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr,2fr] gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{p.domainNoteTitle}</h3>
              <div className="w-16 h-1.5 bg-blue rounded-full mb-6" />
            </div>
            <p className="text-lg text-slate-600 font-medium leading-relaxed">
              {p.domainNote}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
