import React from "react";
import { X } from "lucide-react";

const UserSignUpModal = ({ isOpen, onClose, onSwitchToSignIn }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 h-screen p-4">
            <div className="bg-white w-[90%] max-w-md rounded-2xl shadow-lg relative p-6">
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
                >
                    <X size={22} />
                </button>

                <h2 className="text-2xl font-bold text-center text-orange-500 mb-6">
                    Create Account
                </h2>

                <form className="flex flex-col gap-4">
                    <div>
                        <label className="block text-gray-700 mb-1 text-sm font-medium">
                            Full Name
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-1 text-sm font-medium">
                            Email Address
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-1 text-sm font-medium">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="Enter password"
                            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-1 text-sm font-medium">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            placeholder="Re-enter password"
                            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />
                    </div>

                    <button
                        type="submit"
                        className="mt-3 bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition"
                    >
                        Sign Up
                    </button>
                </form>

                <p className="text-center text-sm text-gray-600 mt-4">
                    Already have an account?{" "}
                    <span
                        className="text-orange-500 font-semibold cursor-pointer hover:underline"
                        onClick={() => {
                            onClose();
                            onSwitchToSignIn(); // 👈 switch to SignIn
                        }}
                    >
                        Sign In
                    </span>
                </p>
            </div>
        </div>
    );
};

export default UserSignUpModal;
