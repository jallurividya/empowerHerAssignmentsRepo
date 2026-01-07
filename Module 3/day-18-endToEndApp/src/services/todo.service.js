import { db } from "../utils/firebase";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  doc,
  deleteDoc,
  query,
  where,
} from "firebase/firestore";

/* ✅ ADD TODO */
export const addTodo = async (uid, data) => {
  return addDoc(collection(db, "todos"), {
    ...data,
    uid,
    createdAt: Date.now(),
  });
};

/* ✅ GET TODOS (USER SPECIFIC) */
export const getTodos = async (uid) => {
  const q = query(collection(db, "todos"), where("uid", "==", uid));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((d) => ({
    id: d.id,
    ...d.data(),
  }));
};

/* ✅ UPDATE TODO */
export const updateTodo = async (id, data) => {
  return updateDoc(doc(db, "todos", id), data);
};

/* ✅ DELETE TODO */
export const deleteTodo = async (id) => {
  return deleteDoc(doc(db, "todos", id));
};
