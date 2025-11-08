import React, { useState } from "react";
import { PlusCircle, Edit, Trash } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Categories = () => {
  const [categories, setCategories] = useState([
    { id: 1, name: "Burger", image: "https://example.com/burger.png" },
    { id: 2, name: "Fries", image: "https://example.com/fries.png" },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, files, value } = e.target;

    if (name === "image" && files && files[0]) {
      const fileURL = URL.createObjectURL(files[0]);
      setFormData({ ...formData, image: fileURL });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.image) {
      toast.error("Please fill name and image fields!")
      return;
    }

    const newCategory = {
      id: Date.now(),
      ...formData,
    };

    setCategories([...categories, newCategory]);
    setFormData({ name: "", image: "" });

    toast.success("✅ Category added successfully!");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">🍔 Manage Food Categories</h1>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-5 rounded-2xl shadow-md mb-8"
      >
        <div className="grid md:grid-cols-3 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Category Name"
            value={formData.name}
            onChange={handleChange}
            className="border rounded-lg p-2"
          />

          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className="border rounded-lg p-2"
          />
        </div>

        <button
          type="submit"
          className="mt-4 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
        >
          <PlusCircle size={18} /> Add Category
        </button>
      </form>

      {/* Category List */}
      <div className="grid md:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="bg-white rounded-2xl shadow-md p-4 flex flex-col items-center text-center"
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="w-24 h-20 mb-3 rounded-full object-cover"
            />
            <h3 className="font-bold text-lg">{cat.name}</h3>

            <div className="flex gap-3 mt-3">
              <button className="text-blue-600 hover:text-blue-800">
                <Edit size={18} />
              </button>
              <button className="text-red-600 hover:text-red-800">
                <Trash size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Toast Container */}
      <ToastContainer
        position="top-right"
        autoClose={2500}
      />
    </div>
  );
};

export default Categories;
