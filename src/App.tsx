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
        title: "Clean Stage Fact 1",
        description:
          "44 % of young people (ages 18 to 34) say it is accepted in their circle of friends to use hard drugs occasionally. 3 in 10 have used hard drugs themselves in the past 3 years.",
      },
      {
        title: "Clean Stage Fact 2",
        description:
          "From the 17,5 million people that live in the netherlands, 1,8 million have an addiction of which approximate 50 thousend are getting help",
      },
      {
        title: "Story",
        description:
          "Jules starts from a point of being 'clean', without any substance use. He describes his normal upbringing, challenging the stereotype that addiction only affects those from troubled backgrounds.",
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
        title: "Experimentation Stage Fact 1",
        description:
          "After using coke once the chance of you getting addicted to coke is approximatly 15% .",
      },
      {
        title: "Experimentation Stage Fact 2",
        description:
          "Although there is little data available on the use of 3-MMC (also known as poes or miauw miauw), there is a clear upward trend. 3-MMC is a drug that closely resembles a combination of XTC, speed and cocaine. The drug causes severe withdrawal symptoms and cravings, making the risk of developing a serious addiction very high.",
      },
      {
        title: "Story",
        description:
          "The experimentation stage for Jules begins in his teens. He starts drinking at 15, seeking freedom and an escape from his insecurities and struggles with eating disorders.",
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
        title: "Social Use Stage Fact 1",
        description:
          "After using drugs once in general, the chance of you getting addicted are very",
      },
      {
        title: "Social Use Stage Fact 2",
        description:
          "Drug abuse is linked to mental health disorders, such as anxiety, depression and impared cognative function ",
      },
      {
        title: "Story",
        description:
          "Jules introduces alcohol to his social circle. While his friends treat drinking as an occasional activity, Jules finds herself unable to stop thinking about alcohol, marking the transition from social use to a deeper involvement.",
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
        title: "Habbit Use Stage Fact 1",
        description:
          "After using the drugs multiple times the chance of getting addicted increases, and starts alters the brain  when using drugs becomes a habit",
      },
      {
        title: "Habbit Use Stage Fact 2",
        description:
          "Addiction is a chronical illness, where the dopamine receptores in the brain are decreased. When this happend your brain therefore is permanently altered. ",
      },
      {
        title: "Story",
        description:
          "In college, Jules' drinking escalates. He joins a sorority, befriends drug dealers, and starts drinking more heavily. This phase signifies his slipping into habitual use, where drinking becomes a regular part of his life.",
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
        title: "Dependance Stage Fact 1",
        description:
          "Drug abuse often strains relationships with family and friends, leading to conflicts and isolation.",
      },
      {
        title: "Dependance Stage Fact 2",
        description:
          "Repeated use of drugs can damage the essential decision-making center at the front of the brain. This area, known as the prefrontal cortex, is the very region that should help you recognize the harms of using addictive substances.",
      },
      {
        title: "Story",
        description:
          "Jules reaches a point of dependence when he can no longer achieve the desired effects of alcohol. his alcoholism progresses, impacting his life significantly - academically, socially, and personally, including a traumatic miscarriage and being asked to leave university.",
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
        title: "Addiction Stage Fact 1",
        description:
          "Supporting a drug habit can be expensive, leading to financial diffuculties and instability.",
      },
      {
        title: "Addiction Stage Fact 2",
        description:
          "In 2021 there were 298 deads of drugs overdosis in the netherlands. Thats more then one person per day.",
      },
      {
        title: "Story",
        description:
          "This stage is characterized by Jules' complete loss of control over his drinking, culminating in his realization and acceptance of being an alcoholic. This is a crucial turning point in his story.",
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
  minheight: "100%",
  backgroundImage: `url(${state[level].background})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
});

// Button colors
const buttonColors = [
  { backgroundColor: "#FFFFFF", color: "#000000" },
  { backgroundColor: "#F1F2EB", color: "#000000" },
  { backgroundColor: "#D8DAD3", color: "#000000" },
  { backgroundColor: "#A4C2A5", color: "#FFFFFF" },
  { backgroundColor: "#566246", color: "#FFFFFF" },
  { backgroundColor: "#4A4A48", color: "#FFFFFF" },
];

const buttonStyle = (level: number) => ({
  backgroundColor: buttonColors[level].backgroundColor,
  color: buttonColors[level].color,
});

function Fact({ title, description }: IFact) {
  return (
    <div className="fact">
      <div className="factTitle">{title}</div>
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
            <button
              className="drinkBtn"
              style={buttonStyle(level)}
              onClick={handleClick}
            >
              Drink That
            </button>
          </div>
          <div className="outerDashboard">
            <div className="dashboard">
              <div className="sectionItem">
                <b>LEVEL:</b> {level}
              </div>
              <div className="pipe"></div>
              <div className="sectionItem">
                <b>STAGE:</b> {addiciton}
              </div>
            </div>
          </div>
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
