import "./App.css";
import Card from "./Components/Card/CardContainer";
import Header from "./Components/Header";
import { useState } from "react";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [lose, setLose] = useState(false);
  const [win, setWin] = useState(false);
  const numberOfCards = 5;
  return (
    <>
      <Header
        score={score}
        bestScore={bestScore}
        numberOfCards={numberOfCards}
        setWin={setWin}
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
      />
    </>
  );
}

export default App;
