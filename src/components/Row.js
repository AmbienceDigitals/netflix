import React, {useState, useEffect} from 'react';
import axios from './../axios';
import './Row.css';

const Row = ({title, fetchUrl, isLargeRow}) => {
    const [movies, setMovies] = useState([]);
    const baseUrl = "https://image.tmdb.org/t/p/original/"

    const fetchData = async () => {
        const request = await axios.get(fetchUrl)
        setMovies(request.data.results);
        return request;
    }

    useEffect(() => {
        fetchData();
    }, [fetchUrl])
    return (
        <div className="row">
            <h2> {title}</h2>
            {/* title */}

            <div className="row_posters">
                {movies.map((movie) => {
                    return (
                    <img 
                    key={movie.id}
                    className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                    src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                    alt={movie.name}></img>
                    )
                })}
            </div>

            {/* posters */}
        </div>
    )
}

export default Row;
