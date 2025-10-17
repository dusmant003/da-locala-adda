import React, { useState } from "react";

const MenuCard = () => {
    const [activeCategory, setActiveCategory] = useState("Event Creating");

    // === Menu data for each category ===
    const menuData = {
        "Event Creating": [
            { img: "https://cdn.pixabay.com/photo/2025/09/30/12/05/pizza-9864373_1280.jpg", title: "Grill Chicken Pizza", desc: "Candied Jerusalem artichokes, truffle", price: "$30.99" },
            { img: "https://cdn.pixabay.com/photo/2023/01/09/05/55/bagel-7706691_1280.jpg", title: "Salmon Bagel", desc: "Smoky Pepperoni, Melting Cheese", price: "$39.85" },
            { img: "https://cdn.pixabay.com/photo/2023/03/26/02/09/pizza-7877398_1280.jpg", title: "Bacon Italian Pizza", desc: "Spicy Jalapeño, Creamy Ranch", price: "$20.99" },
            { img: "https://cdn.pixabay.com/photo/2024/08/04/00/36/ai-generated-8943359_1280.jpg", title: "Delicious Pizza", desc: "Spicy Jalapeño, Creamy Ranch", price: "$40.99" },
        ],
        "Meal Plans": [
            { img: "https://cdn.pixabay.com/photo/2024/02/06/10/52/ai-generated-8556730_1280.jpg", title: "Veg Supreme Burger", desc: "Lettuce, Tomato, Creamy Cheese", price: "$22.50" },
            { img: "https://cdn.pixabay.com/photo/2023/04/02/13/33/ai-generated-7894660_1280.jpg", title: "Italian Pasta", desc: "Basil Sauce, Olives, Garlic", price: "$25.75" },
        ],
        "Food Delivery": [
            { img: "https://cdn.pixabay.com/photo/2023/10/01/21/35/ai-generated-8288192_1280.jpg", title: "Chicken Tikka", desc: "Grilled Chicken with Herbs", price: "$29.40" },
            { img: "https://cdn.pixabay.com/photo/2023/10/21/09/00/ai-generated-8331065_1280.jpg", title: "Veg Wrap", desc: "Fresh Veggies, Spicy Sauce", price: "$19.80" },
        ],
        "Diet Plans": [
            { img: "https://cdn.pixabay.com/photo/2024/02/02/12/34/lettuce-8548078_1280.jpg", title: "Quinoa Salad", desc: "Avocado, Olive Oil, Veggies", price: "$18.99" },
            { img: "https://cdn.pixabay.com/photo/2024/09/10/12/38/ai-generated-9037066_1280.jpg", title: "Fruit Bowl", desc: "Mixed Seasonal Fruits", price: "$16.50" },
        ],
    };

    const categories = Object.keys(menuData);

    return (
        <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-10 py-10 mt-10 bg-white gap-6">

            {/* Left Image */}
            <div className="flex justify-center w-full md:w-auto">
                <img
                    src="https://wordpress.themehour.net/barab/wp-content/uploads/2025/07/menu-1-1.jpg"
                    alt="left decoration"
                    className="h-60 sm:h-72 md:h-96 rounded-t-full rounded-bl-full object-cover"
                />
            </div>

            {/* Center Content */}
            <div className="w-full md:w-1/2 text-center">
                {/* Heading */}
                <h1 className="italic font-extrabold uppercase text-xs sm:text-sm">
                    menu card
                </h1>
                <p className="uppercase font-extrabold leading-tight text-2xl sm:text-3xl">
                    Our Fast Foods <span className="text-red-600">Menu Card</span>
                </p>
                <img
                    src="https://wordpress.themehour.net/barab/wp-content/uploads/2025/07/title-shape.png"
                    alt="arrow"
                    className="mx-auto mt-2 w-24 sm:w-32"
                />

                {/* Category Buttons */}
                <div className="flex flex-wrap justify-center gap-3 mt-8">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium uppercase border-2 transition ${activeCategory === cat
                                ? "bg-red-600 text-white border-red-600"
                                : "bg-white text-black border-gray-300 hover:bg-red-600 hover:text-white"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Menu Items */}
                <div className="mt-10 space-y-6 text-left cursor-pointer">
                    {menuData[activeCategory].map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col sm:flex-row items-center sm:items-start justify-between border-b pb-4"
                        >
                            <div className="flex items-center gap-4">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover"
                                />
                                <div className="text-center sm:text-left">
                                    <h2 className="font-bold text-lg">{item.title}</h2>
                                    <p className="text-gray-500 text-sm">{item.desc}</p>
                                </div>
                            </div>
                            <p className="font-extrabold text-lg mt-2 sm:mt-0">{item.price}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Image */}
            <div className="flex justify-center w-full md:w-auto">
                <img
                    src="https://wordpress.themehour.net/barab/wp-content/uploads/2025/07/menu-1-2.jpg"
                    alt="right decoration"
                    className="h-60 sm:h-72 md:h-96 rounded-b-full rounded-tr-full object-cover"
                />
            </div>
        </div>
    );
};

export default MenuCard;
