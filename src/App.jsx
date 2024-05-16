import "./App.css";
import Card from "./Components/Card/CardContainer";
import Header from "./Components/Header";
import { useState } from "react";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [lose, setLose] = useState(false);
  const [win, setWinner] = useState(false);
  const numberOfCards = 10;
  return (
    <>
      <Header
        score={score}
        bestScore={bestScore}
        numberOfCards={numberOfCards}
        setWinner={setWinner}
        setScore={setScore}
      />
      <Card
        score={score}
        setScore={setScore}
        bestScore={bestScore}
        setBestScore={setBestScore}
        numberOfCards={numberOfCards}
        lose={lose}
        setLose={setLose}
        win={win}
        setWinner={setWinner}
      />
    </>
  );
}

export default App;
