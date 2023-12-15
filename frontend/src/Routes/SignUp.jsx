import React from 'react'
import style from '../CSS/Signup.module.css'


// SIGN UP COMPONENT

export const SignUp = () => {


    return (
        <div className={style.signupContainer}>


            <div>

                {/* Heading */}
                <h1>Registration</h1>


                <form>

                    <div>
                        <label> Email</label>
                    </div>

                    {/* Email Input */}
                    <div>
                        <input type='email'
                            placeholder='Email'
                            required

                        />
                    </div>

                    {/* Form Submit button */}
                    <div>
                        <input type="submit" />
                    </div>
                </form>
            </div>


        </div>
    )
}
