import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CardItem from '../../components/cardItem/CardItem';
import { getAllItem } from '../../features/items/ItemAction';
import Hero from "../../shared/Hero/Hero";
import  CategoryList from '../../components/CategoryList/CategoryList';

export default function Menu() {
    const dispatch = useDispatch();
    const {items, loading}= useSelector((state)=> state.item);
    const [search, setSearch] = useState('');

    const SearchMethod = (event) => {
      console.log(event.target.value);
      setSearch(event.target.value);
    };

    useEffect(()=>{
        dispatch(getAllItem({
            start:1, count:10, search: search
        }))
    }, [search])
  return (
    <div className='h-screen'>
       <Hero hero='Menu'/>
        <div className='flex justify-between mt-2 container'>
            < CategoryList/>
            <input type='text' placeholder='Search'  onInput={SearchMethod} className='w-25 h-10' />
        </div>
        <div className='flex flex-row flex-wrap	gap-3 container'>
           {items.map((item, index)=>{
            return <CardItem item={item}></CardItem>
           })}
           
        </div>
    </div>
  )
}
