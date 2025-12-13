import { SearchBar } from "./components/search-bar";
import { Button } from "./components/button";
import { WelcomeSection } from "./components/welcome-section";
import { Projects } from "./components/projects";

export function App() {
  return (
    <>
      <header className="w-full border-b border-gray-200 bg-red-200">
        <nav className="mx-auto flex max-w-4xl items-center justify-between px-3 py-2">
          <a href="/">
            <img
              className="flex gap-3"
              src="/logo.svg"
              alt="Peach Plan Logo"
              width={50}
              height={30}
            />
          </a>

          <SearchBar />

          <div className="flex justify-between gap-4">
            <Button label="+ Add Project" />
            <span className="h-10 w-10 overflow-hidden rounded-full bg-gray-200">
              <img
                className="object-cover p-1"
                src="/avatar.svg"
                alt="User Avatar"
                width={50}
                height={30}
              />
            </span>
          </div>
        </nav>
      </header>
      <main className="mx-auto max-w-4xl p-4">
        <div>
          <WelcomeSection />
        </div>

        <Projects />
      </main>
    </>
  );
}
