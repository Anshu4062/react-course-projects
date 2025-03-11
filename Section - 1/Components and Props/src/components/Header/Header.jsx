import componentImg from "../../assets/react-core-concepts.png";
import "./Header.css";

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  const headingReactDesc = reactDescriptions[genRandomInt(2)];

  return (
    <header>
      <img src={componentImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {headingReactDesc} React concepts you will need for almost any app you
        are going to build!
      </p>
    </header>
  );
}
