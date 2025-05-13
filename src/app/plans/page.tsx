import { DUMMY_PLANS, DUMMY_GYMS, DUMMY_SPORTS } from '@/lib/constants';
import type { Plan } from '@/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import SectionWrapper from '@/components/ui/SectionWrapper';
import { Dumbbell, MapPinIcon, Tag } from 'lucide-react';
import Image from 'next/image';

export default function PlansPage() {
  const plans: Plan[] = DUMMY_PLANS;

  const getGymName = (gymId: string) => DUMMY_GYMS.find(g => g.id === gymId)?.name || 'N/A';
  const getSportName = (sportId: string) => DUMMY_SPORTS.find(s => s.id === sportId)?.name || 'N/A';

  return (
    <SectionWrapper title="Explore Workout Plans" subtitle="Find the perfect plan to match your fitness goals and preferences.">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <Card key={plan.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Image 
              src={`https://picsum.photos/seed/plan${plan.id}/400/200`} 
              alt={plan.name} 
              width={400} 
              height={200} 
              className="w-full h-40 object-cover"
              data-ai-hint="fitness equipment"
            />
            <CardHeader>
              <CardTitle className="text-xl text-foreground">{plan.name}</CardTitle>
              <CardDescription className="text-sm text-muted-foreground pt-1 min-h-[40px]">{plan.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow space-y-3">
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPinIcon className="h-4 w-4 mr-2 text-primary" />
                Gym: {getGymName(plan.gymId)}
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Dumbbell className="h-4 w-4 mr-2 text-primary" />
                Sport: {getSportName(plan.sportId)}
              </div>
              <div>
                <Badge variant="secondary" className="text-lg font-semibold text-accent-foreground bg-accent/80">
                  ${plan.price.toFixed(2)}
                </Badge>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">View Plan Details</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
