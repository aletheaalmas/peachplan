export function Button({ label }: { label: string }) {
  return (
    <div>
      <button className="rounded-lg bg-red-400 from-neutral-300 px-4 py-2 text-white transition hover:bg-red-500">
        {label}
      </button>
    </div>
  );
}
