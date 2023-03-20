import React, { useEffect } from "react";
import pizza from "../../assets/images/pizza2.png";
import "./home.css";
import { useSelector, useDispatch } from "react-redux";
import CardItem from "../cardItem/CardItem";
import { getAllItem } from "../../features/items/ItemAction";
import { Link, useNavigate } from "react-router-dom";
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
      <div className="container">
        <div className="flex flex-row">
          <div className="left-side">
            <div className="title-main">
              <p className="sub-title">Easy way to make an order</p>
              <p className="title">
                <span style={{ color: "#F9A826" }}>HUNGRY? &nbsp;</span> Just
                wait food at door?
              </p>
              <p className="details">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.Et
                dignissimos repellendus, dolores?
              </p>
            </div>
            <button
              variant="primary"
              className="custome-btn"
              onClick={() => navigate("/menu")}
            >
              Order Now
            </button>
          </div>
          <div>
            <img src={pizza} alt="pizza" className="pizza-img"></img>
          </div>
        </div>

        <div>
          <div className="flex justify-between">
            <h3>Featured Items</h3>
            <h6><Link to='/menu'>See More</Link></h6>
          </div>

          <div className="flex flex-row flex-wrap	gap-3">
            {items.map((item, index) => {
              if (index < 5) return <CardItem item={item} />;
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
