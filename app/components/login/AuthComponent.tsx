"use client"; 

import { signIn } from "next-auth/react";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";

export default function SignInPage() {
  const [message, setMessage] = useState("");

  const handleSignIn = async () => {
    try {
      await signIn("github");
      setMessage("Signing in with GitHub...");
    } catch (err) {
      console.error("Sign in error:", err);
      setMessage("Error signing in. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center mt-56">
      <div className="border hover:border-gray-700 rounded-md h-72 w-72 flex items-center justify-center">
        <div>
      <h1 className="text-2xl mb-4 font-bold text-center ">Sign In</h1>
      
      <button
        onClick={handleSignIn}
        className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded flex items-center "
      >
        <FaGithub className="text-4xl mr-2"/>Sign in with GitHub
      </button>
      {message && <div className="mt-4 text-blue-600">{message}</div>}
        </div>
      </div>
    </div>
  );
}