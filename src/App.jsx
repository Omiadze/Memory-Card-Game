import "./App.css";
import Card from "./Components/Card/CardContainer";
import Header from "./Components/Header";
import { useState } from "react";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  return (
    <>
      <Header score={score} bestScore={bestScore} />
      <Card
        score={score}
        setScore={setScore}
        bestScore={bestScore}
        setBestScore={setBestScore}
      />
    </>
  );
}

export default App;
