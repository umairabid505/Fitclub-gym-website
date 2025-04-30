import React from 'react'
import "./Reasons.css"

const Reasons = () => {
    return (
        <div className='reasons' id='reasons'>
            <div className="gym-images">
                <img src="images/image1.png" className='image1' alt="" />
                <div className="collection-images">
                    <img src="images/image2.png" className='image2' alt="" />
                    <div>
                    <img src="images/image3.png" className='image3' alt="" />
                    <img src="images/image4.png" className='image4' alt="" />
                    </div>
                </div>
            </div>
            <div className='reasons-text'>
                <span>Some Reasons</span>
                <p><span className='stroke-text'>Why</span> choose us?</p>
                <div className='reasons-points'>
                <p className='reasons-point'><img className='tick-image' src="images/tick.png" alt="" /><span>over 140+ expert coachs</span></p>
                <p className='reasons-point'><img className='tick-image' src="images/tick.png" alt="" /><span>train smarter and faster than before</span></p>
                <p className='reasons-point'><img className='tick-image' src="images/tick.png" alt="" /><span>1 free program for new member</span></p>
                <p className='reasons-point'><img className='tick-image' src="images/tick.png" alt="" /><span>reliable partners</span></p>
                </div>
                <p>our partners</p>
                <div>
                    <img src="images/nb.png" alt="" />
                    <img src="images/adidas.png" alt="" />
                    <img src="images/nike.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Reasons
