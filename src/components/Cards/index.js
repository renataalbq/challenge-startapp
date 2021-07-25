import React from 'react';
import { Link } from 'react-router-dom';
import nopic from '../../assets/nopic.jpg'
import './style.css'

const Cards = (props) =>{

    return (
        <div className="cards">
            <div className="movie-container">
                <div className="card-title">
                    <p>{props.title}</p>
                </div>
                <div className="movie-list">

                    {props.movies.map(movie => (
                        <div className="movie" key={movie.id}>
                            <Link to={`/detail/${movie.id}`} style={{textDecoration: 'none'}}> 
                                <img 
                                    src={ movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : nopic } 
                                    alt="CardImg"
                                /> 
                                <div className="overlay blur">
                                    <span className="movie-title">{movie.title}</span>
                                </div>
                            </Link>
                            
                        </div>
                    ))}
                </div>
            </div>    
        </div>
    )
}

export default Cards;

