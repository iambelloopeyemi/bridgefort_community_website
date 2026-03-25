import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heart, Users, GraduationCap, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Our Programs | BridgeFort Community Outreach",
  description:
    "Comprehensive support services including food drives, mentoring activities, and summer camps for underserved communities",
}

export default function ProgramsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-muted/50 to-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Our Programs</h1>
            <p className="mt-6 text-pretty text-lg text-muted-foreground leading-relaxed">
              Comprehensive support services designed to empower and uplift our communities
            </p>
          </div>
        </div>
      </section>

      {/* Program 1: Health & Quality of Life */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Health & Quality of Life
              </h2>
              <p className="mt-6 text-pretty text-lg text-muted-foreground leading-relaxed">
                Our food drive program provides essential nutritional support to low-income families in the Waterloo and
                Peel regions. Through periodic food drives, we ensure that families have access to healthy, nutritious
                food options.
              </p>
              <div className="mt-8">
                <h3 className="mb-4 text-xl font-semibold text-foreground">Key Features</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-muted-foreground">Regular food distribution events</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-muted-foreground">Partnership with local food banks and suppliers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-muted-foreground">
                      Focus on nutritious, culturally appropriate food options
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-muted-foreground">Serving families in need across our service regions</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8">
                <Button asChild>
                  <Link href="/get-involved">Learn How to Participate</Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="aspect-square w-full max-w-md overflow-hidden rounded-lg bg-muted">
                <img
                  src="/community-food-drive-volunteers-distributing-food.jpg"
                  alt="Food drive volunteers distributing food to families"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program 2: Mentoring Activities */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="order-2 flex items-center justify-center lg:order-1">
              <div className="aspect-square w-full max-w-md overflow-hidden rounded-lg bg-muted">
                <img
                  src="/mentor-teaching-youth-civic-engagement.jpg"
                  alt="Mentor working with youth on civic engagement"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 flex flex-col justify-center lg:order-2">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Mentoring Activities
              </h2>
              <p className="mt-6 text-pretty text-lg text-muted-foreground leading-relaxed">
                We believe in building strong character and civic engagement from an early age. Our mentoring programs
                connect youth with positive role models who teach valuable life skills, community responsibility, and
                leadership.
              </p>
              <div className="mt-8">
                <h3 className="mb-4 text-xl font-semibold text-foreground">Key Features</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-muted-foreground">One-on-one and group mentoring sessions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-muted-foreground">Civic engagement education</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-muted-foreground">Character building workshops</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-muted-foreground">Leadership development opportunities</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8">
                <Button asChild>
                  <Link href="/get-involved">Become a Mentor</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program 3: Summer Camps */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Summer Camps
              </h2>
              <p className="mt-6 text-pretty text-lg text-muted-foreground leading-relaxed">
                Our collaborative summer camp programs provide children with engaging, educational experiences that
                teach civic engagement, community values, and social responsibility in a fun, supportive environment.
              </p>
              <div className="mt-8">
                <h3 className="mb-4 text-xl font-semibold text-foreground">Key Features</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-muted-foreground">Age-appropriate activities and learning</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-muted-foreground">Civic engagement curriculum</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-muted-foreground">Safe, inclusive environment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-muted-foreground">Collaborative learning experiences</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8">
                <Button asChild>
                  <Link href="/get-involved">Register Your Child</Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="aspect-square w-full max-w-md overflow-hidden rounded-lg bg-muted">
                <img
                  src="/children-at-summer-camp-learning-together.jpg"
                  alt="Children participating in summer camp activities"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-primary py-16 text-primary-foreground md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">Ready to Make a Difference?</h2>
            <p className="mt-6 text-pretty text-lg leading-relaxed opacity-90">
              Join us in supporting these vital programs that strengthen our communities
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg" variant="secondary" className="text-base">
                <Link href="/get-involved">Get Involved</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground text-base text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
