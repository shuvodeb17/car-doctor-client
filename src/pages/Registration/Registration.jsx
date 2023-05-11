import React, { useContext } from 'react';
import loginImage from '../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';

const Registration = () => {

    const { register } = useContext(AuthContext)

    const registrationHandler = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;
        console.log(email, password, confirmPassword);

        if (password !== confirmPassword) {
            alert('Password does not match');
            return;
        }

        register(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
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
                    <form className="card-body" onSubmit={registrationHandler}>
                        <h1 className="text-3xl font-bold">Sign Up</h1>
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
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input name='confirmPassword' type="text" placeholder="confirm password" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <input className='btn btn-primary' type="submit" value="Registration" />
                        </div>
                        <p className='mt-3 text-center'>
                            Already Have an Account ? <span className='text-[#FF3811] text-bold'><Link to='/login'>Sign In</Link></span>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Registration;