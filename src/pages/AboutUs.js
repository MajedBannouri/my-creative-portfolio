import React from 'react'
import AboutUsSection from '../components/AboutSection'
import FaqSection from '../components/FaqSection'
import ServicesSection from '../components/ServicesSection'
import {motion} from 'framer-motion'
import {pageAnimation} from '../animation'
const AboutUs = () => {
    return (
        <motion.div variants={pageAnimation} exit="exit" initial="hidden" animate="show">
        <AboutUsSection />
        <ServicesSection/>
        <FaqSection></FaqSection>
        </motion.div>

    )
}

export default AboutUs
