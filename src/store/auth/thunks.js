import { loginUserWithEmailPassword, logoutFirebase, registerUserWithEmailPassword, signInWithGoogle } from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./authSlice"

export const checkingAuthentication = ( email, password ) => {
    return async( dispatch ) => {
        dispatch( checkingCredentials() );
    }
}

export const startGoogleSignIn = () => {
    return async( dispatch ) => {
        dispatch( checkingCredentials() );

        const result = await signInWithGoogle();
        
        if (!result.ok) return dispatch( logout( { errorMessage: result.errorMessage } ) );

        dispatch( login( result ) )
    }
}

export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {
    return async( dispatch ) => {
        dispatch( checkingCredentials() );

        const result = await registerUserWithEmailPassword({ email, password, displayName });
            
        if ( !result.ok ) return dispatch( logout({ errorMessage: result.errorMessage }) )

        dispatch( login( result ) );

    }
}

export const startLoginWithEmailPassword = ({ email, password }) => {

    return async( dispatch ) => {
        dispatch( checkingCredentials() );
        const result = await loginUserWithEmailPassword({ email, password })

        if (!result.ok ) return dispatch( logout({ errorMessage: result.errorMessage }) )

        dispatch( login( result ) );
    }

}

export const startLogout = () => {
    return async ( dispatch ) => {

       const result = await logoutFirebase();

        if ( !result.ok ) return dispatch( logout({ errorMessage: result.errorMessage }) );

        dispatch( logout() );
    }
}