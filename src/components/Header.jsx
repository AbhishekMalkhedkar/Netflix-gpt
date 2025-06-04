import React, { useEffect } from 'react'
import {auth} from '../utils/firebase';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constatnts';
 
const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);

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





  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className='w-44' src={LOGO} width="logo" />
    {user && <div className='flex p-2'>
      <img alt='usericon' src={user?.photoURL} className='h-12 w-12'  />
      <button onClick={handleSignOut} className='font-bold text-white' >(Sign Out)</button>
    </div>}
    </div>
  )
}

export default Header