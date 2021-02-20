import React,{useState, useEffect} from 'react'
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'
import {MovieState} from '../movieState'
const MovieDetail = () => {
    const history = useHistory()
    const url = history.location.pathname
    const [movies, setMovies] = useState(MovieState)
    const [movie, setMovie] = useState(null)
    useEffect(()=>{
        const currentMovie = movies.filter((stateMovie) => stateMovie.url === url)
        setMovie(currentMovie[0])
    }, [movies,url])
    
    return (
        <>
        {movie && (
            <Details>
                <Headline>
                    <h2>{movie.title}</h2>
                    <img src={movie.mainImg}  alt="movie"/>
                </Headline>
                
            </Details>
        ) }

        </>
    )
}

const Details = styled.div`
    color: white;
`
const Headline = styled.div`
    min-height: 90vh;
    padding-top: 20vh;
    position: relative;
    h2{
        position: absolute; 
        top: 10%;
        left: 50%;
        transform: translate(-50%, -10%)
    }
    img{
        width:100%;
        height:70vh;
        object-fit: cover;

    }
`
export default MovieDetail
