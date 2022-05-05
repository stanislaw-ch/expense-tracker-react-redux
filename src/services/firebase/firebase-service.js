import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {setUserId} from "../../reducers/user/user-slice";

import {initializeApp} from "firebase/app";
import {
  getFirestore, setDoc, doc, addDoc,
  collection, deleteDoc
} from "firebase/firestore";
import {
  getAuth, createUserWithEmailAndPassword,
  onAuthStateChanged, signInWithEmailAndPassword,
  signOut, deleteUser
} from "firebase/auth";

import {categoriesForFirebase, accountsForFirebase, transactionsForFirebase} from "../mocks/mocks";
import {setIsDemoAccount} from "../../reducers/user/user-slice";

import {firebaseConfig, DEMO_ACCOUNT_LOGIN} from "./firebase-config";
import {createBalanceCategory, clearDB} from "./firebase-utils";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

const transactionsRef = collection(db, "transactions");
const categoriesRef = collection(db, "categories");
const accountsRef = collection(db, "accounts");

export const singUp = async (email, password) => {
  await createUserWithEmailAndPassword(auth, email, password)
  .then(async(userCredential) => {
    const userId = userCredential.user.uid;
    const usersRef = doc(db, "users", userId);

    await setDoc(usersRef, {userId});
    createBalanceCategory(categoriesRef, userId);
  });
};

export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function logout() {
  return signOut(auth);
}

export const deleteUserByID = async (userId) => {
  const user = auth.currentUser;

  clearDB(userId, db, transactionsRef, categoriesRef, accountsRef);

  await deleteDoc(doc(db, "users", userId));

  await deleteUser(user)
    .then(() => {
      alert("Successfully deleted user!");
    })
    .catch((error) => {
      alert("Error deleting user:", error);
    });
};

export const deleteDemoAccount = async(userId) => {
  await clearDB(userId, db, transactionsRef, categoriesRef, accountsRef);
};

export const fillDemoAccount = async(userId) => {
  createBalanceCategory(categoriesRef, userId);

  await accountsForFirebase.forEach(async (account) => {
    const {id, balance, startBalance, title, userId} = account;
    const payload = {balance, startBalance, title, userId};
    await setDoc(doc(accountsRef, id), payload);
  });

  await categoriesForFirebase.forEach(async (category) => {
    const {id, icon, incomes, title, userId, hidden} = category;
    const payload = {icon, incomes, title, userId, hidden};
    await setDoc(doc(categoriesRef, id), payload);
  });

  await transactionsForFirebase.forEach(async (category) => {
    const payload = {...category};
    await addDoc(transactionsRef, payload);
  });
};

export function useAuth() {
  const [currentUser, setCurrentUser] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const userId = user.uid;
        const userEmail = user.email;

        if (userEmail === DEMO_ACCOUNT_LOGIN) {
          dispatch(setIsDemoAccount(true));
        }

        dispatch(setUserId(userId));
      } else {
        dispatch(setUserId(null));
      }
      setCurrentUser(user);
    });
  }, []);

  return currentUser;
}

export default db;
