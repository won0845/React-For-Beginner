import PropTypes from "prop-types";
function Movie({id, title, summary, medium_cover_image, genres}) {
    return (
    <div key={id}>
        <img src={medium_cover_image} alt={title} />
        <h2>{title}</h2>
        <p>{summary}</p>
        <ul>
            {genres.map((g)=> <li key={g}>{g}</li>)}
        </ul>
    </div>
    );
}

Movie.protoTypes ={
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    medium_cover_image: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
  }

export default Movie;