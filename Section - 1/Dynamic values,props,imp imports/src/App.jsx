import reactCoreConceptsImage from "./assets/react-core-concepts.png";
import componentImg from "./assets/components.png";

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const headingReactDesc = reactDescriptions[genRandomInt(2)];

  return (
    <header>
      <img src={reactCoreConceptsImage} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {headingReactDesc} React concepts you will need for almost any app you
        are going to build!
      </p>
    </header>
  );
}

function CoreConcept(props) {
  return (
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          <CoreConcept
            title="Components"
            description="Just a description."
            image={componentImg}
          ></CoreConcept>
          <CoreConcept
            title="Components"
            description="Just a description."
            image={componentImg}
          ></CoreConcept>
          <CoreConcept
            title="Components"
            description="Just a description."
            image={componentImg}
          ></CoreConcept>
          <CoreConcept
            title="Components"
            description="Just a description."
            image={componentImg}
          ></CoreConcept>
        </ul>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
