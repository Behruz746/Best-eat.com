import { useState } from "react";
import { data } from "../data/data";

function Food() {
  const [foods, setFoods] = useState(data);

  // Filter Type
  const filterType = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  // Filter by price
  const filterPrice = (price) => {
    setFoods(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };

  return (
    <div className="max-w-[1640px] mx-auto px-4 py-12">
      <h1 className="text-center text-4xl font-bold text-orange-600">
        Top Rated Menu Items
      </h1>

      {/* Filter Row */}
      <div className="flex flex-col lg:flex-row  justify-between">
        {/* Filter Type */}
        <div>
          <p className="font-bold text-gray-700">Filter Type</p>
          <div className="flex justify-between flex-wrap">
            <button
              onClick={() => setFoods(data)}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-[#fff]"
            >
              All
            </button>
            <button
              onClick={() => filterType("pizza")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-[#fff]"
            >
              Pizza
            </button>
            <button
              onClick={() => filterType("burger")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-[#fff]"
            >
              Burgers
            </button>
            <button
              onClick={() => filterType("salad")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-[#fff]"
            >
              Saldas
            </button>
            <button
              onClick={() => filterType("chicken")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-[#fff]"
            >
              Chicken
            </button>
          </div>
        </div>

        {/* Filter Price */}
        <div>
          <p className="font-bold text-gray-700">Filter Price</p>
          <div className="flex justify-between max-w-[390px] w-full">
            <button onClick={()=> filterPrice("$")} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-[#fff]">
              $
            </button>
            <button onClick={()=> filterPrice("$$")} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-[#fff]">
              $$
            </button>
            <button onClick={()=> filterPrice("$$$")} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-[#fff]">
              $$$
            </button>
            <button onClick={()=> filterPrice("$$$$")} className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-[#fff]">
              $$$$
            </button>
          </div>
        </div>
      </div>

      {/* Display foods */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {foods.map((item, index) => (
          <div
            key={index}
            className="border shadow-lg hover:scale-105 duration-300 rounded-[4px] overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[200px] object-cover"
            />
            <div className="flex justify-between px-2 py-4">
              <p className="font-bold ">{item.name}</p>
              <p>
                <span className="bg-orange-500 text-[#fff] p-1 rounded-full">
                  {item.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Food;
