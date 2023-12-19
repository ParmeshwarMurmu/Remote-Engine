import React, { useState } from 'react'
// import style from '../CSS/Signup.module.css'
import style from '../SignUp/Signup.module.css'
import { Link } from 'react-router-dom'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { loginEmailAction, userLogin } from '../../../Redux/LoginReducer/action';
import { Loader } from '../../../Components/Loader/Loader';

export const Login = () => {

    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);

    
    // Extracting email from LoginReducer
    const { email } = useSelector((store) => {
        return {
            email: store.LoginReducer.email,
        }
    }, shallowEqual)

 

    // Extracting isAuth from IsAuthReducer
    
    const { isAuth } = useSelector((store) => {
        return {
            isAuth: store.IsAuthReducer.isAuth,
        }
    }, shallowEqual)







    
    // Function when user click on Submit Button 

    const userLoginClick = async(e) => {
        setLoading(true)
        e.preventDefault();
        const data = {
            email
        }
        await dispatch(userLogin(data))
        setLoading(false)
    }


    return (
        <div className={style.signupContainer}>


            <div>

                <div className={style.onboarding}>
                    <Link to={'/onboarding'}>Onboarding</Link>
                </div>

                {/* Heading */}

                {
                    isAuth ? <h1>Loged In Continue Onboarding</h1> : ( <>
                
                <h1>Login</h1>


                <form onSubmit={userLoginClick}>

                    <div>
                        <label> Email</label>
                    </div>

                    {/* Email Input */}
                    <div>
                        <input type='email'
                            placeholder='Email'
                            required
                            onChange={(e) => {
                                dispatch(loginEmailAction(e.target.value))
                            }}

                        />
                    </div>

                    {/* Form Submit button */}
                    {loading && <Loader /> }

                    <div>
                        <input type="submit" disabled={loading} />
                    </div>
                </form>
                </>
                    )
                }

                <div>
                    <Link to={'/'}>SignUp</Link>
                </div>
            </div>


        </div>
    )
}
