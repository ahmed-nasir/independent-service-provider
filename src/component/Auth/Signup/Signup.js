import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import auth from '../../../firebase.init';
import Loading from '../../shared/Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        createUserWithEmailAndPassword,
        user,
        loading,
        hookError,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

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

    const handleConfirmPassword = e => {
        if (e.target.value === userInfo.password) {
            setUserInfo({ ...userInfo, confirmPassword: e.target.value })
            setErrors({ ...errors, passwordError: "" })
        } else {
            setErrors({ ...errors, passwordError: "Password does not match!" })
            setUserInfo({ ...userInfo, confirmPassword: '' })
        }
    }


    const handleSignUp = e => {
        e.preventDefault();
        createUserWithEmailAndPassword(userInfo.email, userInfo.password)
        toast("Successfull")
    }


    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    if (loading) {
        return <Loading></Loading>
    }
    console.log(user)
    // useEffect(() => {
    if (user) {
        navigate(from)
    }
    // }, [user])

    return (
        <div className='mt-5 border border-1 rounded-3 w-50 mx-auto'>
            <div className='text-center'>
                <h1>Sign up</h1>
            </div>
            <div className='container p-3'>
                <div className='d-flex justify-content-center '>
                    <Form onSubmit={handleSignUp}>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control onChange={handleEmailChange} type="email" placeholder="Enter email" />
                            {errors?.emailError && <p className='text-danger'>{errors.emailError}</p>}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onChange={handlePasswordChange} type="password" placeholder="Password" />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupConfirmPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control onChange={handleConfirmPassword} type="password" placeholder="Confirm Password" />
                            {errors?.passwordError && <p className='text-danger'>{errors.passwordError}</p>}
                        </Form.Group>
                        <Form.Group className='mb-3' controlId='toggle'>
                            <Form.Text className="text-muted">
                                <span>Already have an Acount? </span>
                                <Link to='/login'>LogIn</Link>
                            </Form.Text>
                        </Form.Group>
                        <button className='btn btn-primary w-50'>SignUp</button>
                        <ToastContainer/>
                    </Form>
                    
                </div>
            </div>
        </div>
    );
};

export default Signup;