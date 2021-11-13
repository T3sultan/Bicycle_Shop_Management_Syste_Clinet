import initializeAuthenticationFirebase from "../components/Firebase/firebase.init";

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
    updateProfile,
   
} from "firebase/auth";

import { useEffect, useState } from "react";

initializeAuthenticationFirebase();


const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
   

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const registerUser = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result.user)
                handleUserInfoRegister(result.user.email);

                setAuthError('');
                const newUser = { email, displayName: name };

                setUser(newUser);
                //save user to the database
                // saveUser(email, name, 'POST')
                //send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
                history.replace('/')
            })
            .catch((error) => {
                setAuthError(error.message);
                console.log(error);
            })
            .finally(() => setIsLoading(false));
    }
    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    const signInWithGoogle = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                // const user = result.user;
                // saveUser(user.email, user.displayName, 'PUT')
                setAuthError('');
                const destination = location?.state?.from || '/';
                history.replace(destination);

            }).catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));

    }
    // observer user state
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
              
            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth])



    const logout = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
            setUser({});
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));
    }


    const handleUserInfoRegister = (email) => {
        fetch("http://localhost:5000/addUserInfo", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ email }),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
    };




    return {
        user,
        isLoading,
        authError,
        registerUser,
        loginUser,
        logout,
        signInWithGoogle
    }
}

export default useFirebase;