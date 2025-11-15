"use client";

import { useState } from "react";
import { useUserAuth } from "../_utils/auth-context"; 
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";

export default function Page() {
  const { user } = useUserAuth();
  const [selectedItemName, setSelectedItemName] = useState("");

  // displaying the page only if the user is logged in
  if (!user) {
    return (
      <main>
        <p>
          Log in to view the shopping list.
        </p>
      </main>
    );
  }

  const handleItemSelect = (item) => {
    let cleaned = item.name
      .split(",")[0]      
      .trim()           
      .replace(/[^\p{L}\p{N}\s]/gu, ""); 

    setSelectedItemName(cleaned);
  };

  return (
    <main className="bg-black min-h-screen p-6 text-white">
      <h1 className="text-2xl font-bold text-center mb-4">Shopping List</h1>

      <div className="flex gap-6 justify-center">
        <div>
          <NewItem />
          <ItemList onItemSelect={handleItemSelect} />
        </div>

        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
}
