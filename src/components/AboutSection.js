import React from 'react'
import home1 from '../img/home1.png'
import {motion} from 'framer-motion'
import {About, Description, Image, Hide} from '../styles'
const AboutSection = () => {
   
    return (
        <About>
            <Description>
                <motion.div className="title">
                    <Hide>
                        <motion.h2 >We work to make</motion.h2>
                    </Hide>
                    
                    <Hide>
                        <motion.h2 >your <span>dreams</span></motion.h2>
                    </Hide>
                    
                    <Hide>
                        <motion.h2 >come true</motion.h2>
                    </Hide>
                </motion.div>
                <p> Contact us for any collaborations </p>
                <button>Contact Us</button>
            
            </Description>
            <Image>
                <img src={home1} alt="coding"/>
            </Image>

        </About>
    )
}

// styled component
export default AboutSection
