import PropTypes from "prop-types";

function MovieDetail({coverImg, title, rating, runtime, url, description_full, genres}) {
    return (
        <div>
        <img src={coverImg} alt={coverImg} />
        <h2>
          <a href={url} target="_blank">{title}</a>
        </h2>
        <div>Rating : 🌟 {rating}</div>
        <div>Run Time : {runtime} minutes</div>
        <p>{description_full}</p>
        <ul>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      </div>
    )
}

MovieDetail.propTypes = {
  coverImg : PropTypes.string.isRequired,
  title : PropTypes.string.isRequired,
  rating : PropTypes.number.isRequired,
  runtime : PropTypes.number.isRequired,
  description_full : PropTypes.string.isRequired,
  genres : PropTypes.arrayOf(PropTypes.string).isRequired,
  url : PropTypes.string.isRequired,
};

export default MovieDetail;