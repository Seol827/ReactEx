import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
//App.js에서 /movie/:id 로 받아올 수 있는 파라미터
import MovieDetail from "../components/MovieDetail";


function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const { id } = useParams();

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
    return () => setLoading(false); //cleanup
  });

  return (
    <div>
    {loading ? (
      null
    ) : (
      <div>
          <MovieDetail
            key={movie.id}
            id={movie.id}
            coverImg={movie.medium_cover_image}
            url={movie.url}
            title={movie.title}
            rating={movie.rating}
            runtime={movie.runtime}
            description_full={movie.description_full}
            genres={movie.genres}
          />
      </div>
    )}
  </div>
  );
}

export default Detail;