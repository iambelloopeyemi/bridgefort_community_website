
import { Resend } from "resend"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  const { name, email, phone, subject, message } = await req.json()

  const { error } = await resend.emails.send({
    from: "BridgeFort Contact Form <onboarding@resend.dev>",
    to: process.env.CONTACT_EMAIL!,
    replyTo: email,
    subject: `Contact Form: ${subject}`,
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "N/A"}\nSubject: ${subject}\n\n${message}`,
  })

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
