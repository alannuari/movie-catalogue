import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import MovieItem from './MovieItem';
import Layout from './Layout';

const NowPlaying = () => {
    const [movies, setMovies] = useState([]);
    const { pathname } = useLocation();

    const getMovies = () => {
        axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=385733ae9409fe3244ef39cb379d92b9&language=en-us&page=1').then((getdata) => {
            setMovies(getdata.data.results);
        });
    };

    useEffect(() => {
        getMovies();
    }, []);

    return (
        <>
            <Layout pathname={pathname}>
                <main className='main'>
                    <div className='content'>
                        <h2 className='content__heading'>Now Playing in Cinema</h2>
                        <div className='movies'>
                            {movies.map((movie) => {
                                return (
                                    <MovieItem key={movie.id} movie={movie} />
                                );
                            })}
                        </div>
                    </div>
                </main>
            </Layout>
        </>
    );
}
 
export default NowPlaying;