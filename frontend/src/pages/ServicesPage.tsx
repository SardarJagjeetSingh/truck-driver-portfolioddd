import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Palette, Image, Sparkles, Search, Server } from 'lucide-react';

export default function ServicesPage() {
  const coreServices = [
    {
      icon: Code,
      title: 'Website Development',
      description:
        'Custom-built websites using modern technologies. We create fast, secure, and scalable web applications tailored to your specific needs.',
      deliverables: [
        'Responsive web design',
        'Custom functionality',
        'Content management systems',
        'E-commerce solutions',
        'API integrations',
        'Performance optimization',
      ],
      badge: 'Core Service',
    },
    {
      icon: Palette,
      title: 'Website Design',
      description:
        'Beautiful, user-centered designs that engage your audience and drive conversions. We focus on creating intuitive experiences that reflect your brand.',
      deliverables: [
        'UI/UX design',
        'Wireframing & prototyping',
        'Brand-aligned aesthetics',
        'Mobile-first approach',
        'Accessibility standards',
        'Design systems',
      ],
      badge: 'Core Service',
    },
    {
      icon: Image,
      title: 'Graphic Design',
      description:
        'Professional visual content that strengthens your brand identity. From logos to marketing materials, we create designs that make an impact.',
      deliverables: [
        'Logo design',
        'Brand identity',
        'Marketing materials',
        'Social media graphics',
        'Print design',
        'Illustration',
      ],
      badge: 'Core Service',
    },
  ];

  const additionalServices = [
    {
      icon: Sparkles,
      title: 'Branding & Identity',
      description:
        'Comprehensive brand development including strategy, visual identity, and brand guidelines to establish a strong market presence.',
      deliverables: ['Brand strategy', 'Visual identity', 'Brand guidelines', 'Messaging framework'],
    },
    {
      icon: Search,
      title: 'SEO & Optimization',
      description:
        'Improve your online visibility with search engine optimization, performance tuning, and analytics implementation.',
      deliverables: ['On-page SEO', 'Technical SEO', 'Performance optimization', 'Analytics setup'],
    },
    {
      icon: Server,
      title: 'Hosting & Maintenance',
      description:
        'Reliable hosting solutions and ongoing maintenance to keep your website secure, updated, and running smoothly.',
      deliverables: ['Managed hosting', 'Security updates', 'Regular backups', 'Technical support'],
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-background to-muted/30 py-20 sm:py-32">
        <div className="container mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Our Services
          </h1>
          <p className="text-lg text-muted-foreground sm:text-xl">
            Comprehensive digital solutions to help your business succeed online
          </p>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 sm:py-32">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Core Services
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Our primary offerings designed to bring your digital vision to life
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {coreServices.map((service) => (
              <Card key={service.title} className="border-2 transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 flex items-center justify-between">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <Badge variant="secondary">{service.badge}</Badge>
                  </div>
                  <CardTitle className="mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold">What's Included:</p>
                    <ul className="space-y-1.5">
                      {service.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Icons Display */}
      <section className="bg-muted/30 py-12">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <img
              src="/assets/generated/ethical-bytes-service-icons.dim_512x512.png"
              alt="Our Services"
              className="h-32 w-auto opacity-80"
            />
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 sm:py-32">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Additional Services
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Complementary services to enhance your digital presence
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {additionalServices.map((service) => (
              <Card key={service.title} className="border-2">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold">Includes:</p>
                    <ul className="space-y-1.5">
                      {service.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
