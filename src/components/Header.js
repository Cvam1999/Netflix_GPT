import React, { use } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux"; 
import { addUser, removeUser } from "../utils/userSlice";
import { Logo_Netfilx, Photo_avatar } from "../utils/constants";


const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    // Logic to sign out the user
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {});
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName , photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <div className="absolute w-screen z-10 bg-gradient-to-b from-black rounded-sm py-1 px-4 justify-between flex">
      <img
        className="w-44"
        src= {Logo_Netfilx}
        alt="Netflix Logo"
      />
      {user && (
        <div className="flex">
          <img
            className="w-11 h-11 p-1"
            src={Photo_avatar}
            alt="User Profile"
          />
          <button
            onClick={handleSignOut}
          className="text-white"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
    
  );
};

export default Header;
