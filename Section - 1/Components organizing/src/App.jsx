import reactCoreConceptsImage from "./assets/react-core-concepts.png";
import CoreConcept from "./components/CoreConcepts.jsx";

import "./data.js";
import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header.jsx";
("./components/Header.jsx");

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            ></CoreConcept>

            {/* Shorter way */}
            <CoreConcept {...CORE_CONCEPTS[1]}></CoreConcept>
            <CoreConcept {...CORE_CONCEPTS[2]}></CoreConcept>
            <CoreConcept {...CORE_CONCEPTS[3]}></CoreConcept>
          </ul>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
