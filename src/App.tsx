import MainActor from "./assets/mainActor.svg";
import LevelBar from "./assets/levelBar.svg";
import "./App.css";
import { useEffect, useState } from "react";

interface IFact {
    title: string;
    description: string;
}

const MAX_LEVEL = 5;

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

    const [clickProgress, setClickProgress] = useState(0);
    const [level, setLevel] = useState(0);


    const handleClick = () => {
        setClickProgress(prevProgress => prevProgress + 1);

        if (clickProgress % 2 == 0 && level < MAX_LEVEL) {
            setLevel(prevLevel => prevLevel + 1);
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
                        <img src={MainActor} alt="Main actor" />
                    </div>
                    <div>
                        <button onClick={handleClick}> Drink That </button>
                    </div>
                    <div>
                        LEVEL: {level}
                    </div>
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
