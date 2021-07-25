import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import nopic from '../../assets/nopic.jpg';
import Header from '../../components/Header';
import {api_key, BASE_URL} from '../../services/api'

import  './style.css';

const Detail = (props) => {

    const movie_id = props.match.params.id
    const [movie, setMovie] = useState({});

    useEffect(()=>{
        try{
            fetch(`${BASE_URL}/movie/${movie_id}?api_key=${api_key}&language=pt-BR`)
            .then(data => data.json())
            .then(data => {
                setMovie({...data})
            })
        }catch(error){
            console.log(error)
        }
    },[movie_id])


    return(
        <div className="detail-page">
            <Header title="Movie Details" />

            <Link to='/' style={{marginLeft:20, color:'#FFF'}}> <ArrowBackIcon style={{ fontSize: 30 }} /> </Link>
            <div className="detail-card" >
                <img className="detail-img" src={ movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : nopic } alt='imageDetail' />
                <div className="details-movie">
                    <div className="infos">
                        <span>{movie.release_date}</span>
                        <span>|</span>
                        <span>{movie.runtime} min</span>
                    </div>
                    <h1>{movie.title}</h1>
                    <p>{movie.overview}</p>
                </div>
            </div>
        </div>
    )
}

export default Detail;