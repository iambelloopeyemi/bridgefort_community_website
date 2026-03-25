import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { HandHeart, DollarSign, Handshake, Calendar, Users, Building2, GraduationCap } from "lucide-react"

export const metadata: Metadata = {
  title: "Get Involved | BridgeFort Community Outreach",
  description:
    "Support BridgeFort Community Outreach through volunteering, donations, or partnerships. Make a difference in underserved communities.",
}

export default function GetInvolvedPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-muted/50 to-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Get Involved</h1>
            <p className="mt-6 text-pretty text-lg text-muted-foreground leading-relaxed">
              Your support helps us create lasting change in our communities
            </p>
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
                <HandHeart className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Volunteer With Us
              </h2>
              <p className="mt-6 text-pretty text-lg text-muted-foreground leading-relaxed">
                Join our team of dedicated volunteers making a real difference in the lives of community members.
                Whether you have a few hours a month or can commit to regular involvement, we have opportunities that
                match your skills and availability.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Card>
                <CardHeader>
                  <Calendar className="mb-2 h-6 w-6 text-primary" />
                  <CardTitle className="text-lg">Food Drive Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Help coordinate and distribute food to families in need</CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Users className="mb-2 h-6 w-6 text-primary" />
                  <CardTitle className="text-lg">Youth Mentoring</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Guide and inspire young people in our community</CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <GraduationCap className="mb-2 h-6 w-6 text-primary" />
                  <CardTitle className="text-lg">Summer Camp Staff</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Support children during our summer programs</CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Building2 className="mb-2 h-6 w-6 text-primary" />
                  <CardTitle className="text-lg">Administrative Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Help with planning, coordination, and operations</CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link href="/contact">Apply to Volunteer</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Donate Section */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
                <DollarSign className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Make a Donation
              </h2>
              <p className="mt-6 text-pretty text-lg text-muted-foreground leading-relaxed">
                Your financial support enables us to expand our programs and reach more families in need. Every
                contribution, no matter the size, makes a meaningful impact.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-xl">One-Time Gift</CardTitle>
                  <CardDescription>Make a single donation to support our programs</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full">
                    <Link href="/contact">Donate Once</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary">
                <CardHeader>
                  <div className="mb-2 inline-block rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                    Most Impact
                  </div>
                  <CardTitle className="text-xl">Monthly Giving</CardTitle>
                  <CardDescription>Provide sustained support with recurring donations</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full">
                    <Link href="/contact">Give Monthly</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-xl">Corporate Sponsorship</CardTitle>
                  <CardDescription>Partner with us as a corporate sponsor</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full bg-transparent" variant="outline">
                    <Link href="/contact">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 rounded-lg bg-primary/5 p-6 text-center">
              <p className="text-sm text-muted-foreground">
                BridgeFort Community Outreach is a registered non-governmental organization. Your donations help us
                create safe spaces and provide essential services to underserved communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="order-2 flex items-center justify-center lg:order-1">
              <div className="aspect-square w-full max-w-md overflow-hidden rounded-lg bg-muted">
                <img
                  src="/community-partners-collaboration-meeting.jpg"
                  alt="Community partners collaborating"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 flex flex-col justify-center lg:order-2">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
                <Handshake className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Partner With Us
              </h2>
              <p className="mt-6 text-pretty text-lg text-muted-foreground leading-relaxed">
                We collaborate with local, municipal, and provincial organizations to maximize our community impact. If
                your organization shares our values and mission, we'd love to explore partnership opportunities.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Building2 className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Corporate Partnerships</h3>
                    <p className="text-sm text-muted-foreground">
                      Align your corporate social responsibility with our mission
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Community Organizations</h3>
                    <p className="text-sm text-muted-foreground">Collaborate to amplify our collective impact</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Handshake className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Government Partnerships</h3>
                    <p className="text-sm text-muted-foreground">Work with municipal and provincial programs</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Button asChild size="lg">
                  <Link href="/contact">Explore Partnerships</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-primary py-16 text-primary-foreground md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">Every Action Creates Change</h2>
            <p className="mt-6 text-pretty text-lg leading-relaxed opacity-90">
              Whether you volunteer your time, make a donation, or partner with us, you're helping build stronger, more
              inclusive communities.
            </p>
            <div className="mt-10">
              <Button asChild size="lg" variant="secondary" className="text-base">
                <Link href="/contact">Get Started Today</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
