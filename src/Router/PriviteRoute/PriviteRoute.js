
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const PriviteRoute = ({children}) => {
    const location =useLocation();
    const {user, loading} =useContext(AuthContext)
    if (loading) {
        return <h1 className='text 5xl'>Loading</h1>
    }
    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>;
};

export default PriviteRoute;