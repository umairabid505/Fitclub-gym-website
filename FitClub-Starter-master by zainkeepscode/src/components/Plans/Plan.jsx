import React from 'react'
import "./Plan.css"
import { plansData } from "../../data/plansData"
import whiteTick from "../../assets/whiteTick.png"


const Plan = () => {
    return (
        <div className='plans-container' id='plans'>
            <div className="programs-header" id='plans-header'>
                <span className='stroke-text'>READY TO START</span>
                <span>YOUR JOURNEY</span>
                <span className='stroke-text'>NOW WITH US</span>
            </div>

            <div className="blur plan-blur-1">

            </div>
            <div className="blur plan-blur-2"></div>

            {/* plans card */}
            <div className="plans">
                {
                    plansData.map((plan, ind) => {
                        return <div className="plan" key={ind}>
                            {plan.icon}
                            <span>{plan.name}</span>
                            <span>$ {plan.price}</span>

                            <div className="features">
                                {
                                    plan.features.map((feature, ind) => {
                                        return <div className="feature" key={ind}>
                                            <img src={whiteTick} alt="" />
                                            <span>{feature}</span>
                                        </div>
                                    })
                                }
                            </div>
                            <div className='plans-footer' style={{verticalAlign:"center"}}>
                                <span>See more benefits <span style={{fontSize:"20px"}}> &#129062;</span></span>
                                <button className='btn'>Join Now</button>
                            </div>
                        </div>
                        
                    })
                }
            </div>
        </div>
    )
}

export default Plan
