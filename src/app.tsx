import { SearchBar } from "./components/search-bar";
import { Button } from "./components/button";
import { WelcomeSection } from "./components/welcome-section";
import { Projects } from "./components/projects";

export function App() {
  return (
    <div className="bg-stone-50">
      <header>
        <div className="w-full border-b border-gray-200 bg-red-200">
          <div className="max-w-4xl mx-auto flex justify-between items-center px-3 py-2">
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
              <span className="w-10 h-10 rounded-full overflow-hidden bg-gray-200">
                <img
                  className="p-1 object-cover"
                  src="/avatar.svg"
                  alt="User Avatar"
                  width={50}
                  height={30}
                />
              </span>
            </div>
          </div>
        </div>
      </header>
      <main className="p-4 max-w-4xl mx-auto">
        <div>
        <WelcomeSection />
        </div>

        <Projects />
      </main>
    </div>
  );
}
