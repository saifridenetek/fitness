import { DUMMY_SPORTS } from '@/lib/constants';
import type { Sport } from '@/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import SectionWrapper from '@/components/ui/SectionWrapper';
import { Dumbbell, Waves, Zap,Bike, PersonStanding, Leaf } from 'lucide-react'; // Example icons
import Image from 'next/image';

// Helper to get an icon for a sport name
const getSportIcon = (sportName: string) => {
  const lowerSportName = sportName.toLowerCase();
  if (lowerSportName.includes('yoga')) return Leaf;
  if (lowerSportName.includes('lift') || lowerSportName.includes('musculation')) return Dumbbell;
  if (lowerSportName.includes('swim')) return Waves;
  if (lowerSportName.includes('run') || lowerSportName.includes('crossfit')) return Zap;
  if (lowerSportName.includes('cycle')) return Bike;
  return PersonStanding; // Default icon
};


export default function SportsPage() {
  const sports: Sport[] = DUMMY_SPORTS;

  return (
    <SectionWrapper title="Discover Various Sports" subtitle="Explore different activities to find what moves you.">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sports.map((sport) => {
          const Icon = getSportIcon(sport.name);
          return (
            <Card key={sport.id} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 group">
               <div className="relative w-full h-40 overflow-hidden rounded-t-lg">
                <Image
                  src={`https://picsum.photos/seed/sport${sport.id}/300/200`}
                  alt={sport.name}
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:scale-105 transition-transform duration-300"
                  data-ai-hint={sport.name.toLowerCase()}
                />
              </div>
              <CardHeader className="pb-2">
                 <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-3 -mt-8 relative z-10 border-4 border-background">
                  <Icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl text-foreground">{sport.name}</CardTitle>
              </CardHeader>
              <CardContent>
                {/* Placeholder for description or related plans count */}
                <p className="text-sm text-muted-foreground">
                  Explore plans and activities related to {sport.name.toLowerCase()}.
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
