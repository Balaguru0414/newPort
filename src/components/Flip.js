const Flip = () => {
  return (
    <div className="w-64 m-auto mt-10">
      <div className="relative w-full h-48 bg-blue-500 rounded shadow-lg cursor-pointer transform transition-transform duration-500 ease-in-out hover:rotate-y-180">
        <div className="absolute w-full h-full bg-blue-500 rounded shadow-lg backface-hidden">
          <div className="flex items-center justify-center h-full text-white text-2xl">
            Front
          </div>
        </div>
        <div className="absolute w-full h-full bg-green-500 rounded shadow-lg backface-hidden rotate-y-180">
          <div className="flex items-center justify-center h-full text-white text-2xl">
            Back
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flip;
