import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCart, delCart } from '../Actions/Actions';

export default function Cart() {

    const state = useSelector((state) => state)

    const dispatch=useDispatch();
    const handleAdd=(product)=>{
        dispatch(addCart(product))
    };
    const handleDel=(product)=>{
        dispatch(delCart(product))
    }

    return (
        <div>
            <ul>
                {
                    state.map((product) => (
                        <div className='d-flex'>
                            <div className='col-md-6'>
                            <img src={product.image} height="400px" width="400px"/>
                        </div>

                        <div className='py-5'>

                        <h4 className='display-6'>{product.title}</h4>

                            <h3>Price:$ {product.qty*product.price}</h3>


                           <div className='d-flex'>
                           <button className='btn btn-danger' style={{width:40, height:40}} onClick={()=>handleDel(product)}>-</button>
                            <p className='px-3 mt-2'>{product.qty}</p>
                            <button className='btn btn-primary ' style={{width:40, height:40}} onClick={()=>handleAdd(product)}>+</button>
                           </div>

                        </div>
                        </div>
                    ))
                }

            </ul>


        </div>
    )
}
