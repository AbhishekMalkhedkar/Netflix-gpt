import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from "../utils/firebase";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {addUser} from '../utils/userSlice.js';
import { BG_URL, USER_AVATAR } from '../utils/constatnts.js'

const Login = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);


  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
 
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }

  const handleButtonClick = () => {
    // Validate the form data
    const message = checkValidData(email.current.value,password.current.value);
    setErrorMessage(message);

    if(message) return;

    if(!isSignInForm){
      //Sign up Logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
    // Signed up 
        const user = userCredential.user;
        updateProfile(user, {
          displayName: name.current.value, photoURL: "https://i.pinimg.com/736x/92/b4/e7/92b4e7c57de1b5e1e8c5e883fd915450.jpg"
          }).then(() => {
             const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
             navigate("/browse");
          }).catch((error) => {
            setErrorMessage(error.message);
          });
        console.log(user);
    // ...
      })
        .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode +" - " + errorMessage);
    // ..
      });

    }else{
      //sign in
      signInWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    navigate("/browse");
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode +" - " + errorMessage);
  });
    }


  }

  return (
    <div>
       <Header />
       <div className='absolute'>
          <img  src="https://assets.nflxext.com/ffe/siteui/vlv3/914ad279-199e-4095-9c10-2409dc9e5e1b/web/IN-en-20250519-TRIFECTA-perspective_8f1ca896-9e49-4a4e-90f0-22fc49650bd9_large.jpg" width="auto" />
       </div>
       <form onSubmit={(e) => e.preventDefault()}  className='w-3/12 absolute p-12 bg-black/80 my-36 mx-auto right-0 left-0 text-white rounded-lg'>
        <h1 className='font-bold  text-3xl py-4' >{isSignInForm ?  "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && <input ref={name} type="text" placeholder='Full Name' className='p-4 my-4 w-full bg-gray-900' />}
        <input ref={email} type="text" placeholder='Email Address' className='p-4 my-4 w-full bg-gray-900' />
        <input ref={password} type="password" placeholder='Password' className='p-4 my-4 w-full bg-gray-900' />
        <p className='text-red-500 font-bold text-lg'>{errorMessage}</p>
        <button className='p-4 my-6 bg-red-700 w-full rounded-lg cursor-pointer' onClick={handleButtonClick} >{isSignInForm ?  "Sign In" : "Sign Up"} </button>
        <p className='p-4 cursor-pointer' onClick={toggleSignInForm} >{isSignInForm ?  "New to Netflix? Sign Up Now" : "Already registered? Sign In Now."}</p>
       </form> 
    </div>
  )
}

export default Login