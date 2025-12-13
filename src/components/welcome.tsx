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
    <div className="mt-6 rounded-lg border-2 border-gray-400 p-4">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-2xl font-semibold">Welcome,</h2>
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
