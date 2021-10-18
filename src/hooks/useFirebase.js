import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuth from "./../components/Firebase/Firebase.init";

const googleProvider = new GoogleAuthProvider();
initializeAuth();

const useFirebase = () => {
  const auth = getAuth();
  const [userData, setUserData] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  //   google sign in

  const googleSignIn = () => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {})
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  //   Email password signup

  const signup = (name, photoLink, email, password) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        userName(name, photoLink);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  //   Get useName
  const userName = (name, photoLink) => {
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoLink,
    })
      .then(() => {})
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  //   Eamil password sign in

  const signIn = (email, password) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {})
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // User logged in

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserData(user);
        console.log("logged in", user);
      } else {
        setUserData({});
      }
      setIsLoading(false);
    });

    return () => unsubscribe;
  }, []);

  //   logout

  const logout = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUserData({});
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return {
    userData,
    setUserData,
    error,
    isLoading,
    setError,
    googleSignIn,
    logout,
    signup,
    signIn,
  };
};
export default useFirebase;
