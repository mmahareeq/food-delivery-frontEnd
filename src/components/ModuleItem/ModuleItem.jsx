import React, { useState } from "react";
import "./ModuleItem.css";
export default function ModuleItem(props) {
  const { item } = props;
  console.log(item);
  const [count, setCount] = useState(1);
  const [showModel, setShowModel] = useState(true);
  const increseCount = () => {
    setCount((count) => count + 1);
  };
  const decreseCount = () => {
    setCount((prevCount) => prevCount - 1);
  };
  return (
    <>
      {" "}
      {showModel ? (
        <>
          <div className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl ">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}

                {/*body*/}
                <div className="relative p-6 flex-auto model">
                  <div className="flex flex-row">
                    <img src={item.img} className="img-model"></img>
                    <div className="w-100">
                      <h3>{item.title}</h3>
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
                      <p className="border-b-2 border-dotted border-gray">
                        {item.price} $
                      </p>
                      <p>{item.desc}</p>
                      <div className="border-b-2 border-dotted border-gray pb-2">
                        <div className="flex flex-row">
                          <button
                            type="button"
                            className="w-9 border rounded h-10	"
                            onClick={increseCount}
                          >
                            +
                          </button>
                          <span className="mx-2">{count}</span>
                          <button
                            type="button"
                            className="w-9 border   rounded h-10	"
                            onClick={decreseCount}
                            disabled={count <= 1}
                          >
                            -
                          </button>
                          <button type="button" className="btn-primary ml-2">
                            {" "}
                            Add to Cart
                          </button>
                        </div>
                      </div>

                      <p className="mt-2"> Category: {item.category}</p>
                    </div>
                  </div>
                </div>
                {/*footer*/}
                {/* <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() =>setShowModel(false)}
              >
                Close
              </button>
             
            </div> */}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
