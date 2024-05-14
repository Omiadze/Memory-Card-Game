import "./App.css";
import Card from "./Components/Card/CardContainer";
import Header from "./Components/Header";
import { useState } from "react";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const numberOfCards = 15;
  return (
    <>
      <Header
        score={score}
        bestScore={bestScore}
        numberOfCards={numberOfCards}
      />
      <Card
        score={score}
        setScore={setScore}
        bestScore={bestScore}
        setBestScore={setBestScore}
        numberOfCards={numberOfCards}
      />
    </>
  );
}

export default App;
