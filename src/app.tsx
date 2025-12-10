import { Logo, SearchBar } from "./header";
import { Projects } from "./projects";

export function App() {
  return (
    <div>
      <Logo
        name="Peach Plan Logo"
      />
      <SearchBar/>

      <Projects />
    </div>
  );
}
