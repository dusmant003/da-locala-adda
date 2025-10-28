import React, { useState } from "react";
import { X } from "lucide-react";

const UserSignInModal = ({ isOpen, onClose, onSwitchToSignUp }) => {
    const [showOtp, setShowOtp] = useState(false);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 h-screen p-4">
            <div className="bg-white w-[90%] max-w-md rounded-2xl shadow-lg relative p-6 animate__animated animate__fadeInUp">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
                >
                    <X size={22} />
                </button>

                {/* Title */}
                <h2 className="text-2xl font-bold text-center text-orange-500 mb-6">
                    User Sign In
                </h2>

                {/* Form */}
                <form className="flex flex-col gap-4">
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

                    {!showOtp && (
                        <button
                            type="button"
                            onClick={() => setShowOtp(true)}
                            className="bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition"
                        >
                            Send OTP
                        </button>
                    )}

                    {showOtp && (
                        <>
                            <div>
                                <label className="block text-gray-700 mb-1 text-sm font-medium">
                                    Enter OTP
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter 6-digit OTP"
                                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                                />
                            </div>

                            <button
                                type="submit"
                                className="bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition"
                            >
                                Verify OTP & Sign In
                            </button>
                        </>
                    )}
                </form>

                <p className="text-center text-sm text-gray-600 mt-4">
                    Don’t have an account?{" "}
                    <span
                        className="text-orange-500 font-semibold cursor-pointer hover:underline"
                        onClick={() => {
                            onClose();
                            onSwitchToSignUp();
                        }}
                    >
                        Sign Up
                    </span>
                </p>
            </div>
        </div>
    );
};

export default UserSignInModal;
