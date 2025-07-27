
"use server";

import { z } from "zod";
import { generateProjectPlan, type GenerateProjectPlanOutput } from "@/ai/flows/generate-project-plan";

const GenerateProjectPlanInputSchema = z.object({
  projectName: z.string().min(1, "Project name is required."),
  projectDescription: z.string().min(1, "Project description is required."),
  projectScope: z.string().min(1, "Project scope is required."),
  projectLocation: z.string().min(1, "Project location is required."),
  projectTimelineWeeks: z.coerce.number({invalid_type_error: "Timeline must be a number"}).min(1, "Timeline must be at least 1 week."),
  budget: z.coerce.number({invalid_type_error: "Budget must be a number"}).min(1, "Budget is required."),
  clientName: z.string().min(1, "Client name is required."),
});

type State = {
  data: GenerateProjectPlanOutput | null;
  error: string | null;
  fieldErrors?: { [key: string]: string[] | undefined };
};

export async function createPlan(prevState: State, formData: FormData): Promise<State> {
  const validatedFields = GenerateProjectPlanInputSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return {
      data: null,
      error: "Please correct the errors in the form.",
      fieldErrors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const result = await generateProjectPlan(validatedFields.data);
    return { data: result, error: null };
  } catch (e) {
    console.error(e);
    return { data: null, error: "An unexpected error occurred. Please try again." };
  }
}
