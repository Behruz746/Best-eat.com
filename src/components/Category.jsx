import { categories } from "../data/data";

function Category() {
  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-center text-orange-600 font-bold text-4xl">
        Top Rated Menu Items
      </h1>
      {/* Categories */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6">
        {categories.map((data, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-lg p-4 flex justify-between items-center"
          >
            <h2 className="font-bold sm:text-xl">{data.name}</h2>
            <img src={data.image} alt={data.name} className="w-20" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
