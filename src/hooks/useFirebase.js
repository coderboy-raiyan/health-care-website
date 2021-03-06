import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import initializeAuth from "./../components/Firebase/Firebase.init";

const googleProvider = new GoogleAuthProvider();
initializeAuth();

const useFirebase = () => {
  const auth = getAuth();
  const [userData, setUserData] = useState({});
  const [signUperror, setsignUpError] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  //   google sign in

  const googleSignIn = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider)
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
        setsignUpError("");
        Swal.fire("Good job!", "Welcome to our family!", "success");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setsignUpError(errorMessage);
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

  // update password
  const updatePassword = (email) => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setError("");
        Swal.fire("Good job!", "Please check your email", "success");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        // ..
      });
  };

  //   Eamil password sign in

  const signIn = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password).finally(() => {
      setIsLoading(false);
    });
  };

  // User logged in

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserData(user);
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
    signUperror,
    isLoading,
    setError,
    setsignUpError,
    googleSignIn,
    logout,
    signup,
    signIn,
    updatePassword,
  };
};
export default useFirebase;
