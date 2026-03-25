import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Users, GraduationCap, ArrowRight } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-muted/50 to-background py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Empowering Communities, Building Futures
            </h1>
            <p className="mt-6 text-pretty text-lg text-muted-foreground leading-relaxed sm:text-xl">
              Creating safe spaces and providing support services for underserved communities in Waterloo and Peel
              regions
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg" className="text-base">
                <Link href="/get-involved">Donate Now</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base bg-transparent">
                <Link href="/get-involved">Volunteer With Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Our Mission</h2>
            <p className="mt-6 text-pretty text-lg text-muted-foreground leading-relaxed">
              BridgeFort Community Outreach is dedicated to creating safe spaces for low-income youth, adults, and
              seniors. We provide support and social assistance services that empower people of African descent and
              other underserved communities, regardless of gender, religion, race, or ethnic background.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Overview Section */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Our Programs</h2>
            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              Comprehensive support services designed to empower and uplift our communities
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Program 1: Health & Quality of Life */}
            <Card className="transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Health & Quality of Life</CardTitle>
                <CardDescription className="text-base">
                  Periodic food drives providing essential support to low-income families
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="link" className="p-0">
                  <Link href="/programs" className="group inline-flex items-center gap-1">
                    Learn More
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Program 2: Mentoring Activities */}
            <Card className="transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Mentoring Activities</CardTitle>
                <CardDescription className="text-base">
                  Teaching civic engagement and building strong character in our youth
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="link" className="p-0">
                  <Link href="/programs" className="group inline-flex items-center gap-1">
                    Learn More
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Program 3: Summer Camps */}
            <Card className="transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Summer Camps</CardTitle>
                <CardDescription className="text-base">
                  Collaborative programs where kids learn civic engagement and community values
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="link" className="p-0">
                  <Link href="/programs" className="group inline-flex items-center gap-1">
                    Learn More
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Making a Difference Since 2021
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">10+</div>
              <div className="mt-2 text-sm text-muted-foreground">Years of Charitable Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">2</div>
              <div className="mt-2 text-sm text-muted-foreground">Regions Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">3</div>
              <div className="mt-2 text-sm text-muted-foreground">Core Programs</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">Growing</div>
              <div className="mt-2 text-sm text-muted-foreground">Community Impact</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-primary py-16 text-primary-foreground md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Join Us in Building Stronger Communities
            </h2>
            <p className="mt-6 text-pretty text-lg leading-relaxed opacity-90">
              Whether through volunteering, donations, or partnerships, your support helps us create lasting change.
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
