import React from 'react'
import style from '../CSS/Signup.module.css'
import { Link } from 'react-router-dom'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { loginEmailAction, userLogin } from '../Redux/LoginReducer/action';

export const Login = () => {

    const dispatch = useDispatch();


    const { email } = useSelector((store) => {
        return {
          email: store.LoginReducer.email,
        }
      }, shallowEqual)

      

      console.log(email);

      const userLoginClick = (e)=>{
        e.preventDefault();
        const data = {
            email
        }
        dispatch(userLogin(data))
      }


    return (
        <div className={style.signupContainer}>


            <div>

                {/* Heading */}
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
                            onChange={(e)=>{
                                dispatch(loginEmailAction(e.target.value))
                            }}

                        />
                    </div>

                    {/* Form Submit button */}
                    <div>
                        <input type="submit" />
                    </div>
                </form>

                <div>
                    <Link to={'/'}>SignUp</Link>
                </div>
            </div>


        </div>
    )
}
