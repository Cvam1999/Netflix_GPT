import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [SignInForm, setSignInForm] = useState(true);
  const signUpForm = () => {
    setSignInForm(!SignInForm);
  };
  return (
    <div className="relative w-full h-screen">
      <Header />

      <div className="absolute">
        <img
          className="w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9390f6f6-cf80-4bc9-8981-8c2cc8adf98a/web/IN-en-20250421-TRIFECTA-perspective_dc5bcfdf-88a5-4972-8ffe-b28ff942f76e_large.jpg"
          alt="Background-image"
        />
        <div className="absolute top-0 left-0 right-5 h-2 bg-gradient-to-b from-black via-transparent to-transparent"></div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      </div>
      <form className="absolute p-12 bg-black w-3/12 my-40 mx-auto rounded-lg shadow-lg right-0 left-0 text-white bg-opacity-80">
        <h1 className="font-bold text-3xl my-3  ">
          {SignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!SignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 my-2 w-full bg-gray-600 rounded bg-opacity-40"
          />
        )}
        <input
          type="text"
          placeholder="Email or mobile number"
          className="p-2 my-2 w-full bg-gray-600 rounded bg-opacity-40"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 my-2 w-full bg-gray-600 rounded bg-opacity-40"
        />
        <button className="p-2 my-6 bg-red-700 w-full rounded">
          {SignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-6 cursor-pointer" onClick={signUpForm}>
          {SignInForm
            ? "New to Netflix?Sign up now."
            : "Already registered?Sign In now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
