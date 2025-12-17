import * as Form from "@radix-ui/react-form";
import { Button } from "./button";

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
            <input
              id="project-name"
              type="text"
              placeholder=" "
              className="peer w-full rounded-xl px-4 pt-6 pb-3 text-sm text-gray-800 outline-none focus:border-red-300 focus:ring-1 focus:ring-red-200"
            />

            <label
              htmlFor="project-name"
              className="pointer-events-none absolute top-2 top-4 left-4 origin-left text-sm text-xs font-semibold text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-xs peer-focus:font-medium peer-focus:text-pink-500"
            >
              Project Name
            </label>
            <Form.Message match="valueMissing" className="text-xs text-red-500">
              Required
            </Form.Message>
          </div>
        </Form.Control>
      </Form.Field>

      <Form.Field name="description" className="mb-6">
        <div className="mb-1 flex items-center justify-between">
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
