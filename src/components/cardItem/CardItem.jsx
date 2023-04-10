import React, { useState } from "react";
import ModuleItem from "../ModuleItem/ModuleItem";

export default function CardItem({ item }) {
  console.log(item)
  const [count, setCount] = useState(1);
  const [showModel, setShowModel] = useState(false);
  
  
  return (
    <div className="bg-white p-3">
      <img src={item.img} className="h-44	w-40" />
      <div className="flex flex-col ">
        <h6 className="border-b-2 border-dotted border-b-lightgray mt-2">{item.title}</h6>
        <div className="flex justify-content-between">
        <p className="text-gray">{item.price} $</p>
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
