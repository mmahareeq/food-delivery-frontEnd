import React, { useState } from "react";
import ModuleItem from "../ModuleItem/ModuleItem";
export default function CardItem({ item }) {
  const [count, setCount] = useState(1);
  const [showModel, setShowModel] = useState(false);
  const increseCount = () => {
    setCount((count) => count + 1);
  };
  const decreseCount = () => {
    setCount((prevCount) => prevCount - 1);
  };
  return (
    <div className="bg-white p-3">
      <img src={item.img} className="h-44	w-40" />
      <div className="flex flex-col ">
        <h6 className="border-b-2 border-dotted border-b-gray mt-2">{item.title}</h6>
        <div className="flex justify-content-between">
        <p className="text-gray">{item.price} $</p>
        <div className="star-rating">
          {[...Array(5)].map((star, index) => {
            index += 1;
            return (
              <button
                type="button"
                key={index}
                // className={index <= (hover || rating) ? "on" : "off"}
                // onClick={() => setRating(index)}
                // onMouseEnter={() => setHover(index)}
                // onMouseLeave={() => setHover(rating)}
              >
                <span className="star">&#9733;</span>
              </button>
            );
          })}
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
