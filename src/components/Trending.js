import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieItem from './MovieItem';

const Trending = () => {
    const [moviesTranding, setMoviesTranding] = useState([]);

    const getMovies = () => {
        axios.get('https://api.themoviedb.org/3/trending/movie/week?api_key=385733ae9409fe3244ef39cb379d92b9').then((getdata) => {
            setMoviesTranding(getdata.data.results);
        });
    };

    useEffect(() => {
        getMovies();
    }, []);
    return (
        <div className='trending__container'>
            <h2 className='trending__heading'>Trending in Cinema</h2>
            <div className='trending__movies'>
                {moviesTranding.map((movie) => {
                    return (
                        <MovieItem key={movie.id} movie={movie} />
                    );
                })}
            </div>
        </div>
    );
}
 
export default Trending;