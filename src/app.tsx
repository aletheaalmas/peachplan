import { Header } from "./header";
import { WelcomeSection } from "./welcome-section";
import { Projects } from "./projects";

export function App() {
  return (
    <div>
      <div>
        <img src="/logo.svg" alt="Peach Plan Logo" />
      </div>
      <Header />
      <WelcomeSection />
      <Projects />
    </div>
  );
}
