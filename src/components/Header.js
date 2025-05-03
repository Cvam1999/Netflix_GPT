import React, { use } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import {
  Logo_Netfilx,
  Photo_avatar,
  SUPPORTED_LANGUAGES,
} from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
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
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
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
  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className="absolute w-screen z-10 bg-gradient-to-b from-black rounded-sm py-1 px-4 justify-between flex flex-col md:flex-row ">
      <img
        className="w-44 mx-auto md:mx-0"
        src={Logo_Netfilx}
        alt="Netflix Logo"
      />
      <p className="text-white">{user?.displayName}</p>
      {user && (
        <div className="flex justify-between">
          {showGptSearch && (
            <select
              className="p-2 m-2 bg-gray-900 text-white"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            onClick={handleGptSearchClick}
            className="py-2 px-4 m-2 bg-red-700 text-white hover:opacity-70"
          >
            {showGptSearch ? "Home Page" : "GPT Serach"}
          </button>
          <img
            className=" hidden md:block w-11 h-11 p-1 my-3"
            src={Photo_avatar}
            alt="User Profile"
          />
          <button onClick={handleSignOut} className="text-white">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
