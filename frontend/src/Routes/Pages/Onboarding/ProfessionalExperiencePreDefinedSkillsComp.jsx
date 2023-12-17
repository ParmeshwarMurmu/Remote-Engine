
import React from 'react'
import style from './Onboarding.module.css'



export const ProfessionalExperiencePreDefinedSkillsComp = ({preDefinedSkills, professionalSkills, setProfessionalSkills, experience, onExperienceChange}) => {
  
    


    const onSkillHandler = (skill, name)=>{
        // const newSkillsUsed = [...experience, [`${name}`] : [...experience.skillsUsed, skill]]
        // // setProfessionalSkills(newExperience)
        // onExperienceChange(newSkillsUsed)
        const newSkillsUsed = {
            ...experience,
            skillsUsed: [...experience.skillsUsed,  skill ]
        };

         onExperienceChange(newSkillsUsed)

        // setProfessionalSkills(newExperience)
    }

    return (
        <div>
            {
                preDefinedSkills.map((el) => (
                    // <div key={el._id}>
                     <button key={el._id}
                     className={style.button}
                     onClick={() => onSkillHandler(el, "skillsUsed")}
                     disabled={experience.skillsUsed.some((skill) => skill._id === el._id)}
                    
                     >
                        {el.skill}
                        </button>
                    // </div>
                ))
            }
        </div>
    )
}
