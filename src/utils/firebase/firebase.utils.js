import { initializeApp } from 'firebase/app';
// Your web app's Firebase configuration
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
} from 'firebase/auth';

import { doc, getDoc, getFirestore, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyA0bT-5i2q8b2YVChImBcmaj9Q-8mkQ3PA',
  authDomain: 'cy-clothing-db.firebaseapp.com',
  projectId: 'cy-clothing-db',
  storageBucket: 'cy-clothing-db.appspot.com',
  messagingSenderId: '121739669508',
  appId: '1:121739669508:web:73343735a3b4e350644551',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFormAuth = async (userAuth) => {
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
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
};
