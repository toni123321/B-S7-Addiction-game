import MainActor from "./assets/mainActor.svg";
import "./App.css";
import { useState } from "react";
import ExampleImg from "./assets/mainActor.svg";
import ProgressBar from "@ramonak/react-progress-bar";

interface IFact {
  title: string;
  description: string;
}

const MAX_LEVEL = 5;
const NR_CLICKS = 4; // Nr of click per level

interface IState {
  level: number;
  description: string;
  mainActor: string; // Assets/Img
  facts: IFact[];
}

const state: IState[] = [
  {
    level: 0,
    description: "# 1",
    mainActor: ExampleImg,
    facts: [
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
    ],
  },
  {
    level: 1,
    description: "# 2",
    mainActor: ExampleImg,
    facts: [
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
    ],
  },
  {
    level: 2,
    description: "# 3",
    mainActor: ExampleImg,
    facts: [
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
    ],
  },
  {
    level: 3,
    description: "# 4",
    mainActor: ExampleImg,
    facts: [
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
    ],
  },
  {
    level: 4,
    description: "# 4",
    mainActor: ExampleImg,
    facts: [
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
    ],
  },
  {
    level: 5,
    description: "# 5",
    mainActor: ExampleImg,
    facts: [
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
    ],
  },
];

const stages: string[] = [
  "clean",
  "experimentation",
  "social use",
  "dependance",
  "addiciton",
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
  const [clickProgress, setClickProgress] = useState(1);
  const [level, setLevel] = useState(0);
  const [progress, setProgress] = useState(0);
  const [addiciton, setAddiciton] = useState(stages[level]);

  const handleClick = () => {
    setClickProgress((prevProgress) => prevProgress + 1);
    setProgress((p) => p + 1);
    if (clickProgress % NR_CLICKS == 0 && level < MAX_LEVEL) {
      setLevel((prevLevel) => {
        prevLevel = prevLevel + 1;
        setAddiciton(stages[prevLevel]);
        return prevLevel;
      });
    }
  };

  return (
    <div>
      <div className="mainWrapper">
        <div className="levelBarWrapper">
          <ProgressBar
            completed={progress}
            maxCompleted={20}
            customLabel={addiciton}
          />
        </div>
        <div className="middleSection">
          <div className="mainActorWrapper">
            <img
              src={level ? state[level].mainActor : MainActor}
              alt="Main actor"
            />
          </div>
          <div>
            <button onClick={handleClick}> Drink That </button>
          </div>
          <div>LEVEL: {level}</div>
        </div>

        {/* <div className="factsList">
          {level
            ? state[level].facts.map((fact) => (
                <Fact title={fact.title} description={fact.description} />
              ))
            : ""}
        </div> */}
        <div className="factsList">
          {state[level].facts.map((fact, index) => (
            <Fact
              key={index}
              title={fact.title}
              description={fact.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
