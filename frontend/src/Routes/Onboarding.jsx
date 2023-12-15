import React from 'react'


// ONBOARDING COMPONENT

export const Onboarding = () => {

  return (
    <div>
         <h1>Onboarding Form</h1>

         <form>
         <label>First Name:</label>
            <input type="text" value={firstName} onChange={(e) =>{} } />

            <label>Last Name:</label>
            <input type="text" value={lastName} onChange={(e) =>{} }/>

            <label>Phone Number:</label>
            <input type="text" value={phoneNumber} onChange={(e) => {}} />

            <label>Email:</label>
            <input type="text" value={email} onChange={(e) =>{}} />

         </form>
    </div>
  )
}
