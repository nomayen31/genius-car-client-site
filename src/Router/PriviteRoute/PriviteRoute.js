
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const PriviteRoute = ({children}) => {
    const location =useLocation();
    const {user, loading} =useContext
    if (loading) {
        return <h1 className='text 5xl'>Loading</h1>
    }
    if (user) {
        return children;
    }
    return <Navigate state={{from: location}} replace></Navigate>
};

export default PriviteRoute;