import React , {useState, useEffect}from "react";
import Hero from "../../shared/Hero/Hero";
import { Cart  as getCart} from "../../features/cart/cartAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Spinner} from '../../shared/Spinner/Spinner';
import { deleteItemFromCart} from '../../features/cart/cartAction';
export default function Cart() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cart, loading, error } = useSelector((state) => state.cart);
  console.log(cart)
  const { userinfo } = useSelector((state) => state.users);
  const [count, setCount] = useState(0);
  const [Total, setTotal]= useState(0);

  const TotalOfPrice = ()=>{
    const sum = cart.products.reduce((acc, item)=> acc + (item.quantity * item.product.price) , 0);
    setTotal(sum);
  }
  
  useEffect(()=>{
    if(cart.length)
      TotalOfPrice();
  },[cart])

  const increseCount = (item) => {
    setCount((count)=>{
      const newCount = count ? count+1 : item.quantity + 1;
      const sum= item.quantity * item.product.price;
      setTotal(()=> (Total-sum) + (newCount * item.product.price));
       return newCount});
  };

  const decreseCount = () => {
    setCount((prevCount) => prevCount - 1);
  };
  useEffect(()=>{
    dispatch(getCart()).then(()=>TotalOfPrice());
  }
  ,[])

  const deleteItem = async(id)=>{
    console.log(id);
    const data = {
      productId: id
    };
    dispatch(deleteItemFromCart(id)).then(()=>getCart());

  }
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
                       
                      <div>
                            <button
                              type="button"
                              className="w-9 border rounded h-10	"
                              onClick={()=>increseCount(item)}
                            >
                              +
                            </button>
                            <span className="mx-2 align-self-center">
                              {count ? count : item.quantity }
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
                      <div><button onClick={()=>deleteItem(item.product._id)}>
                      <i className="ri-delete-bin-line text-red"></i></button></div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : null}
          <div className='flex flex-col align-items-end mt-3' >
            <p className='text-end'><b>Total:</b> {Total} $</p>
            <p className='text-end'><b>Delivery Cost:</b> 1 $</p>
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
