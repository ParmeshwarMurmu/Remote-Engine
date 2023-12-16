import React from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { addSkillsAction, addUserSkills } from '../../../Redux/SkillsReducer/action';

export const Skill = () => {

    const dispatch = useDispatch();


    const { skill } = useSelector((store) => {
        return {
            skill: store.SkillsReducer.skill,
        }
    }, shallowEqual)

    const AddSkillHandler = () => {
        dispatch(addUserSkills({ skill }))
    }


    return (
        <div>
            <input type="text"
                value={skill}
                placeholder='skill'
                onChange={(e) => { dispatch(addSkillsAction(e.target.value)) }}
            />

            <button onClick={AddSkillHandler}>Add Skill</button>
        </div>
    )
}
