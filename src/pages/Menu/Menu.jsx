import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CardItem from '../../components/cardItem/CardItem';
import { getAllItem } from '../../features/items/ItemAction';
import Hero from "../../shared/Hero/Hero";
import  CategoryList from '../../components/CategoryList/CategoryList';
import Pagination from '../../shared/Pagination/Pagination';

export default function Menu() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 1;
     
    const dispatch = useDispatch();
    const {items, loading, count}= useSelector((state)=> state.item);
    const [search, setSearch] = useState('');
 
    const indexOfLastPost = currentPage * itemsPerPage;
    const indexOfFirstPost = indexOfLastPost - itemsPerPage;
    //const currentPosts = items.slice(indexOfFirstPost, indexOfLastPost);
  
    const paginate = (pageNumber) => {
      setCurrentPage(pageNumber);
    };

    const SearchMethod = (event) => {
      //console.log(event.target.value);
      setSearch(event.target.value);
    };

    useEffect(()=>{
        dispatch(getAllItem({
            start:1, count: itemsPerPage, search: search, category: ''
        }))
    }, [search])
    useEffect(()=>{
      dispatch(getAllItem({
          start:indexOfFirstPost + 1, count: itemsPerPage, search: search, category: ''
      }))
  }, [currentPage])
    // if(loading) {
    //   return <Spinner></Spinner>
    // }
    // const moveToAnotherPage = (page)=>{
    // //   dispatch(getAllItem({
    // //     start:1, count:10, search: search, category: ''
    // // }))
    //    setCurrentPage(page++)
    //    console.log(page);
    // }
  return (
    <div className='h-screen'>
       <Hero hero='Menu'/>
        <div className='flex justify-between mt-2 container'>
            < CategoryList/>
            <input type='text' placeholder='Search'  onInput={SearchMethod} className='w-25 h-10' />
        </div>
        {
          items.length === 0 ? <div className='text-center mt-5'> There are no dishes</div> : 
          <div className='flex flex-row flex-wrap	gap-3 container'>
          {items.map((item, index)=>{
           return <CardItem item={item}></CardItem>
          })}
          
       </div>
        }
       <Pagination
              itemsPerPage={itemsPerPage}
              totalItems={count}
              paginate={paginate}
              currentPage= {currentPage}

            />
    </div>
  )
}
