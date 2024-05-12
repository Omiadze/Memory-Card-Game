const CreateCard = ({ card }) => {
  return (
    <div className="!z-5 relative flex flex-col rounded-[20px] max-w-[300px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 flex flex-col w-full !p-4 3xl:p-![18px] bg-white undefined">
      <div className="h-full w-full">
        <div className="relative w-full">
          <img
            src={card.photoUrl}
            className="mb-3 h-full w-full rounded-xl 3xl:h-full 3xl:w-full"
            alt=""
          />
          <button className="absolute top-3 right-3 flex items-center justify-center rounded-full bg-white p-2 text-brand-500 hover:cursor-pointer">
            <div className="flex h-full w-full items-center justify-center rounded-full text-xl hover:bg-gray-50"></div>
          </button>
        </div>
        <div className="mb-3 flex items-center justify-between px-1 md:items-start">
          <div className="mb-2">
            <p className="text-lg font-bold text-navy-700">{card.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCard;
