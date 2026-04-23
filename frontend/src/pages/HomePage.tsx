import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Palette, Globe, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function HomePage() {
  const features = [
    {
      icon: Code,
      title: 'Website Development',
      description: 'Custom-built websites tailored to your business needs with modern technologies.',
    },
    {
      icon: Palette,
      title: 'Website Design',
      description: 'Beautiful, user-friendly designs that engage your audience and drive results.',
    },
    {
      icon: Globe,
      title: 'Graphic Design',
      description: 'Professional visual content that strengthens your brand identity.',
    },
  ];

  const benefits = [
    'Transparent pricing with no hidden fees',
    'Ethical business practices',
    'Dedicated support throughout your project',
    'Modern, responsive designs',
    'Fast turnaround times',
    'Ongoing maintenance and updates',
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/30 py-20 sm:py-32">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                  Digital Solutions Built with{' '}
                  <span className="text-primary">Integrity</span>
                </h1>
                <p className="text-lg text-muted-foreground sm:text-xl">
                  We create exceptional websites and digital experiences that help your business
                  thrive in the modern world.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link to="/contact">
                  <Button size="lg" className="w-full sm:w-auto">
                    Start Your Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/services">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    View Our Services
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="/assets/generated/ethical-bytes-hero.dim_1600x900.png"
                alt="Ethical Bytes - Digital Solutions"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 sm:py-32">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              What We Do Best
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Comprehensive digital services to bring your vision to life
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature) => (
              <Card key={feature.title} className="border-2 transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-muted/30 py-20 sm:py-32">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Why Choose Ethical Bytes?
              </h2>
              <p className="text-lg text-muted-foreground">
                We believe in doing business the right way. Our commitment to ethical practices,
                transparent communication, and exceptional quality sets us apart.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
              <Link to="/about">
                <Button variant="outline" className="mt-4">
                  Learn More About Us
                </Button>
              </Link>
            </div>
            <div className="flex items-center justify-center">
              <Card className="w-full max-w-md border-2">
                <CardHeader>
                  <CardTitle>Ready to Get Started?</CardTitle>
                  <CardDescription>
                    Let's discuss your project and bring your ideas to life.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Link to="/contact">
                    <Button className="w-full" size="lg">
                      Contact Us Today
                    </Button>
                  </Link>
                  <Link to="/pricing">
                    <Button variant="outline" className="w-full" size="lg">
                      View Pricing
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
