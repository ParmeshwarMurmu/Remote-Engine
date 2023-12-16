import React, { useState } from 'react'

import { shallowEqual, useSelector } from 'react-redux';
import { ProfessionalExperiencePreDefinedSkillsComp } from './ProfessionalExperiencePreDefinedSkillsComp';

export const ProfessionalExperienceComp = ({experience, onExperienceChange}) => {

  const [professionalSkills, setProfessionalSkills] = useState([])

    const experienceHandler = (e)=>{
        const {name, value} = e.target;
        const updateExperience = {...experience, [`${name}`]: value}
        console.log("update", updateExperience);
        onExperienceChange(updateExperience);
       
    }

    const { preDefinedSkills } = useSelector((store) => {
      return {
        preDefinedSkills: store.PreDefinedSkillsReducer.preDefinedSkills,
        
      }
    }, shallowEqual)

    console.log("professional Skills", professionalSkills);

  return (
    <div>
        
        <div>
            {/* <label><h3>Proffessional Experience:</h3></label> */}

            <div>
            <label>Company Name:</label>
            <input type='text' placeholder='Company Name'
             value={experience.companyName}
             name='companyName'
             onChange={experienceHandler}
             />
            </div>


            <div>
            <label>Tech Stack:</label>
            <input type='text' placeholder='Tech Stack'
            name='techStack'
            onChange={experienceHandler}
             />
            </div>

            <div>

            <label>Skills Used:</label>

            <ProfessionalExperiencePreDefinedSkillsComp
            preDefinedSkills = {preDefinedSkills}
            professionalSkills= {professionalSkills}
            setProfessionalSkills = {setProfessionalSkills}

             />


            <input type='text' placeholder='Skills Used'
            value={professionalSkills.map((el) => el.skill)}
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
