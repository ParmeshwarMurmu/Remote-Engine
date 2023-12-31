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
import { Loader } from '../../../Components/Loader/Loader'

// ONBOARDING COMPONENT

export const Onboarding = () => {

  const dispatch = useDispatch();
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [professionalExperiences, setProfessionalExperiences] = useState([{ companyName: '', techStack: '', skillsUsed: [], timePeriod: {} }]);
  const [educationalExperiences, setEducatioinalExperiences] = useState([{ degreeName: "", schoolName: "", timePeriod: {} }])
  const token = localStorage.getItem('Remote-Engine-token');
  const [okProfessionalExpLoader, setOkProfessionalExpLoader] = useState(false)
  const [okEducationalExpLoader, setOkEducationalExpLoader] = useState(false)
  const [onboardingSubmitLoader, setOnboardingSubmitLoader] = useState(false)

  //Extracting details from OnboardingReducer
  
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

  

  
    // Extracting preDefinedSkills from PreDefinedSkillsReducer
  const {  preDefinedSkills } = useSelector((store) => {
    return {
      preDefinedSkills: store.PreDefinedSkillsReducer.preDefinedSkills,
    }
  }, shallowEqual)




  //  Function to select all Predefined Skills
  const skilSelectHandler = (skill) => {
    console.log(skill);
    // setSelectedSkills((prevSkills) => [...prevSkills, skill]);
    dispatch(onboardingSkillsAction(skill))
  }

  


  // Function to add professional experience
  const addProfessionalExperience = () => {
    setOkProfessionalExpLoader(false)
    setProfessionalExperiences((prevExperiences) => [...prevExperiences, { companyName: '', techStack: '', skillsUsed: [], timePeriod: {} }]);
  };

  // Function to remove professional experience

  const removeProfessionalExperience = (index) => {
    setOkProfessionalExpLoader(false)
    const newExperiences = [...professionalExperiences];
    newExperiences.splice(index, 1);
    setProfessionalExperiences(newExperiences);
  };


  // Functon To save Professional Experiences
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
      setOkProfessionalExpLoader(true)
      dispatch(onboardingProfessionalExperienceAction(professionalExperiences))
    }
  }

  // function to save Educational Experiences

  const saveEducationalExperiences = (e)=>{
    
    e.preventDefault()
    setOkEducationalExpLoader(true)
    dispatch(onboardingEducationalExperienceAction(educationalExperiences))
  }


  // Function to submitOnboardingForm (when user Sumbits the form)
  const submitOnboardingForm = async(e)=>{
    e.preventDefault()
    setOnboardingSubmitLoader(true)
    // creating data
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

    await dispatch(completeOnboarding(data, token)) //Dispatching it to completeOnboarding with the data
    setOnboardingSubmitLoader(false)
    dispatch(onboardingResetAction())
    setProfessionalExperiences([{ companyName: '', techStack: '', skillsUsed: [], timePeriod: {} }])
    setEducatioinalExperiences([{ degreeName: "", schoolName: "", timePeriod: {} }])
  }

 



  useEffect(() => {
    dispatch(getPreDefinedSkills())

  }, [])
  

  
  // Function to logout user(when user Clicks on logout Button)
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
              <button disabled={okProfessionalExpLoader} className={style.OKbutton} onClick={(e)=>{saveProfessionalExperiences(e)}}>OK</button>
            </div>

          </div>


          {/* Educational Experience*/}


          <div>
            <label><h3>Educational Experience:</h3></label>
            <EducationalExperienceComp
            educationalExperiences={educationalExperiences}
            setEducatioinalExperiences={setEducatioinalExperiences}
            setOkEducationalExpLoader = {setOkEducationalExpLoader}
             />
          </div>


            <div className={style.noteContiner}>
              <label> NOTE: *** If all Educational Experience information are correct Clik OK</label>
              <button disabled={okEducationalExpLoader} className={style.OKbutton}  onClick={(e)=>{saveEducationalExperiences(e)}}>OK</button>
            </div>
          

          <div>
            {
              onboardingSubmitLoader && <Loader />
            }
          </div>

          <div>
          <input type="submit" value='submit' disabled={onboardingSubmitLoader} />
          </div>




        </form>

        






      </div>



    </div>



  )
}
