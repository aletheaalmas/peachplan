import { Header } from "./header";
import { WelcomeSection } from "./welcome-section";
import { Projects } from "./projects";

export function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <WelcomeSection />
      <Projects />
    </div>
  );
}
