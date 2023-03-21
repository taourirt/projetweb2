import React from 'react'
import Products from './Products'
export default function Home() {
  return (
    <div className='Hero'>
<div className="card bg-dark text-white border-0">
  <img src="./image/background.avif" className="card-img" alt="Couverture" height="450px"/>
  <div className="card-img-overlay d-flex flex-column justify-content-center">
    <div className="container">

    </div>
    <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
    <p className="card-text lead fs-2">Check Out All The Trends</p>
  </div>
</div>
<Products />
    </div>
  )
}
