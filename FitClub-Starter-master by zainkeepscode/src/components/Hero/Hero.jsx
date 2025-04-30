import React from 'react'
import "./Hero.css"
import Header from '../Header/Header'
import hero_image from "../../assets/hero_image.png"
import hero_image_back from "../../assets/hero_image_back.png"
import heart from "../../assets/heart.png"
import Calories from "../../assets/calories.png"

import { motion } from "framer-motion"
import NumberCounter from "number-counter"


const Hero = () => {
    const transition = {
        type: "tween",
        duration: 1
    }

    const mobile = window.innerWidth <= 768 ? true : false;
    return (
        <div className="hero" id='home'>
            <div className="blur hero-blur"></div>
            <div className="left-h">
                <Header />

                {/* the best ad */}
                <div className="the-best-ad">
                    {/* <div></div> */}
                    <motion.div
                        initial={{ left: mobile ? "178px": "238px"  }}
                        whileInView={{ left: "8px" }}
                        transition={{ type: "tween", duration: 3 }}
                    >

                    </motion.div>
                    <span>the best fitness club in the town</span>
                </div>

                {/* Hero heading */}
                <div className="hero-text">
                    <div>
                        <span className='stroke-text'>shape </span>
                        <span>your</span>
                    </div>
                    <div>
                        <span>ideal body </span>
                    </div>
                    <div>
                        <span>
                            IN HERE WE WILL HELP YOU TO SHAPED AND BUILD YOUR IDEAL BODY AND LIVE UP YOUR LIFE TO FULLEST
                        </span>
                    </div>
                </div>



                {/* figures */}
                <div className="figures">
                    <div>
                        <span><NumberCounter start={100} end={140} delay="1" preFix="+"></NumberCounter></span>
                        <span>expert coaches</span>
                    </div>
                    <div>
                        <span><NumberCounter start={900} end={978} delay="1" preFix="+"></NumberCounter></span>
                        <span>members joined</span>
                    </div>
                    <div>
                        <span><NumberCounter start={20} end={58} delay="1" preFix="+"></NumberCounter></span>
                        <span>fitness program</span>
                    </div>
                </div>

                {/* Hero Buttons */}

                <div className='hero-buttons'>
                    <button>Get Started</button>
                    <button>Learn More</button>
                </div>


            </div>
            <div className="right-h">

                <button className='join-now-btn'>
                    Join Now
                </button>

                <motion.div
                    className='heart-rate'
                    initial={{ right: "-1rem" }}
                    whileInView={{ right: "4rem" }}
                    transition={transition}
                >
                    <img src={heart} className='heart-img' alt="heart-image" />
                    <span>Heart Rate</span>
                    <span>116 bpm</span>
                </motion.div>

                {/* hero images */}
                <img src={hero_image} alt="" className="hero-image" />
                <motion.img
                    transition={transition}
                    initial={{ left: mobile ? "0rem" : "-5rem" }}
                    whileInView={{ left: mobile ? "0rem" : "-12rem" }}
                    src={hero_image_back} alt="" className="hero-image-back" />

                {/* Calories div */}
                <motion.div
                    initial={{ left: mobile ? "0rem" :  "-26rem" }}
                    whileInView={{ left: mobile ? "0rem" :  "-20rem" }}
                    transition={{ ...transition, duration: "1" }}
                    className="calories">
                    <img src={Calories} alt="" />
                    <div className='calories-text'>
                        <span>Calories Burned</span>
                        <span>220 kcal</span>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Hero
