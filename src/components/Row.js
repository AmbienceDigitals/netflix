import React, {useState, useEffect} from 'react';
import axios from './../axios';
import './Row.css';
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer'; 

const Row = ({title, fetchUrl, isLargeRow}) => {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState();
    const baseUrl = "https://image.tmdb.org/t/p/original/"

    const fetchData = async () => {
        const request = await axios.get(fetchUrl)
        setMovies(request.data.results);
        return request;
    }

    useEffect(() => {
        fetchData();
    }, [fetchUrl])

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1
        }
    }

    const handleClick = (movie) => {
        // if trailer already playing close trailer
        if(trailerUrl) {
            setTrailerUrl("")
        }
        else{
            movieTrailer(movie?.name || "")
            .then((url) => {
                // getting the youtube url of movies
                const urlParams  = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get("v"))
            })
            .catch((error) => setTrailerUrl(error))
        }
    }

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
                    alt={movie.name}
                    onClick={() => handleClick(movie)}></img>
                    )
                })}
            </div>

            {trailerUrl &&
            <Youtube 
            videoId={trailerUrl}
            opts={opts}></Youtube>}
        </div>
    )
}

export default Row;
