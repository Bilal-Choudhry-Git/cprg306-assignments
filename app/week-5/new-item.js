"use client";

import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState(""); 
  const [category, setCategory] = useState("produce"); 

  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleSubmit = (e) => { 
    e.preventDefault();

    const item = { name, quantity, category };
    console.log(item);

    alert(`Item Added:\nName: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);

    setName("");
    setQuantity(1); 
    setCategory("produce");
  };

  return (
    <div className="flex items-center justify-center mt-4 text-black "> 
      <form
        onSubmit={handleSubmit} 
        className="bg-white p-6 rounded-lg shadow-md w-150"
      >
        <div className="flex flex-col space-y-4">

         
          <div className="flex items-center space-x-2 text-black">
           
            <input
              type="text"
              placeholder="Item Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none  focus:ring-blue-500 text-black"
            />

            
            <div className="flex items-center border rounded-md text-black">
              <div className="px-3 py-2 font-bold">{quantity}</div>
              <button
                type="button"
                onClick={decrement}
                disabled={quantity === 1}
                className={`px-2 py-2 font-bold ${
                  quantity === 1
                    ? "text-gray-400 cursor-not-allowed"
                    : "text-black hover:text-blue-500"
                }`}
              >
                -
              </button>

              <button
                type="button"
                onClick={increment}
                disabled={quantity === 20}
                className={`px-2 py-2 font-bold ${
                  quantity === 20
                    ? "text-gray-400 cursor-not-allowed"
                    : "text-black hover:text-blue-500"
                }`}
              >
                +
              </button>
            </div>

          
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black w-27"
            >
              <option value="produce">Produce</option>
              <option value="dairy">Dairy</option>
              <option value="bakery">Bakery</option>
              <option value="meat">Meat</option>
              <option value="frozen foods">Frozen Foods</option>
              <option value="canned goods">Canned Goods</option>
              <option value="dry goods">Dry Goods</option>
              <option value="beverages">Beverages</option>
              <option value="snacks">Snacks</option>
              <option value="household">Household</option>
              <option value="other">Other</option>
            </select>
          </div>

          
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 rounded-md font-semibold hover:bg-blue-600 transition"
          >
            Add Item
          </button>
        </div>
      </form>
    </div>
  );
}

