import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import SectionWrapper from '@/components/ui/SectionWrapper';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, ListChecks, DumbbellIcon, UserCircle, Zap } from 'lucide-react';

const features = [
  {
    icon: MapPin,
    title: 'Gym Locator',
    description: 'Find gyms near you with our easy-to-use map and search.',
    href: '/gyms',
  },
  {
    icon: ListChecks,
    title: 'Plan Explorer',
    description: 'Browse diverse workout plans tailored to various sports and goals.',
    href: '/plans',
  },
  {
    icon: DumbbellIcon,
    title: 'Sports Variety',
    description: 'Discover activities like Yoga, Weightlifting, and more.',
    href: '/sports',
  },
  {
    icon: Zap,
    title: 'AI Workout Generator',
    description: 'Get personalized workout suggestions powered by AI.',
    href: '/generate-plan',
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col items-center">
      <SectionWrapper className="text-center !py-10 md:!py-16 bg-gradient-to-b from-background to-secondary/30">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-primary mb-6">
          Welcome to Fitness Simplified
        </h1>
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-foreground/80 mb-8">
          Your ultimate companion for locating gyms, exploring workout plans, and generating personalized fitness routines with AI. Achieve your health goals with ease and precision.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transition-transform hover:scale-105">
            <Link href="/generate-plan">Generate Your Workout Plan</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="shadow-lg transition-transform hover:scale-105">
            <Link href="/plans">Explore Plans</Link>
          </Button>
        </div>
      </SectionWrapper>

      <SectionWrapper title="Discover Our Features">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <Card key={feature.title} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                  <feature.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl text-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{feature.description}</p>
                <Button variant="link" asChild className="text-primary hover:text-primary/80">
                  <Link href={feature.href}>Learn More &rarr;</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionWrapper>
      
      <SectionWrapper className="!py-10 md:!py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-3xl font-bold text-primary mb-4">Why Choose Us?</h3>
            <p className="text-lg text-foreground/80 mb-6">
              Fitness Simplified is designed to remove the guesswork from your fitness journey. We provide the tools and insights you need to stay motivated and achieve results.
            </p>
            <ul className="space-y-2 text-foreground/70">
              <li className="flex items-center gap-2"><ListChecks className="text-accent h-5 w-5"/> User-friendly interface</li>
              <li className="flex items-center gap-2"><Zap className="text-accent h-5 w-5"/> AI-powered recommendations</li>
              <li className="flex items-center gap-2"><MapPin className="text-accent h-5 w-5"/> Comprehensive gym and plan database</li>
            </ul>
          </div>
          <div>
            <Image
              src="https://picsum.photos/600/400?grayscale"
              alt="Fitness activity"
              width={600}
              height={400}
              className="rounded-lg shadow-2xl object-cover"
              data-ai-hint="fitness workout"
            />
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
