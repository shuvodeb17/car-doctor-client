import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.SVG'
import { AuthContext } from '../../../providers/AuthProviders';

const Header = () => {

    const { user, logout } = useContext(AuthContext);

    const logoutHandler = () => {
        logout()
            .then()
            .catch(error => {
                console.log(error.message);
            })
    }

    const navListLink = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/'>About</Link></li>
        <li><Link to='/'>Services</Link></li>
        <li><Link to='/'>Blog</Link></li>
        <li><Link to='/'>Contact</Link></li>
        <li><a>{user?.email}</a></li>
        {
            user ?
                <button onClick={logoutHandler} className='btn btn-secondary'>Logout</button>
                :
                <Link to='/login'>
                    <button className='btn btn-primary'>Login</button>
                </Link>
        }
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navListLink}
                    </ul>
                </div>
                <a className="normal-case text-xl">
                    <img className='' src={logo} alt="" />
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navListLink}
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn btn-outline btn-error">Appointment</button>
            </div>
        </div>
    );
};

export default Header;