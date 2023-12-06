import MainActor from "./assets/mainActor.svg";
import LevelBar from "./assets/levelBar.svg";
import "./App.css";

interface IFact {
  title: string;
  description: string;
}
const facts: IFact[] = [
  {
    title: "Fact #1",
    description:
      "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
  },
  {
    title: "Fact #2",
    description:
      "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
  },
];

function Fact({ title, description }: IFact) {
  return (
    <div className="fact">
      <div>{title}</div>
      <div>{description}</div>
    </div>
  );
}

function App() {
  return (
    <div>
      <div className="mainWrapper">
        <div className="levelBarWrapper">
          <img src={LevelBar} alt="Level bar" />
        </div>
        <div className="mainActorWrapper">
          <img src={MainActor} alt="Main actor" />
        </div>
        <div className="factsList">
          {facts.map((fact) => (
            <Fact title={fact.title} description={fact.description} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
