import { useState} from 'react';
import initializeAuthentication from './../components/Login/Firebase/firebase.init';
import { getAuth } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';
import { signInWithPopup } from 'firebase/auth';
import { signOut } from 'firebase/auth';



initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});

    const auth = getAuth();

    const signInUsingGoogle = () => {
        
        // console.log('towsif');
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
            })
            
    }

    const logOut = () => {
        
        // console.log('towsif')
        signOut(auth)
            .then(() => {
                setUser({})
            })
            
    }

    return {
        user,
        signInUsingGoogle,
        logOut
    }
}

export default useFirebase;