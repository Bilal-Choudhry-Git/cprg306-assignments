"use client";

import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";

export default function Page() {
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleItemSelect = (item) => {
    let cleaned = item.name
      .split(",")[0]      // remove size portion
      .trim()            // trim spaces
      .replace(/[^\p{L}\p{N}\s]/gu, ""); // remove emojis & symbols

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
