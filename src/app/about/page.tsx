import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Users, Handshake, TrendingUp, Globe } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us | BridgeFort Community Outreach",
  description:
    "Learn about BridgeFort Community Outreach's mission, values, and commitment to empowering underserved communities",
}

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-muted/50 to-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              About BridgeFort Community Outreach
            </h1>
            <p className="mt-6 text-pretty text-lg text-muted-foreground leading-relaxed">
              Building bridges to stronger, more inclusive communities
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Our Story</h2>
            <div className="mt-8 space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Launched in 2021, BridgeFort Community Outreach is a non-governmental organization committed to
                supporting underserved communities. While our organization is young, our founders bring over 10 years of
                charitable work experience to this mission.
              </p>
              <p>
                We operate in the Waterloo and Peel regions of Ontario, Canada, with plans to expand our reach to other
                provinces and potentially other countries. Our work is driven by a deep commitment to creating lasting,
                positive change in the lives of those we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-pretty text-muted-foreground leading-relaxed">
                  To create safe spaces and provide comprehensive support services that empower low-income youth,
                  adults, and seniors in our communities.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-pretty text-muted-foreground leading-relaxed">
                  A future where every individual, regardless of background, has access to the resources and support
                  needed to thrive.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Our Values</h2>
            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              The principles that guide our work and define who we are
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Value 1: Inclusivity */}
            <Card className="border-2">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Inclusivity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-pretty text-muted-foreground leading-relaxed">
                  We welcome everyone regardless of gender, religion, race, or ethnic background
                </p>
              </CardContent>
            </Card>

            {/* Value 2: Diversity */}
            <Card className="border-2">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Diversity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-pretty text-muted-foreground leading-relaxed">
                  We celebrate and encourage diversity in all its forms
                </p>
              </CardContent>
            </Card>

            {/* Value 3: Community Partnership */}
            <Card className="border-2">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Handshake className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Community Partnership</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-pretty text-muted-foreground leading-relaxed">
                  We collaborate with local, municipal, and provincial organizations
                </p>
              </CardContent>
            </Card>

            {/* Value 4: Empowerment */}
            <Card className="border-2">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Empowerment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-pretty text-muted-foreground leading-relaxed">
                  We focus on empowering people of African descent and other underserved communities
                </p>
              </CardContent>
            </Card>

            {/* Value 5: Positive Impact */}
            <Card className="border-2">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Positive Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-pretty text-muted-foreground leading-relaxed">
                  We constantly monitor, evaluate, and plan to meet diverse community needs
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">How We Work</h2>
            <div className="mt-8 space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                We partner with volunteers, corporate sponsors, and community organizations to deliver impactful
                programs. Our collaborative approach ensures that we can maximize our resources and reach more people in
                need.
              </p>
              <p>
                Through constant monitoring and evaluation, we ensure our services meet the evolving needs of the
                communities we serve. We believe in data-driven decision making and continuous improvement to create the
                most effective programs possible.
              </p>
              <p>
                Our work is built on strong relationships with local, municipal, and provincial organizations. These
                partnerships allow us to leverage expertise, share resources, and create a more comprehensive support
                network for underserved communities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
