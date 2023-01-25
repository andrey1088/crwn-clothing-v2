import { initializeApp } from 'firebase/app';
import {
  getAuth, // work with firebase auth
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import {
  getFirestore, // work with firestore database
  doc, // get document instance
  getDoc, // get document data
  setDoc // set document data
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBZLptu7hDwvK4IuR0JFq5-3I_ynEBPXnM",
  authDomain: "crwn-db-f9cc7.firebaseapp.com",
  projectId: "crwn-db-f9cc7",
  storageBucket: "crwn-db-f9cc7.appspot.com",
  messagingSenderId: "370018742347",
  appId: "1:370018742347:web:ee68eea4e87c8b5c689dce",
  measurementId: "G-CFHXRBGRT6"
};

initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const db = getFirestore()

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};
