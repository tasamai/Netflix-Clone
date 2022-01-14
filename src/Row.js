//import React from 'react';
import React, {useState, useEffect} from 'react';
import axios from './axios';
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original/"

function Row({title, fetchUrl}) {
    const [movies, setMovies] = useState([]);

    //This hook runs once when the row loads
    useEffect(() => {
        //Async ensures the hook waits till there is a response
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            console.table(request.data.results)
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    return (
        
            <div className="row">
                <h2>{title}</h2>


            <div className="row_posters">
                {/*film poster*/}
                {movies.map(movie =>(
                    <img 
                    key={movie.id}
                    className='poster_row'
                    src={`${base_url}${movie.poster_path}`} alt={movie.name}/> //</img>
                ))}
            </div>
        </div>
    )
}

export default Row
