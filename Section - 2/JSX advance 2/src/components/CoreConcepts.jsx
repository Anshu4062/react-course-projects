import { CORE_CONCEPTS } from "../data.js";
import CoreConcept from "./CoreConcept.jsx";
import React from "react";

function CoreConcepts() {
  return (
    <div>
      <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          {CORE_CONCEPTS.map((ConceptItem, index) => (
            <CoreConcept key={index} {...ConceptItem} />
          ))}
        </ul>
      </section>
    </div>
  );
}

export default CoreConcepts;