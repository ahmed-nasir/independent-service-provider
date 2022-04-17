import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import googleIcon from '../../../images/icon/google.png'

const SocialLogin = () => {
    
    return (
        <div >
            <div className='w-100 d-flex justify-content-center align-items-center'>
                <div style={{ height: '1px' }} className='bg-secondary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-secondary w-50'></div>
            </div>
            <div>
                <button className='btn btn-light'><img src={googleIcon} alt="" />
                   <span className='px-2'>Google Sign In</span> 
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;