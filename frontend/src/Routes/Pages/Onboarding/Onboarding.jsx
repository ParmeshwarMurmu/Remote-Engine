import React, { useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getUserDetails } from '../../../Redux/UserDetailsReducer/action';
import { USER_ID } from '../../../Variables/AllVariables';
import { getPreDefinedSkills } from '../../../Redux/PreDefinedSkillsReducer/action';
import { PreDefinedSkillComponents } from '../../../Components/PreDefinedSkillComponents';
import { onboardingEmailAction, onboardingFirstNameAction, onboardingLastNameAction, onboardingPhoneNumberAction, onboardingSkillsAction } from '../../../Redux/OnboardingReducer/action';
import style from './Onboarding.module.css'
import { ProfessionalExperienceComp } from './ProfessionalExperienceComp';

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

  // console.log(userDetail, "serDetail");
  // console.log(isData, "isData");

  const { preDefinedSkillsLoading, preDefinedSkillsError, preDefinedSkills } = useSelector((store) => {
    return {

      preDefinedSkillsLoading: store.PreDefinedSkillsReducer.preDefinedSkillsLoading,
      preDefinedSkills: store.PreDefinedSkillsReducer.preDefinedSkills,
      preDefinedSkillsError: store.PreDefinedSkillsReducer.preDefinedSkillsError,
    }
  }, shallowEqual)



  // console.log(USER_ID, "USER_ID");

  const skilSelectHandler = (skill) => {
    console.log(skill);
    // setSelectedSkills((prevSkills) => [...prevSkills, skill]);
    dispatch(onboardingSkillsAction(skill))
  }

  const [professionalExperiences, setProfessionalExperiences] = useState([{ companyName: '', techStack: '', skillsUsed: [], startDate: '', endDate: "" }]);
  // const [educationalExperiences, setEducationalExperiences] = useState([]);

  // Function to add professional experience
  const addProfessionalExperience = () => {
    setProfessionalExperiences((prevExperiences) => [...prevExperiences, { companyName: '', techStack: '', skillsUsed: [], startDate: '', endDate: ""}]);
  };

  // Function to remove professional experience
  const removeProfessionalExperience = (index) => {
    const newExperiences = [...professionalExperiences];
    newExperiences.splice(index, 1);
    setProfessionalExperiences(newExperiences);
  };

  console.log("professionalExperience", professionalExperiences);



  useEffect(() => {
    // dispatch(getUserDetails(USER_ID))
    dispatch(getPreDefinedSkills())

  }, [])

  // console.log("preDefinedSkills", preDefinedSkills);
  console.log("Skills", skills);

  return (
    <div>

     <div>

    

      <h1>Onboarding Form</h1>

      <div className={style.onboardingContainer}>

        <div>
          <label>First Name:</label>
          <input type="text" value={firstName} onChange={(e) => { dispatch(onboardingFirstNameAction(e.target.value)) }} />
        </div>


        <div>
          <label>Last Name:</label>
          <input type="text" value={lastName} onChange={(e) => { dispatch(onboardingLastNameAction(e.target.value)) }} />
        </div>

        <div>
          <label>Phone Number:</label>
          <input type="text" value={phoneNumber} onChange={(e) => { dispatch(onboardingPhoneNumberAction(e.target.value)) }} />
        </div>


        <div>
          <label>Email:</label>
          <input type="text" placeholder='Email' value={email}
            onChange={(e) => { dispatch(onboardingEmailAction(e.target.value)) }}
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


          <input type="text" placeholder="Add Skills"
            //  onChange={(e)=>{dispatch(onboardingSkillsAction(selectedSkills))}}
            value={skills.map((el) => el.skill)}

          />

        </div>




        {/* Professional Experience */}

        <div>
          <label><h3>Professional Experience:</h3></label>
          {professionalExperiences.map((experience, index) => (
            <div key={index}>

              <ProfessionalExperienceComp experience={experience}
                onExperienceChange={(updatedExperience) => {
                  const newExperiences = [...professionalExperiences];
                  newExperiences[index] = updatedExperience;
                  setProfessionalExperiences(newExperiences);
                }}
              />


              {/* ... (similar inputs for other professional experience fields) */}
              <button type="button" onClick={() => removeProfessionalExperience(index)}>
                Remove Professional Experience
              </button>
            </div>
          ))}


          <div>
            <button type="button" onClick={addProfessionalExperience}>
              Add Professional Experience
            </button>
          </div>

        </div>


      </div>


      </div>



    </div>



  )
}
