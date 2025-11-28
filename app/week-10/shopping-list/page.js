"use client";

import { useEffect, useState } from "react";
import { useUserAuth } from "../_utils/auth-context"; 
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import { getItems, addItem } from "../_services/shopping-list-service";

export default function Page() {
  const { user } = useUserAuth();
  const [selectedItemName, setSelectedItemName] = useState("");
  const [items, setItems] = useState([]);

  // Load items from Firestore
  const loadItems = async () => {
    if (!user) return;
    try {
      const fetchedItems = await getItems(user.uid);
      setItems(fetchedItems);
    } catch (err) {
      console.error("Failed to load items:", err);
    }
  };

  // Add item to Firestore
  const handleAddItem = async (item) => {
    if (!user) return;
    console.log("Adding item for user:", user.uid, item);
    try {
      const id = await addItem(user.uid, item);
      console.log("Added item with id:", id);
      setItems([...items, { id, ...item }]);
    } catch (err) {
      console.error("Failed to add item:", err);
    }
  };

  // Handle selecting item for meal ideas
  const handleItemSelect = (item) => {
    let cleaned = item.name
      .split(",")[0]      
      .trim()           
      .replace(/[^\p{L}\p{N}\s]/gu, ""); 
    setSelectedItemName(cleaned);
  };

  // Load items when user logs in
  useEffect(() => {
    if (user) loadItems();
  }, [user]);

  if (!user) {
    return (
      <main>
        <p>Log in to view the shopping list.</p>
      </main>
    );
  }

  return (
    <main className="bg-black min-h-screen p-6 text-white">
      <h1 className="text-2xl font-bold text-center mb-4">Shopping List</h1>

      <div className="flex gap-6 justify-center">
        <div>
          <NewItem onAdd={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>

        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
}
