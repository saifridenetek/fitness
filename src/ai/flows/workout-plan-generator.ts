// workout-plan-generator.ts
'use server';
/**
 * @fileOverview Generates personalized workout plans based on user input.
 *
 * - generateWorkoutPlan - A function that generates a workout plan.
 * - WorkoutPlanInput - The input type for the generateWorkoutPlan function.
 * - WorkoutPlanOutput - The return type for the generateWorkoutPlan function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const WorkoutPlanInputSchema = z.object({
  fitnessGoals: z
    .string()
    .describe('The user’s fitness goals, e.g., lose weight, build muscle.'),
  currentFitnessLevel:
    z.string().describe('The user’s current fitness level, e.g., beginner, intermediate, advanced.'),
  preferredSports: z.string().describe('The user’s preferred sports, e.g., yoga, weightlifting, running.'),
  availableGyms: z.string().describe('The gyms available to the user, e.g., "Gym A", "Gym B", "Home".'),
});
export type WorkoutPlanInput = z.infer<typeof WorkoutPlanInputSchema>;

const WorkoutPlanOutputSchema = z.object({
  workoutPlan: z.string().describe('A personalized workout plan based on the user input.'),
});
export type WorkoutPlanOutput = z.infer<typeof WorkoutPlanOutputSchema>;

export async function generateWorkoutPlan(input: WorkoutPlanInput): Promise<WorkoutPlanOutput> {
  return generateWorkoutPlanFlow(input);
}

const workoutPlanPrompt = ai.definePrompt({
  name: 'workoutPlanPrompt',
  input: {schema: WorkoutPlanInputSchema},
  output: {schema: WorkoutPlanOutputSchema},
  prompt: `You are a personal workout assistant. Generate a personalized workout plan based on the following information:

Fitness Goals: {{{fitnessGoals}}}
Current Fitness Level: {{{currentFitnessLevel}}}
Preferred Sports: {{{preferredSports}}}
Available Gyms: {{{availableGyms}}}

Workout Plan:`, // Handlebars syntax used here
});

const generateWorkoutPlanFlow = ai.defineFlow(
  {
    name: 'generateWorkoutPlanFlow',
    inputSchema: WorkoutPlanInputSchema,
    outputSchema: WorkoutPlanOutputSchema,
  },
  async input => {
    const {output} = await workoutPlanPrompt(input);
    return output!;
  }
);
