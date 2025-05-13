import { DUMMY_GYMS } from '@/lib/constants';
import type { Gym } from '@/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { MapPin, Search } from 'lucide-react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import Image from 'next/image';

export default function GymsPage() {
  // In a real app, this would involve state and filtering
  const gyms: Gym[] = DUMMY_GYMS;

  return (
    <SectionWrapper title="Find Your Perfect Gym" subtitle="Explore gyms near you and kickstart your fitness journey.">
      <div className="mb-8 flex flex-col sm:flex-row gap-4">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input type="search" placeholder="Search by name or location..." className="pl-10 w-full" />
        </div>
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
          <Search className="mr-2 h-4 w-4" /> Search
        </Button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {gyms.map((gym) => (
          <Card key={gym.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <Image 
              src={`https://picsum.photos/seed/${gym.id}/400/250`} 
              alt={gym.name} 
              width={400} 
              height={250} 
              className="w-full h-48 object-cover"
              data-ai-hint="gym interior" 
            />
            <CardHeader>
              <CardTitle className="text-xl text-foreground">{gym.name}</CardTitle>
              <CardDescription className="flex items-center text-muted-foreground pt-1">
                <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                {gym.location}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col justify-end">
              {/* Placeholder for plan count or other details */}
              {/* <p className="text-sm text-muted-foreground mb-4">Offers {gym.plans.length} plans</p> */}
              <Button variant="outline" className="w-full mt-auto">View Details</Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl text-foreground">Gym Locations Map</CardTitle>
          <CardDescription>Interactive map showing all gym locations.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-96 bg-muted rounded-md flex items-center justify-center">
            <p className="text-muted-foreground">Map integration placeholder</p>
          </div>
        </CardContent>
      </Card>
    </SectionWrapper>
  );
}
