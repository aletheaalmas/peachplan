import * as Form from "@radix-ui/react-form";
import { Button } from "./button";

export function ProjectForm() {
  return (
    <Form.Root className="w-full rounded-2xl border-2 border-gray-200 p-6">
      {/* <h2 className="mb-4 text-lg font-semibold text-gray-800">Add Project</h2> */}

 
      <Form.Field name="title" className="mb-4">
        <div className="mb-1 flex items-center justify-between">
          {/* <Form.Label className="text-sm font-medium text-gray-700">
            Project Name
          </Form.Label> */}
          <Form.Message match="valueMissing" className="text-xs text-red-500">
            Required
          </Form.Message>
        </div>

        <Form.Control asChild>
          <input
            required
            placeholder="Project Name"
            className="w-full rounded-lg px-3 py-2 text-sm outline-none "
          />
        </Form.Control>
      </Form.Field>

    
      <Form.Field name="description" className="mb-6">
        <div className="mb-1 flex items-center justify-between">
          {/* <Form.Label className="text-sm font-medium text-gray-700">
            Description
          </Form.Label> */}
          <Form.Message match="valueMissing" className="text-xs text-red-500">
            Required
          </Form.Message>
        </div>

        <Form.Control asChild>
          <textarea
            required
            placeholder="Short project description"
            className="min-h-[80px] w-full resize-none rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-red-300"
          />
        </Form.Control>
      </Form.Field>

      {/* Submit */}
      <Form.Submit asChild>
        <Button>+ Add Project</Button>
      </Form.Submit>
    </Form.Root>
  );
}
