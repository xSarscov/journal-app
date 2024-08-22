import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";
import { formatError } from "./helpers";

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
        const errorMessage = formatError(error.message);

        return {
            ok: false,
            errorMessage
        }
    }  

}

export const registerUserWithEmailPassword = async ({ email, password, displayName }) => {
    try {
        const response = await createUserWithEmailAndPassword(FirebaseAuth, email, password );
        const { uid, photoURL } = response.user;

        await updateProfile( FirebaseAuth.currentUser, { displayName })

        return {
            ok: true,
            uid, 
            photoURL,
            email,
            displayName,
        }

    } catch (error) {
        // Handle Errors here.
        const errorMessage = formatError(error.message);

        return {
            ok: false,
            errorMessage
        }
    }  
}

export const loginUserWithEmailPassword = async({ email, password }) => {
    try {
        
        const response = await signInWithEmailAndPassword(FirebaseAuth, email, password);
        const { uid, photoURL, displayName  } = response.user;

        return {
            ok: true,
            uid,
            photoURL,
            email, 
            displayName
        }

    } catch (error) {
        const errorMessage = formatError(error.message);

        return {
            ok: false,
            errorMessage
        }
    }
}

export const logoutFirebase = async () => {
    try {
        await FirebaseAuth.signOut();
        return {
            ok: true
        }    

    } catch (error) {
        const errorMessage = formatError(error.message);

        return {
            ok: false,
            errorMessage
        }
    }

}