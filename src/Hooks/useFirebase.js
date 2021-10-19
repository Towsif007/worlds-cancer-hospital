import { useState} from 'react';
import initializeAuthentication from './../components/Login/Firebase/firebase.init';
import { getAuth } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';
import { signInWithPopup } from 'firebase/auth';
import { signOut } from 'firebase/auth';



initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();

    const signInUsingGoogle = () => {
        setIsLoading(true);
        // console.log('towsif');
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
            })
            .finally(()=> setIsLoading(false));
    }

    const logOut = () => {
        setIsLoading(true);
        // console.log('towsif')
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .finally(()=> setIsLoading(false))
    }

    return {
        user,
        isLoading,
        signInUsingGoogle,
        logOut
    }
}

export default useFirebase;