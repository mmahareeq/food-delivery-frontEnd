import React from 'react'
import { useFormik } from 'formik'
export default function AddItem() {

    const initValues = {
        title: '',
        price: 0,
        discount: 0,
        desc: '',
        img: null,
       };
    const formik = useFormik({
        initialValues: initValues,
        onSubmit: (values) =>{
            //dispatch(login(values)).unwrap();
          },
    })
  return (
    < div className='container'>
    <h3 className='mt-3'>Add New Items</h3>
    <form className='flex flex-col'>
       
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
        
        <label htmlFor='img'>Upload Image</label>
        <input id='img'
         type='file'
         value={formik.values.img}
         onChange={formik.handleChange}></input>
         <label htmlFor='desc'> description</label>
         <textarea id='desc' className='w-50 h-25'></textarea>
         <button className='custome-btn' type='submit'>Add</button>
    </form>
    </div>
  )
}
