import { SearchBar } from "./components/search-bar";
import { Button } from "./components/button";

export function App() {
  return (
    <div>
      <header>
        <div className="w-full flex justify-between px-3 py-2 border-b border-gray-200 bg-red-200">
          <img
            className="flex gap-3"
            src="/logo.svg"
            alt="Peach Plan Logo"
            width={50}
            height={30}
          />

          <SearchBar />
          <Button label="+ Add Project"/>
        </div>
      </header>
    </div>
  );
}
