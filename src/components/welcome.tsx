export function Welcome() {
  const today = new Date();
  const fullDate = today.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const weekday = today.toLocaleDateString("en-US", {
    weekday: "long",
  });

  return (
    <div className="bg-stone-50 mt-2 rounded-2xl border border-gray-200 px-6 py-5">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-xl font-semibold">Welcome,</h2>
          <p className="mt-1 text-gray-600">
            Lets get things done, peachfully!
          </p>
        </div>

        <div className="text-right">
          <h2 className="text-xl font-semibold">{weekday}</h2>
          <p className="text-gray-600">{fullDate}</p>
        </div>
      </div>
    </div>
  );
}
