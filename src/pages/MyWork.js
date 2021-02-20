import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
// Images
import athlete from '../img/athlete-small.png'
import theracer from '../img/theracer-small.png'
import goodtimes from '../img/goodtimes-small.png'
import {motion} from 'framer-motion'
import {pageAnimation} from '../animation'
const MyWork = () => {
    return (
        <Work variants={pageAnimation} exit="exit"  initial="hidden" animate="show">
            <Movie>
                <h2>The Athlete</h2>
                <div className="line"></div>
                <Link>
                    <img src={athlete} alt="athlete"></img>
                </Link>
            </Movie>
            <Movie>
                <h2>The Racer</h2>
                <div className="line"></div>
                <Link>
                    <img src={theracer} alt="theracer"></img>
                </Link>
            </Movie>
            <Movie>
                <h2>Good Times</h2>
                <div className="line"></div>
                <Link>
                    <img src={goodtimes} alt="goodtimes"></img>
                </Link>
            </Movie>
        </Work>
    )
}

const Work = styled(motion.div)`
    min-height:100vh;
    overflow:hidden;
    padding: 5rem 10rem;
    h2{
        padding: 1rem 0rem;

    }
`
const Movie = styled.div`
    padding-bottom: 10rem;
    .line{
        height: 0.5rem;
        background: #cccccc;
        margin-bottom: 3rem;
    }
    img{
        width: 100%;
        height: 70%;
        object-fit: cover;
    }

`

export default MyWork
