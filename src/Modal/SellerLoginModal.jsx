import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SellerLoginModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email || !password) {
            toast.error("Please fill in all fields");
            return;
        }

        console.log("Seller Login Data:", { email, password });

        toast.success("Login Successfully");

        setEmail("");
        setPassword("");

        setTimeout(() => {
            onClose();
            navigate("/adminportal")

        }, 1500);
    };

    return (
        <>
            {/* Overlay */}
            <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 h-screen p-4">
                <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 relative sm:p-8">
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-3 right-3 text-gray-600 hover:text-black text-2xl"
                    >
                        ✕
                    </button>

                    {/* Title */}
                    <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-red-600">
                        Seller Login
                    </h2>

                    {/* Form */}
                    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            className="border border-gray-300 p-2 sm:p-3 rounded focus:outline-none focus:border-red-500 text-sm sm:text-base"
                        />

                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            className="border border-gray-300 p-2 sm:p-3 rounded focus:outline-none focus:border-red-500 text-sm sm:text-base"
                        />

                        <button
                            type="submit"
                            className="bg-red-600 text-white py-2 sm:py-3 rounded font-semibold hover:bg-black transition text-sm sm:text-base"
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>

            {/* Toast Container */}
            <ToastContainer
                position="top-right"
                autoClose={2000}
            />
        </>
    );
};

export default SellerLoginModal;
