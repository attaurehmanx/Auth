"use client";

import { signOut } from "next-auth/react";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";


export default function SignOutPage() {
  const [message, setMessage] = useState("");

  const handleSignOut = async () => {
    try {
      await signOut();
      setMessage("Successfully signed out!");
    } catch (err) {
      console.error("Sign out error:", err);
      setMessage("Error signing out. Please try again.");
    }
  };

  return (
    <div className="text-center p-4">
      <h1 className="text-2xl mb-4">Sign Out</h1>
      <button 
        onClick={handleSignOut}
        className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded flex items-center "
      >
        <FaGithub className="text-4xl mr-2"/>Sign Out
      </button>
      {message && (
        <div className="mt-4 text-green-600">{message}</div>
      )}
    </div>
  );
}