import React, { useEffect, useState } from 'react'
import {getAllItem, deleteItem } from '../ItemAction';
import { useNavigate } from 'react-router-dom';
import Pagination from '../../../components/Pagination/Pagination';
import { useSelector, useDispatch } from 'react-redux';
import Spinner from '../../../components/Spinner/Spinner';

export default function ListItem() {
    const [lenItem, setLenItem] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5);
    const [search, setSearch] = useState('');
    const [isDelete, setDelete]= useState(false);
    const [err, setErr]= useState('');
    const [succ, setSuccess]= useState(false)
    let idItem = '';
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {items, error, loading, success} = useSelector((state)=>state.item);    
    const indexOfLastPost = currentPage * itemsPerPage;
    const indexOfFirstPost = indexOfLastPost - itemsPerPage;
    const currentPosts = items.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
     };

    useEffect(()=>{
        dispatch(getAllItem({start :currentPage, count: 10, search: search}))
        .then(data=>{
        console.log(data, items.length)
       // setItems([...data]);
        setLenItem(data.payload.length);
     }).catch(err=>setErr(err));
    },[search, currentPage]);

    const deleteItem =( )=>{
        deleteItem(idItem)
        .then(data=> setSuccess(true))
        .catch(err=> setErr(err)); 
       setDelete(false);   
    };

    const editItem =(id)=>{
       navigate(`/item/${id}`);
    }
    const SearchMethod = (event)=>{
        console.log(event.target.value)
       setSearch(event.target.value);
    }

  
    const cancelDelete = ()=>{
        //isDelete = false;
        setDelete(false);
    }
    const showModel = (id)=>{
        console.log(id)
        setDelete(true);
        idItem =id;
    }
    if(loading){
        return <Spinner/>
    }
  return (
    <div className='container'>{lenItem>0 ?<> 
    <div className='flex justify-end mb-2 mt-2'>
        
        <input type='text' placeholder='Search' className='w-25 mr-1' onInput={SearchMethod}/> 
        <button type='button' className='btn-secondary w-max p-1' onClick={()=>navigate('/item/add')}>Add New Item</button>
    </div>
    <table  className=" w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className='text-center'>
            <tr>
                <th>Title</th>
                <th>Price</th>
                <th>discount</th>
                <th>img(link)</th>
                <th>Action</th>
            </tr>
        </thead>
            <tbody>
                { items.map((data, index)=>{
                    
                    return <tr key={index} className='text-center h-10 bg-white border dark:bg-gray-800 dark:border-gray-700'>
                     <td>{data.title}</td>
                     <td>{data.price}</td>
                     <td>{data.discount}</td>
                     <td><a href={data.img}> link</a> </td>
                     <td>
                        <button onClick={()=>editItem(data._id)} className='text-yallow mr-2'><i class="ri-pencil-line "></i></button>
                        <button onClick={()=>showModel(data._id)} className='text-red'><i class="ri-delete-bin-line"></i></button>
                     </td>
                 </tr>
                })}
            </tbody>
    </table>
    <div>
    <Pagination
              itemsPerPage={itemsPerPage}
              totalItems={items.length}
              paginate={paginate}
           />
    </div>
    {isDelete ? <div id="popup-modal" className="fixed  z-50  p-4 overflow-x-hidden overflow-y-auto w-full  ">
    <div className="relative  h-full flex justify-center">
        <div className="relative bg-white rounded-lg shadow">
           
            <div class="p-6 text-center">
                <h3 class="mb-5 text-lg font-normal">Are you sure you want to delete this item?</h3>
                <button data-modal-hide="popup-modal" type="button" onClick={()=>deleteItem()} className="text-white bg-red hover:bg-red focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                    delete
                </button>
                <button data-modal-hide="popup-modal" type="button" onClick={()=> cancelDelete()} className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">cancel</button>
            </div>
        </div>
    </div>
</div>: null}
    </>
    : null}
        
    </div>
  )
}
