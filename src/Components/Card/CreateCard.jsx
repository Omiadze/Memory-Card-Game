const CreateCard = ({ card, onClick }) => {
  return (
    <div
      className="h-40 sm:h-48 md:h-80 md:w-64 w-20 sm:w-48 mb-4 transform transition duration-300 hover:scale-110 cursor-pointer"
      onClick={onClick}
    >
      <div className="relative w-full ">
        <img
          src={card?.photoUrl}
          className="mb-3 h-20 sm:h-32 md:h-64 md:w-64 w-20 sm:w-64 rounded-xl shadow-xl"
          alt=""
        />
      </div>
      <div className="mb-3 flex flex-col justify-center items-center px-1 md:flex-row md:items-start">
        <p className="text-xs sm:text-sm md:text-md text-center">{card.name}</p>
      </div>
    </div>
  );
};

export default CreateCard;
