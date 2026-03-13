'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowRight, Zap, Clock } from 'lucide-react'
import { useLang } from '@/lib/LangContext'

export default function TopBarNew({ slots }: { slots: number }) {
  const { t } = useLang()
  const [visible, setVisible] = useState(true)
  const [timer, setTimer] = useState('')

  useEffect(() => {
    const tick = () => {
      const now = new Date(), end = new Date()
      end.setHours(23, 59, 59, 999)
      const d = Math.max(0, (end.getTime() - now.getTime()) % (24 * 3600000))
      const h = String(Math.floor(d / 3600000)).padStart(2, '0')
      const m = String(Math.floor((d % 3600000) / 60000)).padStart(2, '0')
      const s = String(Math.floor((d % 60000) / 1000)).padStart(2, '0')
      setTimer(`${h}:${m}:${s}`)
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  if (!visible) return null
  const tb = t.topbar

  return (
    <AnimatePresence>
      {visible && (
        <motion.div 
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="bg-slate-900 text-white relative z-[110] overflow-hidden"
        >
          <div className="max-w-container mx-auto px-6 py-3 flex items-center justify-center gap-4 lg:gap-8 flex-wrap text-[13px] font-bold">
            <div className="flex items-center gap-2">
              <span className="bg-blue text-white text-[10px] uppercase tracking-[0.2em] px-2 py-0.5 rounded-sm shadow-sm ring-1 ring-white/10">
                {tb.badge}
              </span>
              <span className="text-slate-300 font-medium tracking-wide">
                {tb.msg} <strong className="text-white tabular">{slots} {tb.slots}</strong> {tb.left}
              </span>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10 text-blue tabular ring-1 ring-white/5">
                <Clock className="w-3 h-3" />
                <span>{timer}</span>
              </div>
              
              <a href="#contact" className="group text-blue-400 hover:text-white transition-colors flex items-center gap-1.5">
                {tb.link}
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <button
              onClick={() => setVisible(false)}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-slate-500 hover:text-white transition-colors"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          
          {/* Progress bar effect at the bottom */}
          <div className="absolute bottom-0 left-0 h-[1px] bg-blue/30 w-full overflow-hidden">
            <motion.div 
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              className="h-full w-1/3 bg-gradient-to-r from-transparent via-blue to-transparent"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
