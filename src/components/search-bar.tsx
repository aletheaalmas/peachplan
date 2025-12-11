export function SearchBar() {
  return (
    <div className="relative w-full max-w-md">
      <span className="absolute left-3 top-1/2 -translate-y-1/2">
        <img src="/icons/search.svg" alt="Search Icon" width="15" height="16" />
      </span>
      <input
        type="text"
        placeholder="Search your projects"
        className="w-full bg-white
          pl-10 pr-4 py-2
          border-2 border-gray-300 rounded-lg
          placeholder:text-gray-400 text-gray-700
          focus:outline-none focus:ring-2 focus:ring-red-300
          "
      />
    </div>
  );
}
