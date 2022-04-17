import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import auth from '../../../firebase.init';

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

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        hookError,
    ] = useSignInWithEmailAndPassword(auth);

    const handleEmailChange = (e) => {

        const emailRegEx = /\S+@\S+\.\S+/;
        const validEmail = emailRegEx.test(e.target.value)

        if (validEmail) {
            setUserInfo({ ...userInfo, email: e.target.value })
            setErrors({ ...errors, emailError: "" })

        } else {
            setErrors({ ...errors, emailError: "Invalid Email" })
            setUserInfo({ ...userInfo, email: "" })
        }
    }

    const handlePasswordChange = (e) => {

        // const passRegEx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        setUserInfo({ ...userInfo, password: e.target.value })

    }


    const handleLogin = e => {
        e.preventDefault();
        signInWithEmailAndPassword(userInfo.email, userInfo.password)
    }
 

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    useEffect(() => {
        if (user) {
            navigate(from)
        }
    }, [user])

    return (
        <div className='mt-5 border border-1 rounded-3 w-50 mx-auto'>
            <div className='text-center'>
                <h1>Log In</h1>
            </div>
            <div className='container p-3'>
                <div className='d-flex justify-content-center '>
                    <Form onSubmit={handleLogin}>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control onChange={handleEmailChange} type="email" placeholder="Enter email" />
                            {errors?.emailError && <p className='text-danger'>{errors.emailError}</p>}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onChange={handlePasswordChange} type="password" placeholder="Password" />

                        </Form.Group>
                        <Form.Group className='mb-3' controlId='toggle'>
                            <Form.Text className="text-muted">
                                <span>Create an Acount? </span>
                                <Link to='/signup'>Signup</Link>
                            </Form.Text>
                        </Form.Group>
                        <button className='btn btn-primary w-50'>Login</button>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Signup;