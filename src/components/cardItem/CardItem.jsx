import React, { useState } from "react";
import ModuleItem from "../ModuleItem/ModuleItem";
import './CardItem.css'
export default function CardItem({ item }) {
  console.log(item)
  const [count, setCount] = useState(1);
  const [showModel, setShowModel] = useState(false);
  
  
  return (
    <div className="bg-white ">
      <div className={item.discount ? 'rounded-circle bg-red text-white w-8 text-center relative discount': "invisible"}>{item.discount}%</div>
      <img src={item.img} className="h-44	w-40" />
      <div className="flex flex-col ">
        <h6 className="border-b-2 border-dotted border-b-lightgray mt-2">{item.title}</h6>
        <div className="flex justify-content-between">
          <div className="flex flex-row">
            <p className={item.discount ? "text-lightgray line-through	" : "text-gray"}>{item.price} $</p>
            <p className={item.discount ? 'text-gray ml-2' : 'hidden'}>{Math.floor(item.price - (item.price * item.discount / 100))} $</p>
            </div>
        <div className="star-rating">
            <span className="star text-softorange">&#9733; {item?.Rating ? item.Rating  : 0}</span>
        </div>
        </div>
      </div>
      <div>
        <button
          type="button"
          className="btn-secondary w-full mb-2 mt-0"
          onClick={() => setShowModel(!showModel)}
        >
          Add
        </button>
      </div>
      {showModel ? (
        <>
          <ModuleItem item={item}></ModuleItem>
        </>
      ) : null}
    </div>
  );
}
