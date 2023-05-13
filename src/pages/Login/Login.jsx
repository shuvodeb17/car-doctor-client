import React, { useContext } from 'react';
import loginImage from '../../assets/images/login/login.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const Login = () => {

    const { signIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";

    const loginHandler = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <div className="hero">
            <div className="hero-content w-full ">
                <div className="text-center lg:text-left">
                    <img className='w-2/3' src={loginImage} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm border-2 border-grey-200 ">
                    <form className="card-body" onSubmit={loginHandler}>
                        <h1 className="text-3xl font-bold">Sign In</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="text" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className='btn btn-primary' type="submit" value="Login" />
                        </div>
                        <p className='mt-3 text-center'>
                            New to Car Doctor ? <span className='text-[#FF3811] text-bold'><Link to='/registration'>Sign up</Link></span>
                        </p>
                    </form>


                    <SocialLogin />
                </div>
            </div>
        </div>
    );
};

export default Login;