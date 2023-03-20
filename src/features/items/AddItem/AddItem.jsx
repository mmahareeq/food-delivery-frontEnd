import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { addNewItem, getItemById, updateItem } from '../ItemAction';
import {useParams} from 'react-router-dom';

export default function AddItem() {
    const {id} = useParams();
    const [idItem, setIdItem] = useState('');  
    const [editMode, setEditMode] = useState(false);  
    const dispatch = useDispatch();
    const initValues = {
        title: '',
        price: 0,
        discount: 0,
        desc: '',
        img:''
       };
    const formik = useFormik({
        initialValues: initValues,
        onSubmit: (values) =>{
            console.log(values);
            const formData = new FormData();
            const data = {};
            for (let value in values) {
                // formData.append(value, values[value]);
                data[value] = value;
            }
            formData.append('data', JSON.stringify(values))
            formData.append('file', values.file);
            if(!editMode)
              dispatch(addNewItem(formData)).unwrap();
            else 
              updateItem(id, formData).then(()=>console.log('trueee'));
          },
    })

    useEffect(()=>{
      if(id){
        setIdItem(id);
        setEditMode(true);
         getItemById(id).then((data)=>formik.setValues(
          {
            title: data.title,
            price: data.price,
            discount: data.discount,
            desc: data.desc,
            img: data.img
           }
         ));
        // initValues = {...data};
        
        console.log(initValues);
      }
    },[])
  return (
    < div className='container'>
    <h3 className='mt-3'>Add New Items</h3>
    <form className='flex flex-col' onSubmit={formik.handleSubmit}>
       
      <label htmlFor='title'>Title</label>
      <input id='title'
        type='string'
        value={formik.values.title}
        onChange={formik.handleChange}></input>    
       <label htmlFor='price'> Price</label>
       <input id='price'
         type='number'
        value={formik.values.price}
         onChange={formik.handleChange}></input>
       <label htmlFor='discount'>Discount</label>
       <input id='discount'
         type='number'
         value={formik.values.discount}
         onChange={formik.handleChange}></input>
        
        <label htmlFor='file'>Upload Image</label>
        <input id='file' name='file'
         type='file'
         //  value={formik.values.img}
         onChange={(event) => {
            console.log(event)
            formik.setFieldValue("file", event.currentTarget.files[0])}}></input>
            <img src={formik.values.img} className='w-12'></img>
         <label htmlFor='desc'> description</label>
         <textarea id='desc' className='w-50 h-25'></textarea>
         <button className='custome-btn' type='submit'>Add</button>
    </form>
    </div>
  )
}
