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
          <div className="flex justify-between gap-4">
            <Button label="+ Add Project" />
            <span className="w-10 h-10 rounded-full bg-gray-200">
              <img
                className="flex p-1"
                src="/avatar.svg"
                alt="User Avatar"
                width={50}
                height={30}
              />
            </span>
          </div>
        </div>
      </header>
    </div>
  );
}
