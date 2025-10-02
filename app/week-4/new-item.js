"use client";

import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

 const increment = () => {
      if (quantity < 20) {
        setQuantity(quantity + 1);
      }
    };



 const decrement = () => {
      if (quantity > 1) {
        setQuantity(quantity - 1 );
      }
      
    };

  return (
    <div className="flex items-center justify-center gap-2">
        <div className= "mt-4 bg-white border rounded-md  py-2 shadow font-bold flex items-center justify-center w-50"> 
        <div className = 'flex justify-center' >
            <div className="max-w-min  bg-amber-50 text-black border-2 border-black p-4 pt-2 pb-3 m-2 h-11 rounded-md font-bold">{quantity}</div>
            <button  onClick={decrement} disabled={quantity === 1} className={`max-w-min p-4 pt-3 pb-3 bg-blue-500  m-2 h-11 rounded-md ${quantity === 1 ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500" }` }>
                -
            </button>

            <button  onClick={increment} disabled={quantity === 20}  className={`max-w-min p-4 pt-3 pb-3 bg-blue-500  m-2 h-11 rounded-md ${quantity === 20 ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500" }`}>
            +
            </button>
        </div>
        </div>
    </div>
  );

};