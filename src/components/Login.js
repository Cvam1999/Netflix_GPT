import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/validate";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { Background_img_URL, Photo_avatar } from "../utils/constants";

const Login = () => {
  const [SignInForm, setSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const signUpForm = () => {
    setSignInForm(!SignInForm);
  };
  const handleButtonClick = () => {
    const message = checkValidateData(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
    if (message) {
      return;
    }
    // Perform sign-in or sign-up logic here
    if (!SignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: Photo_avatar,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage + "-" + errorCode);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage + "-" + errorCode);
        });
    }
  };
  return (
    <div className="relative w-full h-screen">
      <Header />

      <div className="absolute">
        <img
          className="h-screen w-screen object-cover"
          src= {Background_img_URL}
          alt="Background-image"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute p-12 bg-black w-9/12 md:w-3/12 my-40 mx-auto rounded-lg shadow-lg right-0 left-0 text-white bg-opacity-80"
      >
        <h1 className="font-bold text-3xl my-3  ">
          {SignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!SignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-2 my-2 w-full bg-gray-600 rounded bg-opacity-40"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email or mobile number"
          className="p-2 my-2 w-full bg-gray-600 rounded bg-opacity-40"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 my-2 w-full bg-gray-600 rounded bg-opacity-40"
        />
        <p className="text-red-700 font-bold p-2">{errorMessage}</p>
        <button
          className="p-2 my-6 bg-red-700 w-full rounded"
          onClick={handleButtonClick}
        >
          {SignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-6 cursor-pointer" onClick={signUpForm}>
          {SignInForm
            ? "New to Netflix?Sign Up now."
            : "Already registered?Sign In now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
