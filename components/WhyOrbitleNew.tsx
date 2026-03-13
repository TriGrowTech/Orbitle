'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Check, ArrowRight, Zap, Target, Globe, Shield, TrendingUp } from 'lucide-react'
import { useLang } from '@/lib/LangContext'

const LucideIcons = [Zap, Globe, Target]

export default function WhyOrbitleNew() {
  const { t } = useLang()
  const w = t.why
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })

  return (
    <section id="why" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-slate-50 relative overflow-hidden" ref={containerRef}>
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue/5 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left: Metrics & Chart */}
          <div>
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <span className="text-xs font-bold text-blue uppercase tracking-widest block mb-4">{w.visualTitle}</span>
                <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
                  What changes when you use Orbitle
                </h2>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {w.metrics.map((m, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-white border border-slate-200/60 shadow-sm">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">{m.label}</p>
                    <div className="flex items-end justify-between gap-2">
                       <span className="text-lg font-black text-slate-900 tabular-nums">{m.change}</span>
                       <span className="text-[10px] font-black uppercase text-green-600 bg-green-50 px-2 py-0.5 rounded-md">
                        {m.badge}
                       </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Premium Line Chart Visualization */}
              <div className="relative p-8 lg:p-10 rounded-[2.5rem] bg-white border border-slate-200 shadow-[0_32px_64px_rgba(0,0,0,0.04)] overflow-hidden">
                <div className="flex items-center justify-between mb-10">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-1">Weekly Growth</h3>
                    <p className="text-sm font-medium text-slate-500">Acceleration after onboarding</p>
                  </div>
                  <div className="flex gap-2">
                    <div className="px-3 py-1 bg-green-50 text-green-600 text-[10px] font-bold uppercase tracking-widest rounded-full border border-green-100 flex items-center gap-1.5 shadow-sm">
                      <TrendingUp className="w-3 h-3" />
                      +240% Speed
                    </div>
                  </div>
                </div>

                {/* Line Chart SVG */}
                <div className="relative h-[240px] w-full">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 400 200" preserveAspectRatio="none font-bold">
                    <defs>
                      <linearGradient id="lineFill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#2563a8" stopOpacity="0.1" />
                        <stop offset="100%" stopColor="#2563a8" stopOpacity="0" />
                      </linearGradient>
                    </defs>

                    {/* Grid Lines */}
                    {[0, 1, 2, 3, 4].map((i) => (
                      <line key={i} x1="0" y1={i * 50} x2="400" y2={i * 50} stroke="#f1f5f9" strokeWidth="1" />
                    ))}

                    {/* Smooth Growth Path */}
                    <motion.path 
                      d="M 0 180 Q 50 170, 100 150 Q 150 130, 200 100 Q 250 80, 300 50 Q 350 30, 400 10"
                      fill="none"
                      stroke="#2563a8"
                      strokeWidth="4"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={isInView ? { pathLength: 1 } : {}}
                      transition={{ duration: 2, ease: "easeInOut" }}
                    />
                    
                    <motion.path 
                      d="M 0 180 Q 50 170, 100 150 Q 150 130, 200 100 Q 250 80, 300 50 Q 350 30, 400 10 L 400 200 L 0 200 Z"
                      fill="url(#lineFill)"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ duration: 1, delay: 1 }}
                    />
                  </svg>
                </div>

                <div className="flex justify-between items-center mt-8 text-[10px] font-bold text-slate-400 uppercase tracking-widest border-t border-slate-50 pt-6">
                  <span>Start</span>
                  <span>Month 1</span>
                  <span>Month 2</span>
                  <span>Goal Achieved</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Benefits Content */}
          <div className="space-y-6">
            <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1 transparent border border-blue/20 bg-blue/5 rounded-full mb-2"
              >
                <span className="text-[12px] font-bold uppercase tracking-wider text-blue leading-none">
                  {w.kicker}
                </span>
            </motion.div>
            
            <div className="space-y-6">
              {w.points.map((p, i) => {
                const Icon = LucideIcons[i]
                return (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                    className="flex gap-6 items-start p-8 rounded-2xl bg-white border border-slate-200/60 shadow-sm hover:shadow-md transition-all group"
                  >
                    <div className="p-4 bg-slate-50 text-slate-400 rounded-xl group-hover:bg-blue group-hover:text-white transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{p.title}</h3>
                      <p className="text-slate-600 text-sm font-medium leading-relaxed">{p.desc}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="pt-6"
            >
              <a href="#contact" className="inline-flex items-center gap-2 group px-10 py-4 rounded-full text-base font-bold text-white bg-slate-900 hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                {w.cta}
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
