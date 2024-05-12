import { useEffect } from "react";
import CreateCard from "./CreateCard";
import { useState } from "react";

const CardContainer = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch(
          `https://last-airbender-api.fly.dev/api/v1/characters/random?count=12`
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

  return (
    <div className="flex flex-wrap p-20">
      {data?.map((card) => (
        <CreateCard key={card._id} card={card} />
      ))}
    </div>
  );
};

export default CardContainer;
