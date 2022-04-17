import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Signup = () => {
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    })

    const [errors, setErrors] = useState({
        emailError: "",
        PasswordError: "",
        general: "",
    })

    const handleEmailChange = (e) => {

        const emailRegEx = /\S+@\S+\.\S+/;
        const validEmail = emailRegEx.test(e.target.value)

        if (validEmail) {
            setUserInfo({ ...userInfo, email: e.target.value })
            setErrors({ ...errors, emailError: "" })

        } else {
            setErrors({ ...errors, emailError: "Invalid Email" })
            setUserInfo({ ...userInfo, email:"" })
        }
    }

    return (
        <div className='mt-5 border border-1 rounded-3 w-50 mx-auto'>
            <div className='text-center'>
                <h1>Sign up</h1>
            </div>
            <div className='container p-3'>
                <div className='d-flex justify-content-center '>
                    <Form>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control onChange={handleEmailChange} type="email" placeholder="Enter email" />
                            {errors?.emailError && <p className='text-danger'>{errors.emailError}</p>}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupConfirmPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" placeholder="Confirm Password" />

                        </Form.Group>
                        <Form.Group className='mb-3' controlId='toggle'>
                            <Form.Text className="text-muted">
                                <span>Already have an Acount? </span>
                                <Link to='/login'>LogIn</Link>
                            </Form.Text>
                        </Form.Group>
                        <button className='btn btn-primary w-50'>SignUp</button>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Signup;