import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async() => {

    try {
        const result = await signInWithPopup( FirebaseAuth, googleProvider );
        
        // In order to obtain access token   
        // const credentials = GoogleAuthProvider.credentialFromResult( result );
        const { uid, displayName, email, photoURL } = result.user;

        return {
            ok: true,
            uid,
            displayName,
            email,
            photoURL
        }

    } catch (error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;

        return {
            ok: false,
            errorMessage
        }
    }  

}