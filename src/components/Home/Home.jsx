import React, { useEffect } from "react";
import resturant from "../../assets/images/Photo.png";
import desert from '../../assets/images/desert.png'
import "./home.css";
import { useSelector, useDispatch } from "react-redux";
import CardItem from "../cardItem/CardItem";
import { getAllItem } from "../../features/items/ItemAction";
import { Link, useNavigate } from "react-router-dom";
import Service from "../Service/Service";
export default function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items } = useSelector((state) => state.item);

  useEffect(() => {
    dispatch(
      getAllItem({
        start: 1,
        count: 10,
        search: "",
      })
    );
  }, []);
  return (
    <main>
     
        <div className="flex flex-row bg-darkblue  justify-content-around">
          <div className="left-side">
            <div className="title-main text-white">
              <p className="title">Welcome to our Resturant</p>
              <p className="sub-title">
                <span className="text-softorange">HUNGRY? &nbsp;</span> Just
                wait food at door?
              </p>
              <p className="">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.Et
                dignissimos
              </p>
            </div>
            <button
              variant="primary"
              className="btn-primary w-25"
              onClick={() => navigate("/menu")}
            >
              Order Now
            </button>
          </div>
          <div>
            <img src={resturant} alt="pizza" className="pizza-img"></img>
          </div>
        </div>

        <div className="flex flex-row w-full container mt-3 gap-5">
          <div className="flex flex-col w-2/5 mt-3">
            <h4 className="border-y border-y-softorange">Menu</h4>
            <h5>Try Our Special Offers</h5>
            <p className="font-light text-gray">
            Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content making it look like readable English
            </p>
            <img src={desert} ></img>
            <button
              variant="primary"
              className="btn-primary  text-black mt-2"
              onClick={() => navigate("/menu")}
            >
              See All dishes
            </button>
          </div>

          <div className="flex flex-col flex-wrap w-full ">
            {items.map((item, index) => {
              if (index < 4) return (<div className="flex flex-row  align-items-center justify-content-evenly ">
              <div className="flex flex-row align-items-center">
              <img src={item.img} className="rounded w-24 "></img>
              
              <p className="mb-0">{item.title} </p>
              <p className="border-b-2 mb-4 border-dotted w-80 border-b-gray	"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p>
              </div>
              <p className="mb-0 text-gray">{item.price} $</p>
              
              
                              
              </div>)
            })}
          </div>
        </div>
        
        <Service/>
     
    </main>
  );
}
