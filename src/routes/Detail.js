import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
function Detail() {
    const [response, setResponse] = useState(null);
    const { id } = useParams();
    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`))
            .json();
        setResponse(json);
        console.log(json.data.movie,1)
    };
    useEffect(() => {
        getMovie();
    }, [])
    if (!response) return <h1>Loading...</h1>
    const movie = response.data.movie;
    return (
        <div key={movie.id}>
            <img src={movie.large_cover_image} alt={movie.title} />
            <h2>
                {movie.title}
            </h2>
            <p>{movie.description_full}</p>
            <ul>
                {movie.genres.map((g) => <li key={g}>{g}</li>)}
            </ul>
        </div>
   );
}
export default Detail;