import MainActor from "./assets/mainActor.svg";
import LevelBar from "./assets/levelBar.svg";
import "./App.css";
import { useState } from "react";
import ExampleImg from "./assets/mainActor.svg";

interface IFact {
  title: string;
  description: string;
}

const MAX_LEVEL = 4;
const NR_CLICKS = 2; // Nr of click per level

interface IState {
  level: number;
  description: string;
  mainActor: string; // Assets/Img
  facts: IFact[];
}

const state: IState[] = [
  {
    level: 1,
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
    level: 2,
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
    level: 3,
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
];

// const facts: IFact[] = [
//   {
//     title: "Fact #1",
//     description:
//       "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
//   },
//   {
//     title: "Fact #2",
//     description:
//       "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
//   },
// ];

function Fact({ title, description }: IFact) {
  return (
    <div className="fact">
      <div>{title}</div>
      <div>{description}</div>
    </div>
  );
}

function App() {
  const [clickProgress, setClickProgress] = useState(0);
  const [level, setLevel] = useState(1);

  const handleClick = () => {
    setClickProgress((prevProgress) => prevProgress + 1);

    console.log("Level: ", level);
    if (clickProgress % NR_CLICKS == 0 && level < MAX_LEVEL) {
      setLevel((prevLevel) => prevLevel + 1);
    }
  };

  return (
    <div>
      <div className="mainWrapper">
        <div className="levelBarWrapper">
          <img src={LevelBar} alt="Level bar" />
        </div>
        <div className="middleSection">
          <div className="mainActorWrapper">
            <img
              src={level ? state[level - 1].mainActor : MainActor}
              alt="Main actor"
            />
          </div>
          <div>
            <button onClick={handleClick}> Drink That </button>
          </div>
          <div>LEVEL: {level}</div>
        </div>

        <div className="factsList">
          {level
            ? state[level - 1].facts.map((fact) => (
                <Fact title={fact.title} description={fact.description} />
              ))
            : ""}
        </div>
      </div>
    </div>
  );
}

export default App;
