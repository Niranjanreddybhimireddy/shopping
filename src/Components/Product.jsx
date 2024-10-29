import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom'
import { addCart } from '../Actions/Actions';


export default function Product() {

    const{id}=useParams()
    const[data,setData]=useState([]);

    const dispatch=useDispatch()

    const AddCart=(data)=>{
        dispatch(addCart(data))
        
    }

    useEffect(()=>{
        const getProduct=async()=>{
            const response=await axios.get(`https://fakestoreapi.com/products/${id}`)
            setData(await response.data)
            console.log(response);
            
        };getProduct();
    },[])
  return (
    
    <>
    <div className='col-md-3 mb-3 '>
    <div className="card  h-100 text-center p-4" >
        <img src={data.image} className="card-img-top" alt={data.title} height={250} />
        <div className="card-body">
            <h5 className="card-title mb-0">{data.title}</h5>
            <p className="card-text lead fw-bold">${data.price}</p>
            <NavLink to="#" className="btn btn-outline-dark" onClick={()=>AddCart(data)}>AddtoCart</NavLink>
            <NavLink to="/cart" className="btn btn-outline-dark">GotoCart</NavLink>

        </div>
    </div>
    </div>
    </>
  )
}
