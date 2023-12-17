import React, { useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getUserDetails } from '../../../Redux/UserDetailsReducer/action';
import { USER_ID } from '../../../Variables/AllVariables';
import { getPreDefinedSkills } from '../../../Redux/PreDefinedSkillsReducer/action';
import { PreDefinedSkillComponents } from '../../../Components/PreDefinedSkillComponents';
import { ONBOARDING_RESET, completeOnboarding, onboardingEducationalExperienceAction, onboardingEmailAction, onboardingFirstNameAction, onboardingLastNameAction, onboardingPhoneNumberAction, onboardingProfessionalExperienceAction, onboardingResetAction, onboardingSkillsAction } from '../../../Redux/OnboardingReducer/action';
import style from './Onboarding.module.css'
import { ProfessionalExperienceComp } from './ProfessionalExperienceComp';
import { EducationalExperienceComp } from './EducationalExperienceComp';
import { isAuthEmailAction } from '../../../Redux/IsAuthReducer/action';

// ONBOARDING COMPONENT

export const Onboarding = () => {

  const dispatch = useDispatch();
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [professionalExperiences, setProfessionalExperiences] = useState([{ companyName: '', techStack: '', skillsUsed: [], timePeriod: {} }]);
  const [educationalExperiences, setEducatioinalExperiences] = useState([{ degreeName: "", schoolName: "", timePeriod: {} }])

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

  const {  preDefinedSkills } = useSelector((store) => {
    return {
      preDefinedSkills: store.PreDefinedSkillsReducer.preDefinedSkills,
    }
  }, shallowEqual)



  // console.log(USER_ID, "USER_ID");

  const skilSelectHandler = (skill) => {
    console.log(skill);
    // setSelectedSkills((prevSkills) => [...prevSkills, skill]);
    dispatch(onboardingSkillsAction(skill))
  }

  


  // Function to add professional experience
  const addProfessionalExperience = () => {
    setProfessionalExperiences((prevExperiences) => [...prevExperiences, { companyName: '', techStack: '', skillsUsed: [], timePeriod: {} }]);
  };

  // Function to remove professional experience

  const removeProfessionalExperience = (index) => {
    const newExperiences = [...professionalExperiences];
    newExperiences.splice(index, 1);
    setProfessionalExperiences(newExperiences);
  };

  const saveProfessionalExperiences = (e)=>{
    e.preventDefault()
    let flag = 0;
    for(let i=0; i<professionalExperiences.length; i++){
      if(professionalExperiences[i].skillsUsed.length === 0 && flag===0){
        flag=1
        alert('Please select at least One Skill')
      }

    }

    if(flag === 0){
      dispatch(onboardingProfessionalExperienceAction(professionalExperiences))
    }
  }

  const saveEducationalExperiences = (e)=>{
    e.preventDefault()
    dispatch(onboardingEducationalExperienceAction(educationalExperiences))
  }

  const submitOnboardingForm = (e)=>{
    e.preventDefault()
    const data = {
      firstName,
      lastName,
      phoneNumber,
      email,
      skills,
      professionalExperience,
      educationalExperience
    }

    console.log(data);

    dispatch(completeOnboarding(data))
    dispatch(onboardingResetAction())
    setProfessionalExperiences([{ companyName: '', techStack: '', skillsUsed: [], timePeriod: {} }])
    setEducatioinalExperiences([{ degreeName: "", schoolName: "", timePeriod: {} }])
  }

 



  useEffect(() => {
    // dispatch(getUserDetails(USER_ID))
    dispatch(getPreDefinedSkills())

  }, [])
  

  // console.log("ProfessionlExperienceD", professionalExperience)
  // console.log("skills", skills)

  const logoutHandler = ()=>{
    localStorage.removeItem('Remote-Engine-token')
    localStorage.removeItem('Remote-Engine-userId')
    dispatch(isAuthEmailAction(false))
  }
  

  

  return (
    <div className={style.onboardingParentContainer}>

      <div>

        <div className={style.logoutBtn}>
          <button onClick={logoutHandler}>Logout</button>
        </div>



        <h1>Onboarding Form</h1>

        <form onSubmit={submitOnboardingForm} className={style.onboardingContainer}>

          <div>
            <label>First Name:</label>
            <input type="text" required value={firstName} onChange={(e) => { dispatch(onboardingFirstNameAction(e.target.value)) }} />
          </div>


          <div>
            <label>Last Name:</label>
            <input type="text" required value={lastName} onChange={(e) => { dispatch(onboardingLastNameAction(e.target.value)) }} />
          </div>

          <div>
            <label>Phone Number:</label>
            <input type="text" required value={phoneNumber} onChange={(e) => { dispatch(onboardingPhoneNumberAction(e.target.value)) }} />
          </div>


          <div>
            <label>Email:</label>
            <input type="text" required placeholder='Email' value={email}
              onChange={(e) => { dispatch(onboardingEmailAction(e.target.value)) }}
            />
          </div>


          <div>
            <label>Skill:(select Below Skills)</label>
            <PreDefinedSkillComponents
              preDefinedSkills={preDefinedSkills}
              selectedSkills={selectedSkills}
              onSkillClick={skilSelectHandler}
              skills={skills}

            />


            <input type="text" required placeholder="Add Skills"
              //  onChange={(e)=>{dispatch(onboardingSkillsAction(selectedSkills))}}
              value={skills.map((el) => el.skill)}

            />

          </div>




          {/* Professional Experience */}

          <div>
            <label><h3>Professional Experience:</h3></label>
            {professionalExperiences.map((experience, index) => (
              <div key={index} className={style.professionalExperience}>

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

            <div className={style.noteContiner}>
              <label> NOTE:*** If all Professional Experience information are correct Clik OK</label>
              <button className={style.OKbutton} onClick={(e)=>{saveProfessionalExperiences(e)}}>OK</button>
            </div>

          </div>


          {/* Educational Experience*/}


          <div>
            <label><h3>Educational Experience:</h3></label>
            <EducationalExperienceComp
            educationalExperiences={educationalExperiences}
            setEducatioinalExperiences={setEducatioinalExperiences}
             />
          </div>


            <div className={style.noteContiner}>
              <label> NOTE: *** If all Educational Experience information are correct Clik OK</label>
              <button className={style.OKbutton}  onClick={(e)=>{saveEducationalExperiences(e)}}>OK</button>
            </div>


          <div>
          <input type="submit" value='submit'/>
          </div>




        </form>

        






      </div>



    </div>



  )
}
