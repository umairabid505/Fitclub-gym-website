import React from 'react'
import "./Program.css"
import {programsData} from "../../data/programsData"
import RightArrow from "../../assets/rightArrow.png"


const Program = () => {
  return (
    <div className='programs' id='programs'>
        <div className="programs-header">
            <span className='stroke-text'>Explore Our</span>
            <span>Programs</span>
            <span className='stroke-text'>To Shape You</span>
        </div>
        <div className="program-categories">
            {programsData.map((programData,ind) => {
                // console.log(programData);
                
                return <div className="category" key={ind}>
                    {programData.image}
                    <span>
                        {programData.heading}
                    </span>
                    <span>
                        {programData.details}
                    </span>
                    <div className="join-now">
                        <span>
                            Join Now
                        </span>
                        <img src={RightArrow} alt="" />
                    </div>
                </div>
            })}
        </div>
    </div>
  )
}

export default Program
