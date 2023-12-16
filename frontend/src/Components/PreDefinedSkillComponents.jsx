import React from 'react'
import { shallowEqual, useSelector } from 'react-redux'

export const PreDefinedSkillComponents = ({ preDefinedSkills, selectedSkills, onSkillClick , skills}) => {

    // 
    
    return (
        <div>
            {
                preDefinedSkills.map((el) => (
                    // <div key={el._id}>
                     <button key={el._id}
                     onClick={() => onSkillClick(el)}
                     disabled={skills.some((skill) => skill._id === el._id)}
                    
                     >
                        {el.skill}
                        </button>
                    // </div>
                ))
            }
        </div>
    )
}
