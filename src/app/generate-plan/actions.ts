'use server';

import { generateWorkoutPlan, type WorkoutPlanInput, type WorkoutPlanOutput } from '@/ai/flows/workout-plan-generator';
import { z } from 'zod';

const WorkoutPlanInputSchema = z.object({
  fitnessGoals: z.string().min(10, "Please describe your fitness goals in more detail (min 10 characters)."),
  currentFitnessLevel: z.string().min(1, "Please select your current fitness level."),
  preferredSports: z.string().min(3, "Please list some preferred sports or activities (min 3 characters)."),
  availableGyms: z.string().min(3, "Please mention available gyms or equipment (min 3 characters)."),
});

export interface GeneratePlanState {
  message?: string | null;
  workoutPlan?: string | null;
  errors?: {
    fitnessGoals?: string[];
    currentFitnessLevel?: string[];
    preferredSports?: string[];
    availableGyms?: string[];
    apiError?: string;
  };
  success: boolean;
}

export async function createWorkoutPlanAction(
  prevState: GeneratePlanState,
  formData: FormData
): Promise<GeneratePlanState> {
  const rawFormData = {
    fitnessGoals: formData.get('fitnessGoals'),
    currentFitnessLevel: formData.get('currentFitnessLevel'),
    preferredSports: formData.get('preferredSports'),
    availableGyms: formData.get('availableGyms'),
  };

  const validatedFields = WorkoutPlanInputSchema.safeParse(rawFormData);

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Validation failed. Please check your inputs.',
      success: false,
    };
  }

  const inputData: WorkoutPlanInput = validatedFields.data;

  try {
    const result: WorkoutPlanOutput = await generateWorkoutPlan(inputData);
    if (result.workoutPlan) {
      return {
        message: 'Successfully generated workout plan!',
        workoutPlan: result.workoutPlan,
        success: true,
      };
    } else {
      return {
        message: 'AI could not generate a plan with the provided details. Try being more specific.',
        errors: { apiError: 'No plan generated.' },
        success: false,
      };
    }
  } catch (error) {
    console.error('Error generating workout plan:', error);
    let errorMessage = 'An unexpected error occurred while generating the plan.';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return {
      message: 'Failed to generate workout plan.',
      errors: { apiError: errorMessage },
      success: false,
    };
  }
}
