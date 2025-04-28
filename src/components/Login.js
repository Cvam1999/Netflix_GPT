import React from "react";
import Header from "./Header";

const Login = () => {
  return (
    <div className="relative w-full h-screen">
      <Header />

      <div>
        <img
          className="w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9390f6f6-cf80-4bc9-8981-8c2cc8adf98a/web/IN-en-20250421-TRIFECTA-perspective_dc5bcfdf-88a5-4972-8ffe-b28ff942f76e_large.jpg"
          alt="Background-image"
        />
        <div className="absolute top-0 left-0 right-5 h-2 bg-gradient-to-b from-black via-transparent to-transparent"></div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      </div>
    </div>
  );
};

export default Login;
