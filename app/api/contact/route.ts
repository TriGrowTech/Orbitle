import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { intent, name, phone, email, biz, domain, agents, msg } = body

    // Only attempt email if SMTP env vars are set
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      const nodemailer = await import('nodemailer')
      const transporter = nodemailer.default.createTransport({
        host: process.env.SMTP_HOST || 'smtp.gmail.com',
        port: Number(process.env.SMTP_PORT) || 587,
        secure: false,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      })

      const toTeam = {
        from: `"Orbitle Waitlist" <${process.env.SMTP_USER}>`,
        to: process.env.CONTACT_EMAIL || 'hello@trigrowtech.com',
        subject: `New ${intent === 'demo' ? 'Demo Request' : 'Waitlist Signup'} — ${name}`,
        html: `
          <div style="font-family:sans-serif;max-width:520px;margin:0 auto;">
            <h2 style="color:#1a3a5c;">New Orbitle Submission</h2>
            <table style="width:100%;border-collapse:collapse;">
              <tr><td style="padding:6px 0;color:#6b7280;font-size:13px;">Intent</td><td style="padding:6px 0;font-weight:700;">${intent === 'demo' ? '📞 Book a Demo' : '📋 Join Waitlist'}</td></tr>
              <tr><td style="padding:6px 0;color:#6b7280;font-size:13px;">Name</td><td style="padding:6px 0;">${name}</td></tr>
              <tr><td style="padding:6px 0;color:#6b7280;font-size:13px;">Phone</td><td style="padding:6px 0;">${phone}</td></tr>
              <tr><td style="padding:6px 0;color:#6b7280;font-size:13px;">Email</td><td style="padding:6px 0;">${email}</td></tr>
              <tr><td style="padding:6px 0;color:#6b7280;font-size:13px;">Business</td><td style="padding:6px 0;">${biz || '—'}</td></tr>
              <tr><td style="padding:6px 0;color:#6b7280;font-size:13px;">Domain</td><td style="padding:6px 0;">${domain || '—'}</td></tr>
              <tr><td style="padding:6px 0;color:#6b7280;font-size:13px;">Agents</td><td style="padding:6px 0;">${agents || '—'}</td></tr>
              <tr><td style="padding:6px 0;color:#6b7280;font-size:13px;">Message</td><td style="padding:6px 0;">${msg || '—'}</td></tr>
            </table>
          </div>
        `,
      }

      const toUser = {
        from: `"Orbitle by TrigrowTech" <${process.env.SMTP_USER}>`,
        to: email,
        subject: 'Your Orbitle spot is reserved 🎉',
        html: `
          <div style="font-family:sans-serif;max-width:520px;margin:0 auto;">
            <h2 style="color:#1a3a5c;">Welcome to Orbitle, ${name}!</h2>
            <p style="color:#374151;line-height:1.7;">
              Your founding spot is confirmed. We'll reach out within <strong>24 hours</strong> with:
            </p>
            <ul style="color:#374151;line-height:1.9;">
              <li>Full pricing details (including your founding discount)</li>
              <li>Free trial setup instructions</li>
              ${intent === 'demo' ? '<li>A calendar link to book your 30-min demo call</li>' : ''}
            </ul>
            <p style="color:#374151;">In the meantime, feel free to reply to this email with any questions.</p>
            <p style="color:#374151;">— The TrigrowTech Team<br/><a href="mailto:hello@trigrowtech.com" style="color:#2563a8;">hello@trigrowtech.com</a></p>
          </div>
        `,
      }

      await transporter.sendMail(toTeam)
      await transporter.sendMail(toUser)
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Contact API error:', err)
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}
