import React from 'react'
import Products from './Products'

export default function Home() {
  return (
    <div className='hero mt-5'>
        <div className="card text-bg-dark">
  <img src="/assests/sale.jpeg" className="card-img" alt="sale Photo" height={500}/>
  <div className="card-img-overlay">
    <h5 className="card-title">ABEZON</h5>
    <p className="card-text">Greate Indain Sale is now ...</p>
    <p className="card-text"><small>Hurry up...</small></p>
  </div>
  <Products/>
</div>
    </div>
  )
}
