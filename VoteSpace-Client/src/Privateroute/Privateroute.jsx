import React, { useContext } from 'react';
// import { AuthContext } from '../contexts/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../components/Loader';

const Privateroute = ({ children }) => {
    // Access user and loading state from the AuthContext
    // const { user, loading } = useContext(AuthContext);
    
    // Get the current location using useLocation
    const location = useLocation();

    // If still loading, display a loading spinner
    // if (loading) {
    //     return (
    //         <div>
    //             <Loader/>
    //         </div>
    //     );
    // }

    // If the user is authenticated, render the children components
    if (user) {
        return children;
    }

    // If the user is not authenticated, redirect to the login page with the current location state
    return (
        <Navigate to="/login" state={{ from: location }} replace></Navigate>
    );
}

export default Privateroute;