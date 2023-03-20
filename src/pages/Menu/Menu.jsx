import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CardItem from '../../components/cardItem/CardItem';
import { getAllItem } from '../../features/items/ItemAction';
export default function Menu() {
    const dispatch = useDispatch();
    const {items, loading}= useSelector((state)=> state.item)

    useEffect(()=>{
        dispatch(getAllItem({
            start:1, count:10, search: ''
        }))
    }, [])
  return (
    <div className='container'>
        <h3 className='mt-3'>Featured Item</h3>
        <div className='flex justify-end'>
            <input type='text' placeholder='Search' className='w-25' />
        </div>
        <div className='flex flex-row flex-wrap	gap-3'>
           {items.map((item, index)=>{
            return <CardItem item={item}></CardItem>
           })}
           
        </div>
    </div>
  )
}
