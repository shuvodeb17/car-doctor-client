import React, { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProviders';

const SocialLogin = () => {

    const { googleSignIn } = useContext(AuthContext);


    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error.message);
            })
    }


    return (
        <div className="text-center">
            <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline mb-5">
                G
            </button>

        </div>

    );
};

export default SocialLogin;