import { useEffect } from "react";
import CreateCard from "./CreateCard";
import { useState } from "react";

const CardContainer = ({
  score,
  setScore,
  bestScore,
  setBestScore,
  numberOfCards,
  lose,
  setLose,
  win,
}) => {
  const [data, setData] = useState([]);
  const [clickedCard, setClickedCard] = useState([]);

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
  }, []);
  console.log(data);
  // function wich shuffles the cards randomly
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
    window.location.reload();
    setLose(false);
  }

  console.log(saveClickedCards);
  console.log("true or false");
  console.log(lose);
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
      <div
        className={`absolute top-0 left-0 w-full h-full ${
          lose ? "" : "hidden"
        }`}
      >
        <div className="flex justify-center items-center w-full h-full bg-gray-800 bg-opacity-50">
          <div className="text-white text-center">
            <h1>Game Over</h1>
            <button
              onClick={resetBtn}
              className="mt-4 px-4 py-2 bg-red-500 hover:bg-red-600 rounded-lg"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
      <div
        className={`absolute top-0 left-0 w-full h-full ${win ? "" : "hidden"}`}
      >
        <div className="flex justify-center items-center w-full h-full bg-gray-800 bg-opacity-50">
          <div className="text-white text-center">
            <h1>Congratulations!</h1>
            <p>You can Play again...</p>
            <button
              onClick={resetBtn}
              className="mt-4 px-4 py-2 bg-green-500 hover:bg-green-600 rounded-lg"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
