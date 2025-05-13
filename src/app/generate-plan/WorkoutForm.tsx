'use client';

import * as React from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FITNESS_LEVELS } from '@/lib/constants';
import { createWorkoutPlanAction, type GeneratePlanState } from './actions';
import { useToast } from '@/hooks/use-toast';
import { AlertCircle, CheckCircle2, Loader2 } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const initialState: GeneratePlanState = {
  message: null,
  workoutPlan: null,
  errors: {},
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
      {pending ? 'Generating Plan...' : 'Generate My Plan'}
    </Button>
  );
}

export default function WorkoutForm() {
  const [state, formAction] = useFormState(createWorkoutPlanAction, initialState);
  const { toast } = useToast();
  const formRef = React.useRef<HTMLFormElement>(null);

  React.useEffect(() => {
    if (state.message) {
      toast({
        title: state.success ? 'Success!' : 'Uh oh!',
        description: state.message,
        variant: state.success ? 'default' : 'destructive',
      });
    }
    if (state.success) {
      formRef.current?.reset(); // Reset form on successful generation
    }
  }, [state, toast]);

  return (
    <div className="space-y-8">
      <Card className="shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl text-foreground">Create Your Personalized Workout Plan</CardTitle>
          <CardDescription>Fill in your details below, and our AI will craft a workout plan tailored to you.</CardDescription>
        </CardHeader>
        <CardContent>
          <form ref={formRef} action={formAction} className="space-y-6">
            <div>
              <Label htmlFor="fitnessGoals">Fitness Goals</Label>
              <Textarea
                id="fitnessGoals"
                name="fitnessGoals"
                placeholder="e.g., Lose weight, build muscle, improve endurance for a marathon"
                rows={4}
                className="mt-1"
                aria-describedby="fitnessGoals-error"
              />
              {state.errors?.fitnessGoals && (
                <p id="fitnessGoals-error" className="text-sm text-destructive mt-1">
                  {state.errors.fitnessGoals.join(', ')}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="currentFitnessLevel">Current Fitness Level</Label>
              <Select name="currentFitnessLevel" >
                <SelectTrigger id="currentFitnessLevel" className="mt-1" aria-describedby="currentFitnessLevel-error">
                  <SelectValue placeholder="Select your fitness level" />
                </SelectTrigger>
                <SelectContent>
                  {FITNESS_LEVELS.map((level) => (
                    <SelectItem key={level} value={level.toLowerCase()}>
                      {level}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {state.errors?.currentFitnessLevel && (
                <p id="currentFitnessLevel-error" className="text-sm text-destructive mt-1">
                  {state.errors.currentFitnessLevel.join(', ')}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="preferredSports">Preferred Sports/Activities</Label>
              <Input
                id="preferredSports"
                name="preferredSports"
                placeholder="e.g., Yoga, weightlifting, running, swimming"
                className="mt-1"
                aria-describedby="preferredSports-error"
              />
              {state.errors?.preferredSports && (
                <p id="preferredSports-error" className="text-sm text-destructive mt-1">
                  {state.errors.preferredSports.join(', ')}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="availableGyms">Available Gyms/Equipment</Label>
              <Input
                id="availableGyms"
                name="availableGyms"
                placeholder="e.g., 'Planet Fitness', 'Home gym with dumbbells', 'Access to a park'"
                className="mt-1"
                aria-describedby="availableGyms-error"
              />
              {state.errors?.availableGyms && (
                <p id="availableGyms-error" className="text-sm text-destructive mt-1">
                  {state.errors.availableGyms.join(', ')}
                </p>
              )}
            </div>
            
            {state.errors?.apiError && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>{state.errors.apiError}</AlertDescription>
                </Alert>
              )}

            <SubmitButton />
          </form>
        </CardContent>
      </Card>

      {state.success && state.workoutPlan && (
        <Card className="shadow-xl bg-secondary/30">
          <CardHeader>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-6 w-6 text-green-600" />
              <CardTitle className="text-2xl text-primary">Your Personalized Workout Plan</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <pre className="whitespace-pre-wrap bg-card p-4 rounded-md text-card-foreground font-mono text-sm leading-relaxed overflow-x-auto">
              {state.workoutPlan}
            </pre>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
