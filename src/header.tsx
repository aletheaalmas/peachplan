import logoImage from "./assets/logo.svg";
export function Header() {
  return (
    <header>
      <div>
        <img src={logoImage} alt="Peach Plan Logo" />
      </div>

      <div>
        <input
          type="text"
          placeholder="Search your projects"
          className="
           max-w-md px-4 py-2
            border border-gray-300 rounded-lg
            placeholder:text-gray-400 text-gray-700
          "
        />
      </div>

      <button>+ Add Project</button>
    </header>
  );
}
