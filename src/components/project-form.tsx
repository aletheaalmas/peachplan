import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FieldLabel } from "@/components/ui/field";
import { Card } from "@/components/ui/card";

export function ProjectForm() {
  return (
    <Card className="rounded-2xl bg-stone-50 p-6">
      <form className="space-y-4">
        <FieldLabel>Project Name</FieldLabel>
        <Input placeholder="Name your project" />
        <FieldLabel>Project Description</FieldLabel>
        <Textarea
          placeholder="Add some notes or description..."
          className="min-h-[120px]"
        />

        <div className="flex gap-2">
          <Button variant="secondary">Deadline</Button>
          <Button variant="secondary">Priority</Button>
          <Button variant="secondary">Status</Button>
        </div>

        <div className="flex justify-end">
          <Button type="submit">+ Add Project</Button>
        </div>
      </form>
    </Card>
  );
}
