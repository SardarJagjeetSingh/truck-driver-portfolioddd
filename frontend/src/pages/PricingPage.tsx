import { Link } from '@tanstack/react-router';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check } from 'lucide-react';

export default function PricingPage() {
  const pricingTiers = [
    {
      name: 'Starter',
      price: '$2,500',
      description: 'Perfect for small businesses and startups looking to establish their online presence.',
      badge: null,
      features: [
        'Up to 5 pages',
        'Responsive design',
        'Basic SEO optimization',
        'Contact form integration',
        'Mobile-friendly',
        '30 days of support',
        'Content management system',
      ],
    },
    {
      name: 'Professional',
      price: '$5,500',
      description: 'Ideal for growing businesses that need advanced features and custom functionality.',
      badge: 'Most Popular',
      features: [
        'Up to 15 pages',
        'Custom design & branding',
        'Advanced SEO optimization',
        'E-commerce integration',
        'Blog functionality',
        '90 days of support',
        'Analytics integration',
        'Social media integration',
        'Performance optimization',
      ],
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'Comprehensive solutions for large organizations with complex requirements.',
      badge: null,
      features: [
        'Unlimited pages',
        'Fully custom development',
        'Advanced integrations',
        'Multi-language support',
        'Custom CMS',
        '6 months of support',
        'Dedicated project manager',
        'Priority support',
        'Training & documentation',
        'Ongoing maintenance',
      ],
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-background to-muted/30 py-20 sm:py-32">
        <div className="container mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Pricing
          </h1>
          <p className="text-lg text-muted-foreground sm:text-xl">
            Transparent pricing with no hidden fees. Choose the plan that fits your needs.
          </p>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20 sm:py-32">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {pricingTiers.map((tier) => (
              <Card
                key={tier.name}
                className={`relative border-2 transition-all hover:shadow-lg ${
                  tier.badge ? 'border-primary shadow-md' : ''
                }`}
              >
                {tier.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">{tier.badge}</Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="mb-2 text-2xl">{tier.name}</CardTitle>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">{tier.price}</span>
                    {tier.price !== 'Custom' && <span className="text-muted-foreground"> / project</span>}
                  </div>
                  <CardDescription className="text-base">{tier.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact">
                    <Button
                      className="w-full"
                      variant={tier.badge ? 'default' : 'outline'}
                      size="lg"
                    >
                      Get Started
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <p className="mb-4 text-lg text-muted-foreground">
              All plans include a consultation to discuss your specific needs.
            </p>
            <p className="text-sm text-muted-foreground">
              Need something different? <Link to="/contact" className="font-medium text-primary hover:underline">Contact us</Link> for a custom quote.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-muted/30 py-20 sm:py-32">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What's included in the support period?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our support includes bug fixes, minor content updates, and technical assistance. We're here to ensure your website runs smoothly.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Can I upgrade my plan later?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Absolutely! As your business grows, we can add features and functionality to your existing website.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Do you offer payment plans?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes, we offer flexible payment options. Contact us to discuss a payment plan that works for your budget.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
