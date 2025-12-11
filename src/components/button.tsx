export function Button({label} : {label:string;}) {
  return (
    <div>
      <button
        className="
            bg-red-400 hover:bg-red-500 text-white
            px-4 py-2 rounded-lg from-neutral-300 transition
          "
      >
        {label}
      </button>
    </div>
  );
}
