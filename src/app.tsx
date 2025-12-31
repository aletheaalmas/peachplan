import { SearchBar } from "./components/search-bar";
import { Projects } from "./components/projects";
// import { Welcome } from "./components/welcome";
import { AddProjectDialog } from "./components/add-project-dialog";

export function App() {
  return (
    <>
      <header className="w-full border-b border-gray-200 bg-red-300">
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
            <AddProjectDialog />
            <button className="h-10 w-10 overflow-hidden rounded-full bg-gray-100">
              <img
                className="object-cover"
                src="/avatar.svg"
                alt="User Avatar"
                width={50}
                height={50}
              />
            </button>
          </div>
        </nav>
      </header>
      <main className="mx-auto max-w-4xl space-y-8 p-4">
        {/* <Welcome /> */}

        <Projects />
      </main>
    </>
  );
}
