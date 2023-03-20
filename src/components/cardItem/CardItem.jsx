import React, { useState } from "react";

export default function CardItem({ item }) {
  const [count, setCount] = useState(1);
  const increseCount = ()=>{
    setCount((count)=>count+1);
  }
  const decreseCount = ()=>{
    setCount((prevCount)=> prevCount-1);
  }
  return (
    <div className="bg-white p-3">
      <img src={item.img} className="h-44	w-40" />
      <div className="flex justify-between">
        <h6>{item.title}</h6>
        <p>{item.price} $</p>
      </div>
      <div className="flex justify-between">
        <button type="button" className="custome-btn w-25 mb-2 mt-0">
          Add
        </button>
        <div>
          <button type="button" className="w-9 border rounded h-10	" onClick={increseCount}>+</button>
          <span className="mx-2">{count}</span>
          <button type="button" className="w-9 border   rounded h-10	" onClick={decreseCount} disabled={count <=1}>-</button>
        </div>
      </div>
    </div>
  );
}
