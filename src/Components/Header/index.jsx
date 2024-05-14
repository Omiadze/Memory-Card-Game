const index = ({ score, bestScore, numberOfCards }) => {
  if (score === numberOfCards) {
    alert("You Win");
  }
  return (
    <div className="flex items-center justify-between p-4">
      <div>
        <h1>MEMORY CARD</h1>
        <p>
          Test your memory skills! Click on items, but beware—don&apos;t click
          the same one twice.
        </p>
      </div>
      <div>
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
