"use client";

import { useState } from "react";
import Item from "./item";
import itemsData from "./items.json";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...itemsData].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <div>
      <div className="mb-4 flex justify-center gap-2 ">
        <button onClick={() => setSortBy("name")} className={`px-4 py-2 text-sm rounded ${ sortBy === "name" ? "bg-amber-400 text-white" : "bg-gray-300 text-black"}`}>
          Sort by Name
        </button>
        <button onClick={() => setSortBy("category")} className={`px-4 py-2 text-sm rounded ${ sortBy === "category" ? "bg-amber-400 text-white" : "bg-gray-300 text-black"}`} >
        Sort by Category
        </button>
      </div>


      {sortedItems.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
}
