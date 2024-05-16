const index = ({ score, bestScore, numberOfCards, setWinner, setScore }) => {
  if (score === numberOfCards) {
    setWinner(true);
    setScore(0);
  }
  return (
    <div className="flex flex-col gap-4 items-center justify-between p-8 bg-bg-color text-brown-text sm:flex-row  ">
      <div>
        <h1 className="text-2xl md:text-3xl lg:text-4xl">MEMORY CARD</h1>
        <p className="text-sm md:text-base lg:text-lg">
          Test your memory skills! Click on items, but beware—don&apos;t click
          the same one twice.
        </p>
      </div>
      <div className="flex w-[100%] sm:items-end items-start flex-col text-sm md:text-base lg:text-lg border  border-brown-text p-4">
        <div>
          <h2>Score: {score}</h2>
        </div>
        <div>
          <h2>Best Score:{bestScore}</h2>
        </div>
      </div>
    </div>
  );
};

export default index;
