// The AI flow for generating a project plan.

'use server';

/**
 * @fileOverview Generates a draft project plan and timeline, incorporating industry best practices.
 *
 * - generateProjectPlan - A function that handles the project plan generation.
 * - GenerateProjectPlanInput - The input type for the generateProjectPlan function.
 * - GenerateProjectPlanOutput - The return type for the generateProjectPlan function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateProjectPlanInputSchema = z.object({
  projectName: z.string().describe('The name of the project.'),
  projectDescription: z.string().describe('A detailed description of the project requirements.'),
  projectScope: z.string().describe('The scope of the project, including specific deliverables.'),
  projectLocation: z.string().describe('The location where the project will be executed.'),
  projectTimelineWeeks: z.number().describe('Estimated project timeline in weeks.'),
  budget: z.number().describe('The allocated budget for the project.'),
  clientName: z.string().describe('The name of the client.'),
});
export type GenerateProjectPlanInput = z.infer<typeof GenerateProjectPlanInputSchema>;

const GenerateProjectPlanOutputSchema = z.object({
  projectPlan: z.string().describe('A detailed project plan including tasks, timelines, and resource allocation.'),
  projectTimeline: z.string().describe('A timeline outlining key milestones and deadlines.'),
  riskAssessment: z.string().describe('An assessment of potential risks and mitigation strategies.'),
  resourceAllocation: z.string().describe('Details on resource allocation, including human resources and materials.'),
});
export type GenerateProjectPlanOutput = z.infer<typeof GenerateProjectPlanOutputSchema>;

export async function generateProjectPlan(input: GenerateProjectPlanInput): Promise<GenerateProjectPlanOutput> {
  return generateProjectPlanFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateProjectPlanPrompt',
  input: {schema: GenerateProjectPlanInputSchema},
  output: {schema: GenerateProjectPlanOutputSchema},
  prompt: `You are an expert construction project manager. Generate a detailed project plan and timeline, incorporating industry best practices.

  Project Name: {{{projectName}}}
  Project Description: {{{projectDescription}}}
  Project Scope: {{{projectScope}}}
  Project Location: {{{projectLocation}}}
  Project Timeline (Weeks): {{{projectTimelineWeeks}}}
  Budget: {{{budget}}}
  Client Name: {{{clientName}}}

  Include the following sections in the project plan:
  - Project Plan: Detailed tasks, timelines, and resource allocation.
  - Project Timeline: Key milestones and deadlines.
  - Risk Assessment: Potential risks and mitigation strategies.
  - Resource Allocation: Details on human resources and materials.

  Ensure the plan is realistic, comprehensive, and adheres to industry standards.`, 
});

const generateProjectPlanFlow = ai.defineFlow(
  {
    name: 'generateProjectPlanFlow',
    inputSchema: GenerateProjectPlanInputSchema,
    outputSchema: GenerateProjectPlanOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
