import { Search } from "lucide-react"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"

export function SearchBar() {
  return (
    <InputGroup className="max-w-sm bg-stone-100">
      <InputGroupInput placeholder="Search..." />
      <InputGroupAddon>
        <Search className="size-4 text-muted-foreground" />
      </InputGroupAddon>
    </InputGroup>
  )
}
