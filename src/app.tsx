import { Header } from "./header";
import { WelcomeSection } from "./welcome-section";
import { Projects } from "./projects";

export function App() {
  return (
    <div>
      <Header />
      <WelcomeSection />
      <Projects />
    </div>
  );
}
