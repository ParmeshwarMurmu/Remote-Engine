import React from 'react'
// import style from '../CSS/Signup.module.css'
import style from '../SignUp/Signup.module.css'
import { Link } from 'react-router-dom'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { loginEmailAction, userLogin } from '../../../Redux/LoginReducer/action';

export const Login = () => {

    const dispatch = useDispatch();


    const { email } = useSelector((store) => {
        return {
            email: store.LoginReducer.email,
        }
    }, shallowEqual)

    const { isAuth } = useSelector((store) => {
        return {
            isAuth: store.IsAuthReducer.isAuth,
        }
    }, shallowEqual)







    console.log(email);

    const userLoginClick = (e) => {
        e.preventDefault();
        const data = {
            email
        }
        dispatch(userLogin(data))
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
                    <div>
                        <input type="submit" />
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
