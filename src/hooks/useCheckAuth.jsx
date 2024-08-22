import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { authStatus, login, logout } from "../store/auth";
import { CheckingAuth } from "../ui";
import { FirebaseAuth } from "../firebase/config";

export const useCheckAuth = () => {

  const { status } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {

    onAuthStateChanged( FirebaseAuth, async( user ) => {
      
      if ( !user ) return dispatch( logout() )

      const { uid, email, displayName, photoURL } = user;

      dispatch( login({ uid, email, displayName, photoURL }) );


    });

    
  }, [])
  
  return {
    status
  }
}
