'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Quote, Star, CheckCircle } from 'lucide-react'
import { useLang } from '@/lib/LangContext'
import { cn } from '@/lib/utils'

export default function TestimonialsNew() {
  const { t } = useLang()
  const c = t.comments
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })

  return (
    <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white" ref={containerRef}>
      <div className="relative z-10">
        <div className="text-center max-w-[800px] mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 transparent border border-blue/20 bg-blue/5 rounded-full mb-6"
          >
            <Quote className="w-3 h-3 text-blue" />
            <span className="text-[12px] font-bold uppercase tracking-wider text-blue leading-none">
              {c.kicker}
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-8"
          >
            {c.h2a} <br className="hidden lg:block" /> {c.h2b}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-slate-600 max-w-[600px] mx-auto font-medium"
          >
            {c.sub}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {c.cards.map((card, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + idx * 0.1 }}
              className="group p-8 rounded-2xl bg-slate-50 border border-slate-100/60 hover:bg-white hover:border-blue/20 hover:shadow-xl transition-all duration-500 flex flex-col"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue text-white flex items-center justify-center font-bold text-lg shadow-lg shadow-blue/20 group-hover:scale-110 transition-transform">
                    {card.initials}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900 leading-none mb-1">{card.name}</h4>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">{card.co}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm transition-all group-hover:bg-blue group-hover:border-blue group-hover:text-white">
                  <CheckCircle className="w-3.5 h-3.5 text-blue group-hover:text-white" />
                  <span className="text-[10px] font-black uppercase tracking-wider">{c.badge}</span>
                </div>
              </div>

              <div className="flex gap-1 mb-6 text-orange-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>

              <blockquote className="text-slate-700 font-medium leading-relaxed italic relative">
                <Quote className="absolute -top-1 -left-2 w-4 h-4 text-slate-200 -z-10 group-hover:text-blue/10" />
                {card.text}
              </blockquote>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
