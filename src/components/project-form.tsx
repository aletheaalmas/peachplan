import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FieldLabel } from "@/components/ui/field";
import { Card } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button variant="secondary">Deadline</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent></DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button variant="secondary">Priority</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {" "}
              <DropdownMenuItem>P0</DropdownMenuItem>
              <DropdownMenuItem>P1</DropdownMenuItem>
              <DropdownMenuItem>P2</DropdownMenuItem>
              <DropdownMenuItem>P3</DropdownMenuItem>
              <DropdownMenuItem>P4</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button variant="secondary">Status</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {" "}
              <DropdownMenuItem>To Do</DropdownMenuItem>
              <DropdownMenuItem>In Progress</DropdownMenuItem>
              <DropdownMenuItem>In Review</DropdownMenuItem>
              <DropdownMenuItem>Done</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="flex justify-end">
          <Button type="submit">+ Add Project</Button>
        </div>
      </form>
    </Card>
  );
}
