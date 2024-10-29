import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import '../Products.css'


export default function Products() {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState([]);
    const[loading,setLoading]=useState(false)

    useEffect(() => {
        setLoading(true)
        const getProducts = async () => {
            const response = await fetch('https://fakestoreapi.com/products')
            setData( await response.json())
            setFilter(data)
            setLoading(false)
            console.log(response);
        }
        getProducts();
    },[])

    const ShowFilter = (cat) => {
        let filterdata = data.filter((item) => item.category == cat)
        setFilter(filterdata)
        // console.log(filterdata);
    };

    if(loading){
        return <div className='load'></div>
    }


    const ShowProducts = () => {
        return (
            <>

                <div className="buttons d-flex justify-content-center mb-5 pb-5">
                    <button type="button " className="btn btn-outline-dark me-2 px-3" onClick={()=>setFilter(data)}>All</button>
                    <button type="button" className="btn btn-outline-dark me-2 px-3" onClick={() => ShowFilter("men's clothing")}>Men's </button>
                    <button type="button" className="btn btn-outline-dark me-2 px-3" onClick={() => ShowFilter("women's clothing")}>Women's</button>
                    <button type="button" className="btn btn-outline-dark me-2 px-3" onClick={() => ShowFilter("jewelery")}>Jwellery</button>
                    <button type="button" className="btn btn-outline-dark me-2 px-3" onClick={() => ShowFilter("electronics")}>Electronics</button>

                </div>

                {
                    filter && filter.map((product) => {
                        return (
                            <>
                            <div className='col-md-3 mb-3'>
                            <div className="card  h-100 text-center p-4" >
                                <img src={product.image} className="card-img-top" alt={product.title} height={250} />
                                <div className="card-body">
                                    <h5 className="card-title mb-0">{product.title}</h5>
                                    <p className="card-text lead fw-bold">${product.price}</p>
                                    <NavLink to={`/products/${product.id}`} className="btn btn-outline-dark">BUYNOW</NavLink>
                                </div>
                            </div>
                            </div>
                            </>
                        )
                    })
                }
            </>
        )
    }
    return (  
     <div>
    <div className="container my-5 py-5">
        <div className="row">
            <div className="col-12 mb-5">
                <h1 className='display-6 fw-bolder text-center'>Latest Products</h1>
                <hr />
            </div>
        </div>
        <div className="row justify-content-center ">
             <ShowProducts />
        </div>
    </div>
</div>
)
}
