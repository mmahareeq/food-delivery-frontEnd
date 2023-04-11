import React, {useEffect} from 'react'
import { getAllCategories } from '../../features/categories/categoryAction';
import { useSelector, useDispatch } from 'react-redux';


export default function CategoryList() {
    const {categories, loading} = useSelector(state=>state.categories);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getAllCategories()).then(data=> console.log(categories));
    },[]);
  return (
    <div>
        <ul className='flex flex-row gap-1 m-0 p-0'>
          {categories.map((item)=>{
            return (<button className='bg-lightgray p-2 rounded-md hover:opacity-80'>{item.name}</button>)
          })}
        </ul>
    </div>
  )
}
