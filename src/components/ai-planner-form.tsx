
"use client";

import { useFormState, useFormStatus } from "react-dom";
import { createPlan } from "@/app/actions/planner";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2, Wand2 } from "lucide-react";
import { Skeleton } from "./ui/skeleton";

const initialState = {
  data: null,
  error: null,
  fieldErrors: {},
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full bg-accent hover:bg-accent/90">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Generating...
        </>
      ) : (
        <>
          <Wand2 className="mr-2 h-4 w-4" />
          Generate Plan
        </>
      )}
    </Button>
  );
}

export function AIPlannerForm() {
  const [state, formAction] = useFormState(createPlan, initialState);
  const { pending } = useFormStatus();

  return (
    <div className="grid lg:grid-cols-2 gap-12">
      <Card>
        <CardHeader>
          <CardTitle>Project Details</CardTitle>
          <CardDescription>Fill in the form to generate your project plan.</CardDescription>
        </CardHeader>
        <CardContent>
          <form action={formAction} className="space-y-4">
            <div>
              <Label htmlFor="projectName">Project Name</Label>
              <Input id="projectName" name="projectName" placeholder="e.g., Modern Family Villa" />
              {state.fieldErrors?.projectName && <p className="text-sm font-medium text-destructive">{state.fieldErrors.projectName}</p>}
            </div>
            <div>
              <Label htmlFor="projectDescription">Project Description</Label>
              <Textarea id="projectDescription" name="projectDescription" placeholder="e.g., A 2-story villa with 4 bedrooms, a pool, and a garden." />
              {state.fieldErrors?.projectDescription && <p className="text-sm font-medium text-destructive">{state.fieldErrors.projectDescription}</p>}
            </div>
            <div>
              <Label htmlFor="projectScope">Project Scope</Label>
              <Textarea id="projectScope" name="projectScope" placeholder="e.g., Full construction from foundation to finishing, including landscaping." />
              {state.fieldErrors?.projectScope && <p className="text-sm font-medium text-destructive">{state.fieldErrors.projectScope}</p>}
            </div>
            <div>
              <Label htmlFor="projectLocation">Project Location</Label>
              <Input id="projectLocation" name="projectLocation" placeholder="e.g., Dubai, UAE" />
              {state.fieldErrors?.projectLocation && <p className="text-sm font-medium text-destructive">{state.fieldErrors.projectLocation}</p>}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="projectTimelineWeeks">Timeline (Weeks)</Label>
                <Input id="projectTimelineWeeks" name="projectTimelineWeeks" type="number" placeholder="e.g., 52" />
                 {state.fieldErrors?.projectTimelineWeeks && <p className="text-sm font-medium text-destructive">{state.fieldErrors.projectTimelineWeeks}</p>}
              </div>
              <div>
                <Label htmlFor="budget">Budget (USD)</Label>
                <Input id="budget" name="budget" type="number" placeholder="e.g., 500000" />
                {state.fieldErrors?.budget && <p className="text-sm font-medium text-destructive">{state.fieldErrors.budget}</p>}
              </div>
            </div>
            <div>
              <Label htmlFor="clientName">Client Name</Label>
              <Input id="clientName" name="clientName" placeholder="e.g., John Doe" />
              {state.fieldErrors?.clientName && <p className="text-sm font-medium text-destructive">{state.fieldErrors.clientName}</p>}
            </div>
            <SubmitButton />
            {state.error && !state.fieldErrors && <p className="text-sm font-medium text-destructive text-center">{state.error}</p>}
          </form>
        </CardContent>
      </Card>

      <div className="space-y-6">
        {pending ? (
          <>
            <Card>
              <CardHeader><Skeleton className="h-6 w-1/2" /></CardHeader>
              <CardContent><Skeleton className="h-32 w-full" /></CardContent>
            </Card>
            <Card>
              <CardHeader><Skeleton className="h-6 w-1/3" /></CardHeader>
              <CardContent><Skeleton className="h-24 w-full" /></CardContent>
            </Card>
          </>
        ) : state.data ? (
          <>
            <Card className="animate-fade-in-up">
              <CardHeader><CardTitle>Project Plan</CardTitle></CardHeader>
              <CardContent><pre className="whitespace-pre-wrap text-sm font-sans">{state.data.projectPlan}</pre></CardContent>
            </Card>
            <Card className="animate-fade-in-up animation-delay-200">
              <CardHeader><CardTitle>Project Timeline</CardTitle></CardHeader>
              <CardContent><pre className="whitespace-pre-wrap text-sm font-sans">{state.data.projectTimeline}</pre></CardContent>
            </Card>
            <Card className="animate-fade-in-up animation-delay-400">
              <CardHeader><CardTitle>Risk Assessment</CardTitle></CardHeader>
              <CardContent><pre className="whitespace-pre-wrap text-sm font-sans">{state.data.riskAssessment}</pre></CardContent>
            </Card>
             <Card className="animate-fade-in-up animation-delay-600">
              <CardHeader><CardTitle>Resource Allocation</CardTitle></CardHeader>
              <CardContent><pre className="whitespace-pre-wrap text-sm font-sans">{state.data.resourceAllocation}</pre></CardContent>
            </Card>
          </>
        ) : (
          <Card className="flex flex-col items-center justify-center h-full min-h-[400px]">
            <CardContent className="text-center">
              <Wand2 className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold">Your Plan Awaits</h3>
              <p className="text-muted-foreground mt-2">The generated project plan will appear here.</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
