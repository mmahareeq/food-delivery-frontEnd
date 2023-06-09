import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartAction";
import "./ModuleItem.css";
export default function ModuleItem(props) {
  const { item } = props;
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const [showModel, setShowModel] = useState(true);
  const [hoverRating, setHoverRating] = useState(0);
  const [rating, setRating] = useState(0);
  const increseCount = () => {
    setCount((count) => count + 1);
  };
  const decreseCount = () => {
    setCount((prevCount) => prevCount - 1);
  };
  const getColor = (index) => {
    if (hoverRating >= index) {
      return "#e9ed11";
    } else if (!hoverRating && rating >= index) {
      return "#e9ed11";
    }

    return "#edede8";
  };

  const addNewItem = async () => {
    const dataOfItem = {
      product: item._id,
      quantity: count,
    };
    const data = await dispatch(addToCart(dataOfItem));
    setShowModel(false);
    console.log(data);
  };
  return (
    <>
      {showModel ? (
        <>
          <div className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl ">
              {/*content*/}
              <div className="border-0  shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <button onClick={() => setShowModel(false)}>
                  {" "}
                  <i className="ri-close-circle-line close-icon"></i>
                </button>
                {/*body*/}
                <div className="relative p-6 flex-auto model">
                  <div className="flex flex-row gap-4">
                    <img src={item.img} className="img-model"></img>
                    <div className="w-100">
                      <h3>{item.title}</h3>
                      <div className="border-b-2 border-dotted border-lightgray flex justify-between star-rating">
                        <div className="flex flex-row">
                          <p
                            className={
                              item.discount
                                ? "text-lightgray line-through	"
                                : "text-gray"
                            }
                          >
                            {item.price} $
                          </p>
                          <p
                            className={
                              item.discount ? "text-gray ml-2" : "hidden"
                            }
                          >
                            {Math.floor(
                              item.price - (item.price * item.discount) / 100
                            )}{" "}
                            $
                          </p>
                        </div>
                        <div>
                          <span className="star text-softorange">
                            &#9733; {item?.Rating ? item.Rating : 0}
                          </span>
                        </div>
                      </div>

                      <p className="mt-1">
                        {item.desc} Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Culpa{" "}
                      </p>
                      <div className="border-b-2 border-dotted border-lightgray pb-2">
                        <div className="flex flex-row justify-between">
                          <div>
                            <button
                              type="button"
                              className="w-9 border rounded h-10	"
                              onClick={increseCount}
                            >
                              +
                            </button>
                            <span className="mx-2 align-self-center">
                              {count}
                            </span>
                            <button
                              type="button"
                              className="w-9 border   rounded h-10	"
                              onClick={decreseCount}
                              disabled={count <= 1}
                            >
                              -
                            </button>
                          </div>
                          <button
                            type="button"
                            className="btn-primary text-black ml-2"
                            onClick={addNewItem}
                          >
                            {" "}
                            Add to Cart
                          </button>
                        </div>
                      </div>

                      <p className="mt-2"> Category: {item.category[0].name}</p>
                    </div>
                  </div>
                </div>
                {/* Footer */}
                <div className="p-6">
                  <h5 className="border-b-2 border-dotted border-lightgray ">
                    Reviews
                  </h5>
                  <div>
                    <div className="flex justify-between">
                      <input
                        placeholder="add your review"
                        className="w-10/12"
                      ></input>
                      <div className="align-self-center">
                        {" "}
                        {[...Array(5)].map((star, index) => {
                          index += 1;
                          return (
                            <button
                              type="button"
                              key={index}
                              onClick={() => setRating(index)}
                              onMouseEnter={() => setHoverRating(index)}
                              onMouseLeave={() => setHoverRating(0)}
                              style={{ color: getColor(index) }}
                            >
                              <span className="star">&#9733;</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                    <button className="btn-secondary w-11 float-right">
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
