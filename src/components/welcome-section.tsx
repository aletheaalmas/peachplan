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
    <div>
      <div>
        <h2>Welcome</h2>
        <p>Lets get things done, peachfully</p>
      </div>

      <div>
        <h2>{month}</h2>
        <p>Today is {fullDate}</p>
      </div>
    </div>
  );
}
