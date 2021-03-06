import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth'
import auth from '../../../firebase.init';
import Loading from '../../shared/Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';

import SocialLogin from '../SocialLogin/SocialLogin';
import googleIcon from '../../../images/icon/google.png'
import github from '../../../images/icon/github.png'

const Signup = () => {
    const [user] = useAuthState(auth)

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
        ,
        loading,
        hookError,
    ] = useSignInWithEmailAndPassword(auth);

    // const [signInWithGoogle, , gLoading, error] = useSignInWithGoogle(auth)

    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(
        auth
    );

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
        toast("Login complet")
    }



    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    if (hookError) {
        toast(hookError?.message)
    }

    if (loading) {
        return <Loading></Loading>
    }
    // useEffect(() => {
    if (user) {
        navigate(from,{replace:true})
    }
    // }, [user])

    const handleResetPassword = async () => {
        const email = userInfo.email;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('please enter your email address');
        }
    }
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
                                {/* {
                                    hookError && <p className='text-danger'>{hookError.message}</p>
                                } */}
                            </Form.Text><br />
                            <Form.Text className="text-muted">
                                <span>Forget password? </span>
                                <Button onClick={handleResetPassword} variant="link">Reset Pasword</Button> <br />

                            </Form.Text>
                        </Form.Group>
                        <button className='btn btn-primary w-50 d-block mx-auto'>Login</button>


                    </Form>
                    
                </div>
                <SocialLogin />
            </div>
        </div>
    );
};

export default Signup;