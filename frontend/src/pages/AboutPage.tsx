import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb, Users, Target, Rocket } from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: Lightbulb,
      title: 'Transparency',
      description: 'We believe in open communication and honest pricing. No hidden fees, no surprises.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Your input matters. We work closely with you throughout the entire process.',
    },
    {
      icon: Target,
      title: 'Quality',
      description: 'We never compromise on quality. Every project receives our full attention and expertise.',
    },
    {
      icon: Rocket,
      title: 'Innovation',
      description: 'We stay ahead of the curve, using modern technologies to deliver cutting-edge solutions.',
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery',
      description: 'We start by understanding your business, goals, and target audience. This foundation ensures we create the right solution for you.',
    },
    {
      step: '02',
      title: 'Design',
      description: 'Our designers craft beautiful, user-friendly interfaces that align with your brand and engage your audience.',
    },
    {
      step: '03',
      title: 'Build',
      description: 'Our developers bring the designs to life with clean, efficient code and modern technologies.',
    },
    {
      step: '04',
      title: 'Launch',
      description: 'We thoroughly test everything, then launch your project and provide ongoing support to ensure success.',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-background to-muted/30 py-20 sm:py-32">
        <div className="container mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            About Ethical Bytes
          </h1>
          <p className="text-lg text-muted-foreground sm:text-xl">
            We're a team of passionate designers and developers committed to creating exceptional
            digital experiences with integrity and transparency.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 sm:py-32">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">Our Mission</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              At Ethical Bytes, we believe that great digital solutions should be accessible to
              businesses of all sizes. Our mission is to provide high-quality web development,
              design, and digital services while maintaining the highest ethical standards.
            </p>
            <p className="text-lg text-muted-foreground">
              We're not just building websites—we're building lasting partnerships based on trust,
              transparency, and mutual success.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-muted/30 py-20 sm:py-32">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Our Values</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              These principles guide everything we do
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <Card key={value.title} className="border-2 text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{value.title}</CardTitle>
                  <CardDescription className="text-base">{value.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 sm:py-32">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">How We Work</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Our proven process ensures your project is delivered on time and exceeds expectations
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {process.map((item, index) => (
              <div key={item.step} className="relative">
                <Card className="h-full border-2">
                  <CardHeader>
                    <div className="mb-4 text-5xl font-bold text-primary/20">{item.step}</div>
                    <CardTitle className="mb-2">{item.title}</CardTitle>
                    <CardDescription className="text-base">{item.description}</CardDescription>
                  </CardHeader>
                </Card>
                {index < process.length - 1 && (
                  <div className="absolute -right-4 top-1/2 hidden h-0.5 w-8 bg-border lg:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
