export function SearchBar() {
  return (
    <form className="relative w-full max-w-md">
      <span className="absolute top-1/2 left-3 -translate-y-1/2">
        <img src="/icons/search.svg" alt="Search Icon" width="15" height="15" />
      </span>
      <input
        name="q"
        type="search"
        placeholder="Search your projects"
        className="w-full rounded-lg border-2 border-gray-300 bg-white py-2 pr-4 pl-10 text-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-red-300 focus:outline-none"
      />
    </form>
  );
}
