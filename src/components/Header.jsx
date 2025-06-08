import React, { useEffect } from 'react'
import {auth} from '../utils/firebase';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constatnts';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';
 
const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const {uid, email, displayName, photoURL} = user;
                dispatch(addUser({ uid : uid, email : email, displayName: displayName, photoUrl : photoURL }));
                navigate("/browse");
            } else {
                dispatch(removeUser());
                navigate("/");      
            }
        });


        //Unsbsribed when component unmounts
        return () => unsubscribe();
    }, []);


  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        
      })
      .catch((error) => {

        navigate("/error");
      });
  };

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());


  }

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
    
  }


  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className='w-44' src={LOGO} width="logo" />
    {user && <div className='flex p-2'>
      {showGptSearch && <select className='bg-gray-800 p-2 text-white m-2 'onChange={handleLanguageChange} >
        {SUPPORTED_LANGUAGES.map(lang => <option  key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
        
       
      </select>}
      <button className='py-2 px-4 mx-4 my-2 bg-gray-800 rounded-lg  text-white cursor-pointer' onClick={handleGptSearchClick}>{ showGptSearch? "Homepage" : "GPT Search"}</button>
      {user.photoUrl &&
        <img alt='usericon' src={user?.photoUrl} className='h-12 w-12'  />}
      <button onClick={handleSignOut} className='font-bold text-white cursor-pointer' >(Sign Out)</button>
    </div>}
    </div>
  )
}

export default Header