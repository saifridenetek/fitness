import SectionWrapper from '@/components/ui/SectionWrapper';
import WorkoutForm from './WorkoutForm';
import Image from 'next/image';

export default function GeneratePlanPage() {
  return (
    <SectionWrapper 
      title="AI Workout Plan Generator" 
      subtitle="Let our AI craft a personalized fitness plan just for you."
    >
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <WorkoutForm />
        </div>
        <div className="hidden lg:block sticky top-24">
          <Image 
            src="https://picsum.photos/seed/aiplan/600/700" 
            alt="AI generating plan" 
            width={600} 
            height={700} 
            className="rounded-lg shadow-xl object-cover"
            data-ai-hint="technology fitness" 
          />
          <div className="mt-6 p-6 bg-card rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-foreground mb-2">How it Works</h3>
            <p className="text-muted-foreground text-sm">
              Our advanced AI analyzes your fitness goals, current level, preferred activities, and available resources. 
              It then constructs a balanced and effective workout plan designed to help you achieve optimal results. 
              The more details you provide, the better the plan will be!
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
