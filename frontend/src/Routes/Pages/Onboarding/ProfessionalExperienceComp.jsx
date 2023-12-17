import React, { useState } from 'react'

import { shallowEqual, useSelector } from 'react-redux';
import { ProfessionalExperiencePreDefinedSkillsComp } from './ProfessionalExperiencePreDefinedSkillsComp';

export const ProfessionalExperienceComp = ({experience, onExperienceChange}) => {

  const [professionalSkills, setProfessionalSkills] = useState([]) // skillused: [{}, {}]

    const experienceHandler = (e)=>{
        const {name, value} = e.target;
        if(name === "startDate" || name === "endDate"){
          const timePeriod = {
            ...experience.timePeriod,
            [`${name}`] : value
          }
          const updateExperience = {...experience, timePeriod}
          onExperienceChange(updateExperience);

        }
        else{

          const updateExperience = {...experience, [`${name}`]: value}
          onExperienceChange(updateExperience);
        }
       
    }

    const { preDefinedSkills } = useSelector((store) => {
      return {
        preDefinedSkills: store.PreDefinedSkillsReducer.preDefinedSkills,
        
      }
    }, shallowEqual)

   

  return (
    <div>
        
        <div>
            {/* <label><h3>Proffessional Experience:</h3></label> */}

            <div>
            <label>Company Name:</label>
            <input type='text' required placeholder='Company Name'
             value={experience.companyName}
             name='companyName'
             onChange={experienceHandler}
             />
            </div>


            <div>
            <label>Tech Stack:</label>
            <input type='text' required placeholder='Tech Stack'
            name='techStack'
            value={experience.techStack}
            onChange={experienceHandler}
             />
            </div>

            <div>

            <label>Skills Used:</label>

            <ProfessionalExperiencePreDefinedSkillsComp
            preDefinedSkills = {preDefinedSkills} //already defind skills
            professionalSkills= {professionalSkills} // state to handle skillUsed (array)
            setProfessionalSkills = {setProfessionalSkills} // updater functon to set SkilUsed
            experience={experience} // how many times i have too create 
            onExperienceChange = {onExperienceChange} // final professional experience data

             />


            <input type='text' required placeholder='Skills Used'
            value={experience.skillsUsed.map((el) => el.skill)}
             />
            </div>




            <div>
            <label>Time Period:</label>
            
            <label>Start:</label>
            <input type='date'
            name='startDate' 
            onChange={experienceHandler}
             />

            <label>End:</label>
            <input type='date'
            name='endDate'
            onChange={experienceHandler}
             />

            </div>
            
        </div>
    </div>
  )
}
