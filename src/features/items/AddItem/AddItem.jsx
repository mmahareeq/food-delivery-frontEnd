import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { addNewItem, getItemById, updateItem } from "../ItemAction";
import { useParams, useNavigate } from "react-router-dom";
import { getAllCategories } from "../../categories/categoryAction";
import Hero from "../../../shared/Hero/Hero";
export default function AddItem() {
  const { id } = useParams();
  const [idItem, setIdItem] = useState("");
  const [editMode, setEditMode] = useState(false);
  const { categories } = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const nevigate = useNavigate();
  const initValues = {
    title: "",
    price: 0,
    discount: 0,
    desc: "",
    img: "",
    category: "",
  };
  const formik = useFormik({
    initialValues: initValues,
    onSubmit: (values) => {
      console.log(values);
      const formData = new FormData();
      const data = {};
      for (let value in values) {
        // formData.append(value, values[value]);
        data[value] = value;
      }
      formData.append("data", JSON.stringify(values));
      formData.append("file", values.file);
      if (!editMode)
        dispatch(addNewItem(formData))  
          .then(() => nevigate("/item"))
          .unwrap();
      else updateItem(id, formData).then(() => console.log("trueee"));
    },
  });

  useEffect(() => {
    if (id) {
      setIdItem(id);
      setEditMode(true);
      getItemById(id).then((data) =>
        formik.setValues({
          title: data.title,
          price: data.price,
          discount: data.discount,
          desc: data.desc,
          img: data.img,
          
        })
      );
      // initValues = {...data};

      console.log(initValues);
    }
    dispatch(getAllCategories()).then((data) => console.log(data));
  }, []);
  return (
    <div >
      <Hero hero='Add New Item'></Hero>
      {/* <h3 className="mt-3">Add New Items</h3> */}
      <form className="flex flex-wrap container mt-2" onSubmit={formik.handleSubmit}>
        <div className="w-full md:w-1/2 mb-2">
          <label htmlFor="title" className="block">
            Title
          </label>
          <input
            className="w-7/12"
            id="title"
            type="string"
            value={formik.values.title}
            onChange={formik.handleChange}
          ></input>
        </div>
        <div className="w-full md:w-1/2 mb-2">
          <label htmlFor="price" className="block">
            {" "}
            Price
          </label>
          <input
            className="w-7/12"
            id="price"
            type="number"
            value={formik.values.price}
            onChange={formik.handleChange}
          ></input>
        </div>
        <div className="w-full md:w-1/2 mb-2">
          <label htmlFor="discount" className="block">
            Discount
          </label>
          <input
            className="w-7/12"
            id="discount"
            type="number"
            value={formik.values.discount}
            onChange={formik.handleChange}
          ></input>
        </div>
        <div className="w-full md:w-1/2 mb-2">
          <label htmlFor="file" className="block">
            Upload Image
          </label>
          <input
            className="pt-1 w-7/12"
            id="file"
            name="file"
            type="file"
            //  value={formik.values.img}
            onChange={(event) => {
              formik.setFieldValue("file", event.currentTarget.files[0]);
            }}
          ></input>
        </div>
        <div className="w-full md:w-1/2 mb-2">
          <label htmlFor="category" className="block">
            Category
          </label>
          <select name="category" id="category" className=" w-7/12 h-10 border border-lightgray"
            value={formik.values.category}  onChange={(event)=> formik.setFieldValue('category', event.target.value)}>
            {categories.map((category) => {
              return <option value={category._id}>{category.name}</option>;
            })}
          </select>
        </div>
        <img src={formik.values.img} className="w-12"></img>
        <div className="w-full md:w-1/2 mb-2">
          {" "}
          <label htmlFor="desc" className="block">
            {" "}
            description
          </label>
          <textarea id="desc" className="w-7/12 border"></textarea>
        </div>
        <div className=" flex flex-row  mt-4">
          <button className="btn-secondary w-24" type="submit">
            {!editMode ? "Add" : "Edit"}
          </button>
          <button
            className="btn-primary text-black w-24 ml-2"
            type="button"
            onClick={() => nevigate("/item")}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
