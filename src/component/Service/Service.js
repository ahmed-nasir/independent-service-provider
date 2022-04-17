import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { name, price, img, description,duration} = service;
    return (
        <div className='g-5  col-sm-12 col-md-6 col-lg-4'>
            <div className="card" style={{ width: "18rem" }}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text">Duration: {duration} min</p>
                    <p className='card-text'>Fees: ${price}</p>
                    <Link to='/checkout'><button className='btn btn-primary'>Book</button></Link>
                </div>
            </div>
        </div>

        
    );
};

export default Service;