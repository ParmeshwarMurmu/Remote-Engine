import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { onboardingEducationalExperienceAction } from '../../../Redux/OnboardingReducer/action';
import style from './Onboarding.module.css'
export const EducationalExperienceComp = ({educationalExperiences,setOkEducationalExpLoader, setEducatioinalExperiences}) => {
    


    // Function to update Educational Experiences
    const educationalExperienceHandler = (e, index) => {
        const { name, value } = e.target;
        console.log(name, value, index);
        if (name === "startDate" || name === "endDate") {
            const updateExperience = [...educationalExperiences]
            updateExperience[index].timePeriod = {
                ...updateExperience[index].timePeriod,
                [`${name}`]: value,
            };

            setEducatioinalExperiences(updateExperience)
         

        }
        else {

            const updateExperience = [...educationalExperiences]
            updateExperience[index] = {
                ...updateExperience[index],
                [`${name}`]: value
            }
            setEducatioinalExperiences(updateExperience)
            


        }


    }

    

    // Function to remove Educational Experiences
    const removeEducationalExperience = (index) => {
        setOkEducationalExpLoader(false)
        const newEducationalExperiences = [...educationalExperiences];
        newEducationalExperiences.splice(index, 1);
        setEducatioinalExperiences(newEducationalExperiences)
        

    }

    // Function to Add Educational Experiences
    const addEducationalExperience = () => {
        setOkEducationalExpLoader(false)
        setEducatioinalExperiences((prevExperiences) => [...prevExperiences, { degreeName: "", schoolName: "", timePeriod: {} }]);
       
    }

    return (
        <div>
            {
                educationalExperiences.map((experience, index) => (
                    <div key={index} className={style.EducationalExperience}>

                        <div>
                            <label>Degree Name:</label>
                            <input type='text' placeholder='Degree Name'
                                value={experience.degreeName}
                                required
                                name='degreeName'
                                onChange={(e) => { educationalExperienceHandler(e, index) }}
                            />
                        </div>

                        <div>
                            <label>School Name:</label>
                            <input type='text' placeholder='School Name'
                                value={experience.schoolName}
                                required
                                name='schoolName'
                                onChange={(e) => { educationalExperienceHandler(e, index) }}
                            />
                        </div>


                        <div>
                            <label>Time Period:</label>


                            <label >Start</label>
                            <input type='date' placeholder='School Name'
                                name='startDate' 
                                onChange={(e) => { educationalExperienceHandler(e, index) }}
                            />


                            <label >End</label>
                            <input type='date' placeholder='School Name'
                                name='endDate'
                                onChange={(e) => { educationalExperienceHandler(e, index) }}
                            />


                        </div>



                        <button type="button" onClick={() => removeEducationalExperience(index)}>
                            Remove Educational Experience
                        </button>


                    </div>
                ))
            }


            <div>
                <button type="button" onClick={addEducationalExperience}>
                    Add Educational Experience
                </button>
            </div>
        </div>
    )
}
