import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

// Get all items for a specific user
export const getItems = async (userId) => {
  const itemsCol = collection(db, "users", userId, "items");
  const itemsSnapshot = await getDocs(query(itemsCol));
  const items = itemsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  return items;
}

// Add an item to a user's list
export const addItem = async (userId, item) => {
  const itemsCol = collection(db, "users", userId, "items");
  const docRef = await addDoc(itemsCol, item);
  return docRef.id;
}