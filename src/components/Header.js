import React, { use } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    // Logic to sign out the user
    signOut(auth)
      .then(() => {
        navigate("/");
        // Sign-out successful.
      })
      .catch((error) => {});
  };
  return (
    <div className="absolute w-screen z-10 bg-gradient-to-b from-black rounded-sm py-1 px-4 justify-between flex">
      <img
        className="w-44"
        src="https://images.ctfassets.net/y2ske730sjqp/821Wg4N9hJD8vs5FBcCGg/9eaf66123397cc61be14e40174123c40/Vector__3_.svg?w=460"
        alt="Netflix Logo"
      />
      {user && (
        <div className="flex">
          <image
            className="w-12 h-12 p-4"
            src={user?.photoURL}
            alt="User Profile"
          />
          <button
            onClick={handleSignOut}
            className="bg-red-700 text-white rounded-sm px-4 py-1"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
