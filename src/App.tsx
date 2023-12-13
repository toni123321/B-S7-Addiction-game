import "./App.css";
import { useState } from "react";
import LevelOnePerson from "./assets/level-1.png";
import LevelTwoPerson from "./assets/level-2.png";
import LevelThreePerson from "./assets/level-3.png";
import LevelFourPerson from "./assets/level-4.png";
import LevelFivePerson from "./assets/level-5.png";
import ProgressBar from "@ramonak/react-progress-bar";

import DefaultBg from "./assets/default-bg.jpeg";
import LevelOneBg from "./assets/level-1-bg.jpg";
import LevelTwoBg from "./assets/level-2-bg.jpg";
import LevelThreeBg from "./assets/level-3-bg.jpg";
import LevelFourBg from "./assets/level-4-bg.jpg";
import LevelFiveBg from "./assets/level-5-bg.jpg";

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
  background: string; // Assets/Img
  facts: IFact[];
}

const state: IState[] = [
  {
    level: 0,
    description: "# 1",
    mainActor: LevelOnePerson,
    background: DefaultBg,
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
    mainActor: LevelOnePerson,
    background: LevelOneBg,
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
    mainActor: LevelTwoPerson,
    background: LevelTwoBg,
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
    mainActor: LevelThreePerson,
    background: LevelThreeBg,
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
    mainActor: LevelFourPerson,
    background: LevelFourBg,
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
    mainActor: LevelFivePerson,
    background: LevelFiveBg,
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
  "habbit use",
  "dependance", // problem use
  "addiciton",
];

const backgroundStyle = (level: number) => ({
  minHeight: "100%",
  backgroundImage: `url(${state[level].background})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
});

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
  // Used for Progress bar
  const maxCompleted = (MAX_LEVEL + 1) * NR_CLICKS;

  const handleClick = () => {
    setClickProgress((prevProgress) => prevProgress + 1);
    setProgress((p) => p + 1);
    if (clickProgress % NR_CLICKS == 0 && level <= MAX_LEVEL - 1) {
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
            height="70px"
            completed={progress}
            maxCompleted={maxCompleted}
            // Adding first letter of the stage as label
            customLabel={addiciton.substring(0, 1).toUpperCase()}
          />
        </div>
        <div className="middleSection">
          <div className="mainActorWrapper" style={backgroundStyle(level)}>
            <img src={state[level].mainActor} alt="Main actor" />
          </div>
          <div>
            <button onClick={handleClick}> Drink That </button>
          </div>
          <div>LEVEL: {level}</div>
          <div>STAGE: {addiciton}</div>
        </div>
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
