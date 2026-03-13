'use client'
import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Check, Mail, Phone, Building2, MapPin, Send, Loader2, Globe, Users, ShieldCheck, Zap } from 'lucide-react'
import { useLang } from '@/lib/LangContext'

export default function ContactNew({ slots, onSuccess }: { slots: number, onSuccess: () => void }) {
  const { t } = useLang()
  const c = t.contact
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setLoading(true)
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        setSuccess(true)
        onSuccess()
      }
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-slate-50 relative overflow-hidden" ref={containerRef}>
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-blue/5 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Information Panel */}
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="inline-flex items-center gap-2 px-3 py-1 transparent border border-blue/20 bg-blue/5 rounded-full mb-8"
            >
              <Zap className="w-3.5 h-3.5 text-blue" />
              <span className="text-[12px] font-bold uppercase tracking-wider text-blue leading-none">
                {c.kicker}
              </span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-4xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-8 leading-[1.1]"
            >
              Get early access <br className="hidden lg:block" /> to Orbitle
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-600 font-medium mb-12 leading-relaxed max-w-[500px]"
            >
              Stop managing your travel business on WhatsApp and spreadsheets. Get the infrastructure you deserve.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-blue text-white shadow-lg shadow-blue/20">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Founding Discount</h4>
                  <p className="text-sm text-slate-500 font-medium">Locked in permanently on submission.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-blue text-white shadow-lg shadow-blue/20">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">1-Week Free Trial</h4>
                  <p className="text-sm text-slate-500 font-medium">Explore the full platform, zero risk.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-blue text-white shadow-lg shadow-blue/20">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Live in 48 Hours</h4>
                  <p className="text-sm text-slate-500 font-medium">Full setup on your domain, fast.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-blue text-white shadow-lg shadow-blue/20">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Sell Leads</h4>
                  <p className="text-sm text-slate-500 font-medium">Manage agents and track pricing.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center gap-6"
            >
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-100 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?u=${i}`} alt="user" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <p className="text-sm font-bold text-slate-600">Join <span className="text-slate-900">40+ travel operators</span> on the waitlist</p>
            </motion.div>
          </div>

          {/* Right Column: Form Card */}
          <motion.div 
            initial={{ opacity: 0, transform: 'perspective(1000px) rotateY(-5deg) translateX(20px)' }}
            animate={isInView ? { opacity: 1, transform: 'perspective(1000px) rotateY(0deg) translateX(0px)' } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="rounded-[2.5rem] bg-white border border-slate-200 shadow-[0_32px_64px_rgba(0,0,0,0.06)] p-8 lg:p-12">
              {success ? (
                <div className="text-center py-20 animate-reveal">
                  <div className="w-20 h-20 rounded-full bg-green-50 text-green-500 flex items-center justify-center mx-auto mb-8 shadow-inner">
                    <Check className="w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-4">{c.successTitle}</h3>
                  <p className="text-lg text-slate-600 font-medium">{c.successText.replace('{email}', 'your inbox')}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">{c.nameLabel}</label>
                      <input name="name" required placeholder={c.namePlaceholder} className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-blue/10 focus:border-blue transition-all font-semibold text-slate-900" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">{c.phoneLabel}</label>
                       <input name="phone" required placeholder={c.phonePlaceholder} className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-blue/10 focus:border-blue transition-all font-semibold text-slate-900" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">{c.emailLabel}</label>
                    <input name="email" type="email" required placeholder={c.emailPlaceholder} className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-blue/10 focus:border-blue transition-all font-semibold text-slate-900" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">{c.bizLabel}</label>
                      <input name="biz" required placeholder={c.bizPlaceholder} className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-blue/10 focus:border-blue transition-all font-semibold text-slate-900" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">{c.agentsLabel}</label>
                       <select name="teamSize" required className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-blue/10 focus:border-blue transition-all font-semibold text-slate-900 appearance-none">
                         {c.agentsOptions.map((opt, i) => (
                           <option key={i} value={i === 0 ? "" : opt} disabled={i === 0}>{opt}</option>
                         ))}
                       </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">{c.domainLabel}</label>
                    <input name="domain" placeholder={c.domainPlaceholder} className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-blue/10 focus:border-blue transition-all font-semibold text-slate-900" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">{c.msgLabel}</label>
                    <textarea name="msg" placeholder={c.msgPlaceholder} rows={2} className="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-blue/10 focus:border-blue transition-all font-semibold text-slate-900 resize-none" />
                  </div>

                  <Button disabled={loading} size="lg" className="w-full rounded-2xl py-7 h-auto text-lg font-bold premium shadow-xl shadow-blue/20 hover:shadow-2xl hover:shadow-blue/30 transition-all hover:-translate-y-1" type="submit">
                    {loading ? <Loader2 className="animate-spin w-6 h-6" /> : c.submitBtn}
                  </Button>

                  <p className="text-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    Reserved spot: <span className="text-blue">{slots} founding spots</span> remaining
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
