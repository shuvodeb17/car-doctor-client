import React from 'react';
import Login from '../pages/Login/Login';
import Header from '../pages/Shared/Header/Header'
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
    return (
        <div>
            <Header />
            <Login />
        </div>
    );
};

export default LoginLayout;