import React from 'react'
import style from '../SignUp/Signup.module.css'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { registrationEmailAction, userRegistration } from '../../../Redux/SignupReducer/action';
import { Link } from 'react-router-dom';

// SIGN UP COMPONENT

export const SignUp = () => {

    const dispatch = useDispatch();


    const { email } = useSelector((store) => {
        return {
            email: store.SignupReducer.email,
        }
    }, shallowEqual)

    console.log(email);



    const userSignClick = (e) => {
        e.preventDefault();
        const data = {
            email
        }
        dispatch(userRegistration(data))

    }


    return (
        <div className={style.signupContainer}>


            <div>

                <div className={style.onboarding}>
                    <Link to={'/allApplication'}>View All Application</Link>
                </div>

                <div className={style.onboarding}>
                    <Link to={'/onboarding'}>Onboarding</Link>
                </div>


                <h1>Sign Up</h1>


                <form onSubmit={userSignClick}>

                    <div>
                        <label> Email</label>
                    </div>

                    {/* Email Input */}
                    <div>
                        <input type='email'
                            placeholder='Email'
                            required
                            value={email}
                            onChange={(e) => {
                                dispatch(registrationEmailAction(e.target.value))
                            }}

                        />
                    </div>

                    {/* Form Submit button */}
                    <div>
                        <input type="submit" />
                    </div>
                </form>

                <div>
                    <Link to={'/login'}>Login</Link>
                </div>
            </div>


        </div>
    )
}
