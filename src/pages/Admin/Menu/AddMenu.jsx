import React, { useState } from "react";
import { Upload, PlusCircle } from "lucide-react";

const AddMenu = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    image: "",
    available: true,
  });


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Menu item added successfully!");
    setFormData({
      name: "",
      description: "",
      price: "",
      category: "",
      image: "",
      available: true,
    });
  };

  return (
    <div className="p-6 sm:p-10 bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md p-6 sm:p-8">
        {/* 🔹 Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
            <PlusCircle className="text-red-500" /> Add New Menu
          </h2>
        </div>

        {/* 🔹 Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Menu Name */}
          <div>
            <label className="block text-gray-700 mb-1 font-medium">
              Menu Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g., Grilled Chicken Pizza"
              className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-red-400 focus:outline-none"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-gray-700 mb-1 font-medium">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Enter short description..."
              rows="3"
              className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-red-400 focus:outline-none"
            />
          </div>

          {/* Price and Category */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-1 font-medium">
                Price ($)
              </label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                placeholder="e.g., 12.99"
                step="0.01"
                className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-red-400 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1 font-medium">
                Category
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-red-400 focus:outline-none"
                required
              >
                <option value="">Select Category</option>
                <option value="Pizza">Pizza</option>
                <option value="Burger">Burger</option>
                <option value="Bagel">Bagel</option>
                <option value="Drinks">Drinks</option>
              </select>
            </div>
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-gray-700 mb-1 font-medium">
              Image URL
            </label>
            <div className="flex items-center gap-2">
              <Upload className="text-gray-500" size={18} />
              <input
                type="url"
                name="image"
                value={formData.image}
                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                placeholder="https://example.com/image.jpg"
                className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-red-400 focus:outline-none"
              />
            </div>
          </div>

          {/* Availability Toggle */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="available"
              checked={formData.available}
              onChange={(e) => setFormData({ ...formData, available: e.target.value })}
              className="w-5 h-5 text-red-500 border-gray-300 focus:ring-red-400"
            />
            <label className="text-gray-700 font-medium">Available</label>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="bg-red-500 text-white px-6 py-2.5 rounded-lg hover:bg-red-600 transition-all duration-200"
            >
              Add Menu
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMenu;
