import { cardData } from "../data/data";

function HeadlineCards() {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      {/* Card */}
      {cardData.map(({ title, text, imageLink }, index) => (
        <div className="rounded-xl relative overflow-hidden" key={index}>
          {/* Overlay */}
          <div className="absolute w-full h-full bg-black/50 text-[#fff] z-0">
            <p className="font-bold text-2xl px-2 pt-4">{title}</p>
            <p className="px-2 ">{text}</p>
            <button className="border-[#fff] bg-[#fff] text-[#000] mx-2 absolute bottom-4 hover:bg-[#ebe9e9]">
              Order Now
            </button>
          </div>
          <img
            width="100%"
            height={160}
            src={imageLink}
            className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
            alt="burger image"
          />
        </div>
      ))}
    </div>
  );
}

export default HeadlineCards;
