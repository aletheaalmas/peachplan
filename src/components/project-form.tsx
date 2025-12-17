import * as Form from "@radix-ui/react-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ProjectForm() {
  return (
    <Form.Root className="w-full rounded-2xl border-2 border-gray-200 p-6">
      <Form.Field name="title" className="mb-4">
        <div className="mb-1 flex items-center justify-between">
          <Form.Message match="valueMissing" className="text-xs text-red-500">
            Required
          </Form.Message>
        </div>
        <Form.Control asChild>
          <div className="relative">
            <Label htmlFor="project-name">Project Name</Label>
            <Input name="project-name" id="project-name" type="text" />
          </div>
        </Form.Control>
      </Form.Field>

      <Form.Field name="description" className="mb-4">
        <div className="relative">
          <Form.Control asChild>
            <Textarea placeholder="Add some notes or description for this project..." />
          </Form.Control>

          <div>
            <Button>Deadline</Button>
            <Button>Priority</Button>
            <Button>Status</Button>
          </div>
        </div>
      </Form.Field>

      {/* Submit */}
      <div className="flex justify-end">
        <Form.Submit asChild>
          <Button>+ Add Project</Button>
        </Form.Submit>
      </div>
    </Form.Root>
  );
}
