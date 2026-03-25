import type { Metadata } from "next"
import { ContactForm } from "@/components/contact-form"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MapPin, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us | BridgeFort Community Outreach",
  description:
    "Get in touch with BridgeFort Community Outreach. We're here to answer your questions about our programs, volunteering, and partnerships.",
}

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-muted/50 to-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Contact Us</h1>
            <p className="mt-6 text-pretty text-lg text-muted-foreground leading-relaxed">
              We'd love to hear from you. Reach out with any questions or to learn more about our programs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="rounded-lg border bg-card p-6 md:p-8">
                <h2 className="mb-6 text-2xl font-bold text-foreground">Send Us a Message</h2>
                <ContactForm />
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Service Areas</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>Waterloo Region, Ontario</p>
                    <p>Peel Region, Ontario</p>
                    <p>Canada</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Email</CardTitle>
                </CardHeader>
                <CardContent>
                  <a href="mailto:info@bridgefortoutreach.org" className="text-sm text-primary hover:underline">
                    info@bridgefortoutreach.org
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Office Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>Monday - Friday</p>
                    <p className="font-medium text-foreground">9:00 AM - 5:00 PM</p>
                    <p className="mt-2">Saturday - Sunday</p>
                    <p className="font-medium text-foreground">Closed</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Looking for Something Specific?
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              <div>
                <h3 className="mb-2 font-semibold text-foreground">Volunteer Inquiries</h3>
                <p className="text-sm text-muted-foreground">
                  Questions about volunteering opportunities and how to get started
                </p>
              </div>
              <div>
                <h3 className="mb-2 font-semibold text-foreground">Program Information</h3>
                <p className="text-sm text-muted-foreground">
                  Details about our food drives, mentoring, and summer camps
                </p>
              </div>
              <div>
                <h3 className="mb-2 font-semibold text-foreground">Partnership Opportunities</h3>
                <p className="text-sm text-muted-foreground">
                  Corporate, community, and government partnership inquiries
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
