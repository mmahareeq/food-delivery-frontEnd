import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CardItem from '../../components/cardItem/CardItem';
import { getAllItem } from '../../features/items/ItemAction';
import Hero from '../../components/Hero/Hero';
import  CategoryList from '../../components/CategoryList/CategoryList';
export default function Menu() {
    const dispatch = useDispatch();
    const {items, loading}= useSelector((state)=> state.item)

    useEffect(()=>{
        dispatch(getAllItem({
            start:1, count:10, search: ''
        }))
    }, [])
  return (
    <div className='h-screen'>
       <Hero hero='Menu'/>
        <div className='flex justify-between mt-2 container'>
            < CategoryList/>
            <input type='text' placeholder='Search' className='w-25 h-10' />
        </div>
        <div className='flex flex-row flex-wrap	gap-3 container'>
           {items.map((item, index)=>{
            return <CardItem item={item}></CardItem>
           })}
           
        </div>
    </div>
  )
}
