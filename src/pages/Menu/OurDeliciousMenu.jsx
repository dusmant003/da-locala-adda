import React from "react";

const FoodSection = () => {
  const categories = ["Pizza", "Burger", "Sushi", "Chicken", "Fries"];
  const foods = [
    {
      id: 1,
      name: "Grill Chicken Pizza",
      desc: "Candied Jerusalem artichokes, truffle",
      price: "30.99",
      img: "/images/pizza1.png",
    },
    {
      id: 2,
      name: "Salmon Bagel",
      desc: "Smoky Pepperoni, Melting Cheese",
      price: "39.85",
      img: "/images/pizza2.png",
    },
    {
      id: 3,
      name: "Bacon Italian Pizza",
      desc: "Spicy Jalapeño, Creamy Ranch",
      price: "20.99",
      img: "/images/pizza3.png",
    },
    {
      id: 4,
      name: "Delicious Pizza",
      desc: "Spicy Jalapeño, Creamy Ranch",
      price: "40.99",
      img: "/images/pizza4.png",
    },
  ];

  return (
    <section className="py-16 px-6 sm:px-10 bg-[#fff8ef] text-center">
      <p className="text-sm text-orange-600 font-semibold mb-2 tracking-wide">
        OUR FAST FOODS
      </p>
      <h2 className="text-3xl sm:text-4xl font-extrabold mb-8">
        OUR DELICIOUS FAST <span className="text-red-600">FOODS</span>
      </h2>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {categories.map((cat, index) => (
          <button
            key={index}
            className={`px-5 py-2 rounded-sm font-semibold transition-all ${
              cat === "Pizza"
                ? "bg-red-600 text-white"
                : "bg-[#f6e0b5] hover:bg-red-500 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Food Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {foods.map((food) => (
          <div
            key={food.id}
            className="bg-[#fcf7e8] rounded-[40px] p-6 hover:scale-105 transition-transform duration-300 flex flex-col items-center"
          >
            <img
              src={food.img}
              alt={food.name}
              className="w-36 h-36 object-contain mb-4"
            />
            <h3 className="font-bold text-lg mb-2">{food.name}</h3>
            <p className="text-gray-600 mb-4 text-sm">{food.desc}</p>
            <div className="bg-yellow-400 rounded-full px-5 py-2 font-semibold">
              ${food.price}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FoodSection;
