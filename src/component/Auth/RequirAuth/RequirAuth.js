import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../shared/Loading/Loading';

const RequirAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth)

    const location = useLocation()
    if (loading) {
        return <Loading></Loading>
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    } else {
        return children
    }

};

export default RequirAuth;