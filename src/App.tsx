import MainActor from "./assets/mainActor.svg";
import "./App.css";
import { useState } from "react";
import ExampleImg from "./assets/mainActor.svg";
import LevelOnePerson from "./assets/level-1.png";
import LevelTwoPerson from "./assets/level-2.png";
import LevelThreePerson from "./assets/level-3.png";
import LevelFourPerson from "./assets/level-4.png";
import LevelFivePerson from "./assets/level-5.png";
import ProgressBar from "@ramonak/react-progress-bar";

interface IFact {
    title: string;
    description: string;
}

const MAX_LEVEL = 6;
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
        background: "./src/assets/background-1.jpeg",
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
        background: "./src/assets/level-1-bg.jpg",
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
        background: "./src/assets/level-2-bg.jpg",
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
        background: "./src/assets/level-3-bg.jpg",
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
        background: "./src/assets/level-4-bg.jpg",
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
        background: "./src/assets/level-5-bg.jpg",
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
    "initial use",
    "experimentation",
    "social use",
    "dependance",
    "addiciton",
];

const backgroundStyle = (level: number) => ({
    "background": `url(${state[level].background})`,
    "background-position": "center center",
    "background-size": "cover"
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

    const handleClick = () => {
        setClickProgress((prevProgress) => prevProgress + 1);
        setProgress((p) => p + 1);
        if (clickProgress % NR_CLICKS == 0 && level < MAX_LEVEL - 1) {
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
                        // Adding first letter of the stage as label
                        customLabel={addiciton.substring(0, 1).toUpperCase()}
                    />
                </div>
                <div className="middleSection">
                    <div className="mainActorWrapper" style={backgroundStyle(level)} >
                        { /* 
            <img
              src={state[level].background}
              alt="background"
            />
            */ }
                        <img
                            src={state[level].mainActor}
                            alt="Main actor"
                        />

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
