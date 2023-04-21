import React from "react";
import Hero from "../../shared/Hero/Hero";
import { getCart } from "../../features/cart/cartAction";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export default function Cart() {
    const navigate = useNavigate();
  const { cart, loading, error } = useSelector((state) => state.cart);
  console.log(cart)
  const { userinfo } = useSelector((state) => state.users);
  return (
    <>
      <Hero hero='Cart'></Hero>
      {cart?.products?.length ? (
        <div className="h-screen container">
          {cart?.products.length? (
            <div className="flex flex-col">
              {cart.products.map((item) => {
                return (
                  <div className="flex flex-row border border-lightgray shadow mt-2">
                    <img src={item.product.img} className="w-24 h-24 p-2"></img>
                    <div className="flex justify-around align-items-center w-full">
                      <h5>{item.product.title}</h5>
                      <p>{item.product.price} $</p>
                      <div> </div>
                      <div><i class="ri-delete-bin-line text-red"></i></div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : null}
          <div className='flex flex-col align-items-end mt-3' >
            <p className='text-end'>Total: 100$</p>
            <button type="button" className="btn-secondary mt-1 w-24">
            {" "}
            Checkout
          </button>
          </div>
          
        </div>
      ) : (
        <div className="h-screen flex mt-5 flex-col  align-items-center">
          <h3 className="text-center">Oops, Your Cart is empty</h3>
          <button type="button" className="btn-secondary w-24" onClick={()=>navigate('/menu')}>
            Go to menu
          </button>
        </div>
      )}
    </>
  );
}
