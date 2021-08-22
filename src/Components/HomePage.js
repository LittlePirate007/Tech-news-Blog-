import React from 'react';
import GoogleLogin from "react-google-login";
import {useDispatch, useSelector} from "react-redux";
import {selectSignedIn, setSignedIn, setUserData} from '../features/userSlice';

import '../styling/home.css'

const HomePage = () => {

    const dispatch = useDispatch()
    const login = (response) => {
        console.log(response);
        dispatch(setSignedIn(true));
        dispatch(setUserData(response.profileObj));


    };

    const isSignedIn = useSelector(selectSignedIn)


    return (
        <div className = "home__page" style={{display: isSignedIn ? "none"  : " "}}>
            {!isSignedIn  ?         (   <div className = "login__message">
                <h2> 📖 </h2>
                <h1> All  Readers Fav Place!!</h1>
                <p>
                    Just Sign-up and start reading some quality blogs.
                </p>
                <GoogleLogin clientId="86763363145-4j8k2ddsuauv3g8qssavo2jv02q1f981.apps.googleusercontent.com"
                             render={(renderProp) => (
                                 <button
                                     onClick={renderProp.onClick}
                                     disabled={renderProp.disabled}
                                     className="login__button"
                                 >
                                     Login With Google
                                 </button>

                             )}
                             onSuccess={login}
                             onFailure={login}
                             isSignedIn={true}
                             cookiePolicy={"single_host_origin"}



                />
            </div>  ):( " ") }

        </div>
    )
}

export default HomePage;
