import { ShoppingCart } from "lucide-react";
import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Banner from "./Banner";

const allFoods = [
    { id: 1, category: "burger", name: "Classic Burger", price: "$8.99", img: "https://angular.pixelstrap.net/zomo/assets/images/product/p-3.png" },
    { id: 2, category: "burger", name: "Cheese Burger", price: "$9.99", img: "https://angular.pixelstrap.net/zomo/assets/images/product/p-3.png" },
    { id: 3, category: "fries", name: "French Fries", price: "$5.99", img: "https://angular.pixelstrap.net/zomo/assets/images/product/p-5.png" },
    { id: 4, category: "fries", name: "Masala Fries", price: "$6.49", img: "https://angular.pixelstrap.net/zomo/assets/images/product/p-5.png" },
    { id: 5, category: "boritto", name: "Chicken Boritto", price: "$10.99", img: "https://angular.pixelstrap.net/zomo/assets/images/product/p-6.png" },
    { id: 6, category: "boritto", name: "Veg Boritto", price: "$9.49", img: "https://angular.pixelstrap.net/zomo/assets/images/product/p-6.png" },
    { id: 7, category: "taco", name: "Beef Taco", price: "$8.49", img: "https://angular.pixelstrap.net/zomo/assets/images/product/p-7.png" },
    { id: 8, category: "taco", name: "Fish Taco", price: "$9.99", img: "https://angular.pixelstrap.net/zomo/assets/images/product/p-7.png" },
    { id: 9, category: "pizza", name: "Pepperoni Pizza", price: "$12.99", img: "https://angular.pixelstrap.net/zomo/assets/images/product/p-8.png" },
    { id: 10, category: "pizza", name: "Veggie Pizza", price: "$11.49", img: "https://angular.pixelstrap.net/zomo/assets/images/product/p-8.png" },
    { id: 11, category: "noodles", name: "Hakka Noodles", price: "$7.99", img: "https://angular.pixelstrap.net/zomo/assets/images/product/p-9.png" },
    { id: 12, category: "noodles", name: "Schezwan Noodles", price: "$8.49", img: "https://angular.pixelstrap.net/zomo/assets/images/product/p-9.png" },
];

const CategoryPage = () => {
    const { name } = useParams();
    const navigate = useNavigate();

    const filteredItems = allFoods.filter(
        (item) => item.category.toLowerCase() === name.toLowerCase()
    );

    return (
        <>
            <Banner />
            <section className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
                {/* Header section */}
                <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4 sm:gap-0 text-center sm:text-left">
                    <h1 className="text-2xl sm:text-3xl font-bold capitalize">{name} Items</h1>
                    <button
                        onClick={() => navigate("/")}
                        className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition text-sm sm:text-base"
                    >
                        ← Back to Categories
                    </button>
                </div>
                {/* food grid */}
                {filteredItems.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
                        {filteredItems.map((item) => (

                            <div key={item.id} className="bg-white p-3 sm:p-4 rounded-xl shadow hover:shadow-lg transition cursor-pointer">
                                <img
                                    src={item.img}
                                    alt={item.name}
                                    className="h-40 sm:h-48 w-full object-contain mb-4 transition-all duration-500 hover:scale-105"
                                />
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h2 className="text-lg sm:text-xl font-semibold">{item.name}</h2>
                                        <p className="text-red-600 mt-1 sm:mt-2 font-bold">{item.price}</p>
                                    </div>
                                    <button className="bg-orange-100 hover:bg-orange-200 p-2 rounded-full transition">
                                        <ShoppingCart className="text-orange-600" size={20} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-600 text-center mt-8 text-sm sm:text-base">
                        No items found for <span className="font-semibold">{name}</span>
                    </p>
                )}


            </section >
        </>
    );
};

export default CategoryPage;
