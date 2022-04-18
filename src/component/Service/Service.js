import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const navigate = useNavigate()
    const { name, price, img, description,duration,id} = service;
    return (
        <div className='g-5  col-sm-12 col-md-6 col-lg-4'>
            <div className="card" style={{ width: "18rem" }}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h4 className="card-title">{name}</h4>
                    <p className="card-text">{description}</p>
                    <p className="card-text">Duration: {duration} min</p>
                    <p className='card-text'>Fees: ${price}</p>
                    <button onClick={()=>navigate(`/checkout/${id}`)} className='btn btn-primary'>Book</button>
                </div>
            </div>
        </div>

        
    );
};

export default Service;