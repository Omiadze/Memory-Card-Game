const CreateCard = ({ card, onClick }) => {
  return (
    <div
      className="h-40 sm:h-48 md:h-80 md:w-64 w-20 sm:w-48 mb-4 transform transition duration-300 hover:scale-110 cursor-pointer"
      onClick={onClick}
    >
      <div className="relative w-full">
        <img
          src={card?.photoUrl}
          className="mb-3 h-20 sm:h-32 md:h-64 md:w-64 w-20  sm:w-48 rounded-xl"
          alt=""
        />
      </div>
      <div className="mb-3 flex items-center justify-between px-1 md:items-start">
        <div className="mb-2">
          <p className="text-sm sm:text-md font-bold text-navy-700">
            {card.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreateCard;
