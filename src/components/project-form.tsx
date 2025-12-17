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
              className="peer w-full rounded-xl px-4 pt-6 pb-3 text-sm text-gray-800 outline-none"
            />

            <label
              htmlFor="project-name"
              className="pointer-events-none absolute top-2 left-4 origin-left text-sm font-semibold text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-xs peer-focus:font-medium peer-focus:text-red-400"
            >
              Project Name
            </label>
          </div>
        </Form.Control>
      </Form.Field>

      <Form.Field name="description" className="mb-4">
        <div className="relative">
          <Form.Control asChild>
            <textarea
              placeholder="You can write your project description here..."
              className="min-h-[120px] w-full rounded-xl border border-gray-200 px-4 py-4 text-sm outline-none focus:border-red-300 focus:ring-1 focus:ring-red-300"
            />
          </Form.Control>

          {/* Pills */}
          <div className="absolute bottom-3 left-4 flex gap-2">
            <button
              type="button"
              className="rounded-full px-3 py-1 text-[10px] text-gray-500 hover:bg-gray-200"
            >
              Deadline
            </button>

            <button
              type="button"
              className="rounded-full px-3 py-1 text-[10px] text-gray-500 hover:bg-gray-200"
            >
              Priority
            </button>

            <button
              type="button"
              className="rounded-full px-3 py-1 text-[10px] text-gray-500 hover:bg-gray-200"
            >
              Stage
            </button>
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
