import { Button } from 'bootstrap';
import React, { useState } from 'react';
import { Card, Form, ToastContainer } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import {toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const CheckOut = () => {
    const [user] = useAuthState(auth)

    const {id}=useParams();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate();

    const handleNameBlur = event => {
        setName(event.target.value)
    }


    const handleAddressBlur = event => {
        setAddress(event.target.value);

    }

    const handlePhoneNumberBlur = event => {
        setPhoneNumber(event.target.value);

    }

    const handleCreateUser = event => {
        event.preventDefault();
        const shipping = { name, email, address, phoneNumber }
        console.log(shipping)
        toast(`Thank you for your booking ${id}`)
        

    }
    return (
        <div>
            <div className='container '>
                <h1 className='text-center my-5'>CheckOut</h1>
                <Card className='w-50 mx-auto p-5'>
                    <Form onSubmit={handleCreateUser}>
                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label>Name</Form.Label>
                            <Form.Control onBlur={handleNameBlur} type="text" placeholder="Name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="forBasicAddress">
                            <Form.Label>Address</Form.Label>
                            <Form.Control onBlur={handleAddressBlur} type="text" placeholder="address" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control value={user?.email} type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="forbasicNumber">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control onBlur={handlePhoneNumberBlur} type="numbr" placeholder="Phone Number" />
                        </Form.Group>
                        <button className='btn btn-primary'>Checkout</button>
                    </Form>
                </Card>
            </div>
            <ToastContainer/>
        </div>
    );
};

export default CheckOut;