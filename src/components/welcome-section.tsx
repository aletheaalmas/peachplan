export function WelcomeSection() {
  const today = new Date();
  const fullDate = today.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const month = today.toLocaleDateString("en-US", {
    month: "long",
  });

  return (
    <div className="border-2 border-gray-400 rounded-lg p-4 mt-6">
      <div className="flex justify-between items-start">
        
        <div>
          <h2 className="text-2xl font-semibold">Welcome,</h2>
          <p className="text-gray-600 mt-1">Lets get things done, peachfully!</p>
        </div>

    
        <div className="text-right">
          <h2 className="text-xl font-semibold">{month}</h2>
          <p className="text-gray-600">Today is {fullDate}</p>
        </div>
      </div>
    </div>
  );
}
