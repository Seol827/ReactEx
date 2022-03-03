import { useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import Movie from "../components/Movie";
//App.js에서 /movie/:id 로 받아올 수 있는 파라미터 

function Detail() {
    const[movie, setMovie] = useState([]);
    const {id} = useParams();

    const getMovie = async () => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
           ).json();
           setMovie(json.data.movie);
    };

    useEffect(() => {
        getMovie();
    }, []);

    return (
        <div>
            <h1>This Movie</h1>
                <img src={movie.medium_cover_image} />
                <h2>Title : {movie.title}</h2>
                <h3>{movie.summary}</h3>
                <li>{movie.genres}</li>
        </div>
        
    );
}

export default Detail;