import { useEffect } from "react";
import CreateCard from "./CreateCard";
import { useState } from "react";

const CardContainer = ({ score, setScore, bestScore, setBestScore }) => {
  const [data, setData] = useState([]);
  const [clickedCard, setClickedCard] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch(
          `https://last-airbender-api.fly.dev/api/v1/characters/random?count=10`
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
    setData((prevData) => {
      const shuffledData = prevData.sort(() => Math.random() - 0.5);
      return [...shuffledData];
    });
  };

  const saveClickedCards = (cardId) => {
    if (clickedCard.includes(cardId)) {
      setScore(0);
      if (score > bestScore) {
        setBestScore(score);
      }
      setClickedCard([]);
      alert("game over");
    } else {
      setClickedCard((prevClickedCard) => [...prevClickedCard, cardId]);
      setScore(score + 1);
    }
  };

  console.log(saveClickedCards);

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
    </div>
  );
};

export default CardContainer;
