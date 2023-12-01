import React from 'react';
import './card.css';
import product1 from '../../assets/img/product1.png'
const Card = () => {
    return (
        <div className='card-wrapper'>
            <div className="card">
                <img src={product1} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Chicken</h5>
                    <p className="card-text">finger licking good,spicy,colonel or plain chicken</p>
                    <div className="btn-wrapper d-flex">
                        <button type="button" className="btn btn-outline-danger btn-wrapper">UGX 15000</button>
                        <button type="button" className="btn btn-danger  btn-wrapper">Add to Bucket</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card