"use client";

import { useState } from "react";
import Item from "./item";
import itemsData from "./items.json";

export default function ItemList({ onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...itemsData].sort((a, b) => {
    if (sortBy === "name") return a.name.localeCompare(b.name);
    if (sortBy === "category") return a.category.localeCompare(b.category);
    return 0;
  });

  return (
    <div className="flex flex-col items-center">
      <div>
        {sortedItems.map((item) => (
          <Item key={item.id} item={item} onSelect={() => onItemSelect(item)} />
        ))}
      </div>

      <div className="flex gap-2 mt-4">
        <button
          onClick={() => setSortBy("name")}
          className={`px-4 py-2 text-sm font-semibold rounded ${
            sortBy === "name"
              ? "bg-yellow-400 text-black"
              : "bg-gray-700 text-white"
          }`}
        >
          Sort by Name
        </button>

        <button
          onClick={() => setSortBy("category")}
          className={`px-4 py-2 text-sm font-semibold rounded ${
            sortBy === "category"
              ? "bg-yellow-400 text-black"
              : "bg-gray-700 text-white"
          }`}
        >
          Sort by Category
        </button>
      </div>
    </div>
  );
}
