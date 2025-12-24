import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ProjectForm } from "./project-form";

export function AddProjectDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>+ Add Project</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[560px]">
        <DialogHeader>
          <DialogTitle>Add Project</DialogTitle>
        </DialogHeader>

        <ProjectForm />
      </DialogContent>
    </Dialog>
  );
}
