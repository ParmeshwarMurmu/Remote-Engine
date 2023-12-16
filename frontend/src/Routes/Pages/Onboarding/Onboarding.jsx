import React, { useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getUserDetails } from '../../../Redux/UserDetailsReducer/action';
import { USER_ID } from '../../../Variables/AllVariables';
import { getPreDefinedSkills } from '../../../Redux/PreDefinedSkillsReducer/action';
import { PreDefinedSkillComponents } from '../../../Components/PreDefinedSkillComponents';
import { onboardingEmailAction, onboardingFirstNameAction, onboardingLastNameAction, onboardingPhoneNumberAction, onboardingSkillsAction } from '../../../Redux/OnboardingReducer/action';


// ONBOARDING COMPONENT

export const Onboarding = () => {

  const dispatch = useDispatch();
  const [selectedSkills, setSelectedSkills] = useState([]);

  const { firstName, lastName, phoneNumber, email, skills, professionalExperience, educationalExperience } = useSelector((store) => {
    return {
      firstName: store.OnboardingReducer.firstName,
      lastName: store.OnboardingReducer.lastName,
      phoneNumber: store.OnboardingReducer.phoneNumber,
      email: store.OnboardingReducer.email,
      skills: store.OnboardingReducer.skills,
      professionalExperience: store.OnboardingReducer.professionalExperience,
      educationalExperience: store.OnboardingReducer.educationalExperience,
    }
  }, shallowEqual)

  const { isLoading, userDetail, isData } = useSelector((store) => {
    return {

      isLoading: store.UserDetailsReducer.isLoading,
      userDetail: store.UserDetailsReducer.userDetail,
      isData: store.UserDetailsReducer.isData,
    }
  }, shallowEqual)

  console.log(userDetail, "serDetail");
  console.log(isData, "isData");

  const { preDefinedSkillsLoading, preDefinedSkillsError, preDefinedSkills} = useSelector((store) => {
    return {

      preDefinedSkillsLoading: store.PreDefinedSkillsReducer.preDefinedSkillsLoading,
      preDefinedSkills: store.PreDefinedSkillsReducer.preDefinedSkills,
      preDefinedSkillsError: store.PreDefinedSkillsReducer.preDefinedSkillsError,
    }
  }, shallowEqual)



  console.log(USER_ID, "USER_ID");

  const skilSelectHandler = (skill)=>{
    console.log(skill);
      // setSelectedSkills((prevSkills) => [...prevSkills, skill]);
      dispatch(onboardingSkillsAction(skill))
  }

  

  useEffect(() => {
    // dispatch(getUserDetails(USER_ID))
    dispatch(getPreDefinedSkills())

  }, [])

  console.log("preDefinedSkills", preDefinedSkills);
  console.log("Skills", skills);

  return (
    <div>
      
        

          <h1>Onboarding Form</h1>

          <div>

            <div>
              <label>First Name:</label>
              <input type="text" value={firstName} onChange={(e) => { dispatch(onboardingFirstNameAction(e.target.value)) }} />
            </div>


            <div>
              <label>Last Name:</label>
              <input type="text" value={lastName} onChange={(e) => { dispatch(onboardingLastNameAction(e.target.value))  }} />
            </div>

            <div>
              <label>Phone Number:</label>
              <input type="text" value={phoneNumber} onChange={(e) => {dispatch(onboardingPhoneNumberAction(e.target.value)) }} />
            </div>


            <div>
              <label>Email:</label>
              <input type="text" placeholder='Email' value={email}
               onChange={(e) => { dispatch(onboardingEmailAction(e.target.value))  }}
               />
            </div>

            
            <div>
            <label>Skill:</label>
             <PreDefinedSkillComponents
              preDefinedSkills={preDefinedSkills}
              selectedSkills={selectedSkills}
              onSkillClick={skilSelectHandler}
              skills={skills}

               />


             <input  type="text" placeholder="Add Skills" 
            //  onChange={(e)=>{dispatch(onboardingSkillsAction(selectedSkills))}}
              value={skills.map((el)=> el.skill)}

                   />

            </div>



            <div>

            <label>Professional Experience:</label>

            <div>
            <label>Company Name:</label>

             <input  type="text" placeholder="Comapny Name" 
            //  onChange={(e)=>{dispatch(onboardingSkillsAction(selectedSkills))}}
              value={skills.map((el)=> el.skill)}

                   />

            </div>

            </div>



          </div>
        </div>
      
   
  )
}
