const index = ({ gameUpdate, loseOrWin, resetBtn }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full ${
        loseOrWin ? "" : "hidden"
      }`}
    >
      <div className="flex justify-center items-center w-full h-full bg-gray-800 bg-opacity-50">
        <div className="text-white text-center">
          <h2 className="text-md sm:text-lg">{gameUpdate}</h2>
          <button
            onClick={resetBtn}
            className={`mt-4 px-4 py-2 ${
              gameUpdate === "CONGRATULATIONS!"
                ? "bg-green-500 hover:bg-green-600"
                : "bg-red-500 hover:bg-red-600"
            } rounded-lg`}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default index;
