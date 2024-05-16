import { useEffect } from "react";
import CreateCard from "./CreateCard";
import { useState } from "react";
import GameUpdateUi from "../GameUpdateUi/index";

const CardContainer = ({
  score,
  setScore,
  bestScore,
  setBestScore,
  numberOfCards,
  lose,
  setLose,
  setWinner,
  win,
}) => {
  const [data, setData] = useState([]);
  const [clickedCard, setClickedCard] = useState([]);
  const [resetBtnState, setResetBtnState] = useState(false);
  // fetching data from server with useEffect hook, which has dependency - resetBtnState
  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch(
          `https://last-airbender-api.fly.dev/api/v1/characters/random?count=${numberOfCards}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch cards");
        }

        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching cards:", error);
      }
    };

    fetchCards();
  }, [resetBtnState]);

  // function which shuffles the cards randomly

  const handleCardClick = () => {
    if (score === numberOfCards) {
      setClickedCard([]);
    }
    setData((prevData) => {
      const shuffledData = prevData.sort(() => Math.random() - 0.5);
      return [...shuffledData];
    });
  };

  const saveClickedCards = (cardId) => {
    if (clickedCard.includes(cardId)) {
      gameOver();
    } else {
      setClickedCard((prevClickedCard) => [...prevClickedCard, cardId]);
      setScore(score + 1);
    }
  };
  function gameOver() {
    setScore(0);
    if (score > bestScore) {
      setBestScore(score);
    }
    setClickedCard([]);
    setLose(true);
  }

  function resetBtn() {
    setResetBtnState(true);
    setWinner(false);
    setLose(false);
    console.log(`win state is ${win}`);
  }
  return (
    <div className="flex flex-wrap p-20 sm:p-48 justify-between items-center sm:justify-between">
      {data?.map((card) => (
        <CreateCard
          key={card._id}
          card={card}
          onClick={() => {
            saveClickedCards(card._id);
            handleCardClick();
          }}
        />
      ))}
      <GameUpdateUi
        resetBtn={resetBtn}
        gameUpdate={"GAME OVER"}
        loseOrWin={lose}
      />
      <GameUpdateUi
        resetBtn={resetBtn}
        gameUpdate={"CONGRATULATIONS!"}
        loseOrWin={win}
      />
    </div>
  );
};

export default CardContainer;
