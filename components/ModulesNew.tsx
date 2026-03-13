'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ShoppingCart, LayoutDashboard, UserCircle, Share2, Check, ShieldCheck, Award, Zap } from 'lucide-react'
import { useLang } from '@/lib/LangContext'

const LucideIcons = [ShoppingCart, LayoutDashboard, UserCircle, Share2]

export default function ModulesNew() {
  const { t } = useLang()
  const m = t.modules
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })

  return (
    <section id="modules" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden bg-white" ref={containerRef}>
      <div className="relative z-10">
        <div className="text-center max-w-[800px] mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 transparent border border-blue/20 bg-blue/5 rounded-full mb-6"
          >
            <Zap className="w-3.5 h-3.5 text-blue" />
            <span className="text-[12px] font-bold uppercase tracking-wider text-blue leading-none">
              {m.kicker}
            </span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-6 uppercase">
              {m.h2a} <br className="hidden lg:block" /> {m.h2b}
            </h2>
            <p className="text-xl font-bold text-blue tracking-tight mb-8">
              {m.infrastructureMessage}
            </p>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-slate-600 max-w-[650px] mx-auto font-medium"
          >
            {m.sub}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {m.cards.map((card, idx) => {
            const Icon = LucideIcons[idx]
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + idx * 0.1 }}
                className="group flex flex-col h-full p-6 rounded-[2rem] bg-white border border-slate-100 shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:shadow-[0_32px_64px_rgba(0,0,0,0.1)] hover:border-blue/30 transition-all duration-500 relative"
              >
                <div className="flex-1 flex flex-col">
                  <div className="p-4 rounded-xl bg-blue/5 text-blue w-fit mb-6 group-hover:bg-blue group-hover:text-white transition-all duration-500">
                    <Icon className="w-7 h-7" />
                  </div>

                  <div className="relative aspect-video rounded-xl overflow-hidden border border-slate-50 mb-6">
                     <img 
                      src={[
                        "/images/marketplace.png", 
                        "/images/dashboard-mockup.png", 
                        "/images/agent-portal.png", 
                        "/images/agent-subdomain.png"
                      ][idx]} 
                      alt={card.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-slate-600 text-[13px] font-medium leading-relaxed mb-6">
                    {card.desc}
                  </p>
                </div>

                <ul className="space-y-2.5 pt-5 border-t border-slate-100 mt-auto">
                  {card.points.map((p, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5">
                      <div className="mt-1 p-0.5 rounded-full bg-blue/10 text-blue">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="text-[11px] font-bold text-slate-700">
                        {p}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>

        {/* Value Message & Security Trust Bar */}
        <div className="space-y-12">
          {/* Value Promo */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 lg:p-12 rounded-[2.5rem] bg-slate-900 text-white relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
              <div className="max-w-[600px]">
                <div className="flex items-center gap-2 mb-4 justify-center lg:justify-start">
                  <div className="p-2 bg-blue rounded-lg">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400">
                    {m.valueKicker}
                  </span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-extrabold tracking-tight leading-tight">
                  {m.valueStatement}
                </h3>
              </div>
              <div className="flex flex-col items-center lg:items-end gap-2">
                <span className="text-4xl font-black text-blue tracking-tighter">₹999<span className="text-sm font-normal text-slate-400">/mo</span></span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">All-Inclusive Infrastructure</span>
              </div>
            </div>
          </motion.div>

          {/* Data Security Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="p-8 lg:p-10 rounded-[2.5rem] border border-blue/10 bg-blue/5 flex flex-col md:flex-row items-center gap-8 md:gap-12"
          >
            <div className="w-20 h-20 rounded-3xl bg-white shadow-xl flex items-center justify-center text-blue shrink-0 transform -rotate-3 group-hover:rotate-0 transition-transform">
              <ShieldCheck className="w-10 h-10" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h4 className="text-2xl font-extrabold text-slate-900 mb-3 tracking-tight">
                {m.security.title}
              </h4>
              <p className="text-slate-600 font-medium leading-relaxed max-w-[800px]">
                {m.security.desc}
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-slate-100 shadow-sm text-xs font-bold text-slate-700">
                <Check className="w-4 h-4 text-green-500" />
                100% Data Ownership
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-slate-100 shadow-sm text-xs font-bold text-slate-700">
                <Check className="w-4 h-4 text-green-500" />
                Zero Lead Leakage
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
