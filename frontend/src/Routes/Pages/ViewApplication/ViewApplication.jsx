import React, { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getViewAllApplicationData } from '../../../Redux/ViewAllApplicationReducer/action'
import style from './ViewApplication.module.css'
export const ViewApplication = () => {

  const dispatch = useDispatch()


   // Extracting details from ViewAllApplicationReducer

  const { isLoading, allApplication, isError, isData } = useSelector((store) => {
    return {
      isLoading: store.ViewAllApplicationReducer.isLoading,
      allApplication: store.ViewAllApplicationReducer.allApplication,
      isError: store.ViewAllApplicationReducer.isError,
      isData: store.ViewAllApplicationReducer.isData,

    }
  }, shallowEqual)

  useEffect(() => {
    dispatch(getViewAllApplicationData())
  }, [])

  console.log(allApplication)


  return (
    <div>
       <h1>All Application</h1>
    
    <div className={style.view}>

     

      <div>


        {
          isLoading === true ? <h3>Loading Applications</h3> : <div>
            {
              allApplication.map((el) => (
                <div>
                  <p>{`${el.firstName} ${el.lastName}`}</p>
                  <p>{`${el.phoneNumber}`}</p>
                  <p>{`${el.email}`}</p>
                  <h3>Skills:</h3>
                  {
                    el.skills.map((skil) => (
                      <p>{`${skil._id.skill}`}</p>

                    ))
                  }

                  <h3>Proffessional Experience</h3>
                  {
                    el.professionalExperience.map((Pe) => (
                      <div>
                        <p>{`${Pe.companyName}`}</p>
                        <p>{`${Pe.techStack}`}</p>
                        <div>
                          <p>Skill Used: </p>
                          {
                            Pe.skillsUsed.map((skil) => (
                              <p>{`${skil.skill}`}</p>
                            ))
                          }
                        </div>
                        <p>Time Period: {`Start: ${Pe.timePeriod.startDate}  End: ${Pe.timePeriod.endDate}`}</p>
                      </div>
                    ))
                  }



                  <h3>Educational Experience</h3>
                  {
                    el.educationalExperience.map((Ex) => (
                      <div>
                        <p>{`${Ex.degreeName}`}</p>
                        <p>{`${Ex.schoolName}`}</p>
                        <p>Time Period: {`Start: ${Ex.timePeriod.startDate}  End: ${Ex.timePeriod.endDate}`}</p>
                      </div>
                    ))
                  }
                </div>
              ))
            }
          </div>
        }
      </div>
    </div>
    </div>
  )
}
