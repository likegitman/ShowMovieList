import React from 'react';
import { Link } from 'react-router-dom';

const IMG_BASE_URL="https://image.tmdb.org/t/p/w1280/";

function Movie({id , title, img, star }) {
    return (
        <div className='movie-container'>
            <img src={IMG_BASE_URL + img} alt="영화 포스터" />
            <div className='movie-info'>
                <Link to={`/${id}`}><h4>{title}</h4></Link>
                <span>{star}</span>
            </div>
        </div>
    );
}

export default Movie;