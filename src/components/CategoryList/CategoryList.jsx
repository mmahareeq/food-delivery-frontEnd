import React, { useEffect, useState } from "react";
import { getAllCategories } from "../../features/categories/categoryAction";
import { useSelector, useDispatch } from "react-redux";
import { getAllItem } from "../../features/items/ItemAction";

export default function CategoryList() {
  const { categories, loading } = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const [categorySelected, setCategorySelecrted] = useState("All");

  useEffect(() => {
    dispatch(getAllCategories()).then((data) => console.log(categories));
  }, []);

  const filterOnCategory = async (value) => {
    setCategorySelecrted(value);
  };

  useEffect(() => {
    dispatch(
      getAllItem({
        start: 1,
        count: 10,
        search: "",
        category: categorySelected === "All" ? "" : categorySelected,
      })
    );
  }, [categorySelected]);

  return (
    <div>
      <ul className="flex flex-row gap-1 m-0 p-0">
        {categories.map((item, index) => {
          return (
            <button
              key={index}
              className={
                categorySelected === item.name
                  ? "border-2 border-softorange  p-2  hover:opacity-80"
                  : "border-2 border-lightgray p-2  hover:opacity-80"
              }
              onClick={() => filterOnCategory(item.name)}
            >
              {item.name}
            </button>
          );
        })}
      </ul>
    </div>
  );
}
