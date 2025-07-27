
import { AIPlannerForm } from "@/components/ai-planner-form";

export default function AIPlanner() {
  return (
    <section id="ai-planner" className="bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">AI-Powered Project Planner</h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-3xl mx-auto">
            Get a head start on your project. Provide your project details below, and our AI will generate a draft project plan, timeline, and more in seconds.
          </p>
        </div>
        <AIPlannerForm />
      </div>
    </section>
  );
}
