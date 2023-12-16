
import React from 'react'
import style from './Onboarding.module.css'



export const ProfessionalExperiencePreDefinedSkillsComp = ({preDefinedSkills, professionalSkills, setProfessionalSkills}) => {
   

    const onSkillHandler = (skill)=>{
        professionalSkills = [...professionalSkills, skill]
        setProfessionalSkills(professionalSkills)
    }

    return (
        <div>
            {
                preDefinedSkills.map((el) => (
                    // <div key={el._id}>
                     <button key={el._id}
                     className={style.button}
                     onClick={() => onSkillHandler(el)}
                     disabled={professionalSkills.some((skill) => skill._id === el._id)}
                    
                     >
                        {el.skill}
                        </button>
                    // </div>
                ))
            }
        </div>
    )
}
