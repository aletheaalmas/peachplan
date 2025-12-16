import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { EllipsisVertical } from "lucide-react";

export function ProjectActions() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          className="rounded-md p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-800"
          aria-label="Project actions"
        >
          <EllipsisVertical size={14} />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="end"
          sideOffset={6}
          className="w-32 rounded-lg border border-gray-200 bg-white p-1 text-xs shadow-md"
        >
          <DropdownMenu.Item className="cursor-pointer rounded px-2 py-1.5 hover:bg-gray-100">
            View
          </DropdownMenu.Item>

          <DropdownMenu.Item className="cursor-pointer rounded px-2 py-1.5 hover:bg-gray-100">
            Move To
          </DropdownMenu.Item>

          <DropdownMenu.Separator className="my-1 h-px bg-gray-200" />

          <DropdownMenu.Item className="cursor-pointer rounded px-2 py-1.5 text-red-500 hover:bg-red-50">
            Delete
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
