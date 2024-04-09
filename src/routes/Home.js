import Movie from "../components/Movie"
import { useEffect, useState } from "react";
function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
        const response = await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&limit=20&sort_by=year`);
        const data = await response.json();
        setMovies(data.data.movies);
        setLoading(false);
    };
    useEffect(() => {
        getMovies();
    }, []);
    console.log(movies);
    return (
        <div>
            {loading ?
                (<h1>Loading...</h1>)
                :
                (<div>
                    {
                        // id, title, summary, medium_cover_image, genres
                        movies.map((movie) =>
                        (<Movie
                            key={movie.id}
                            id={movie.id}
                            title={movie.title}
                            summary={movie.summary}
                            medium_cover_image={movie.medium_cover_image}
                            genres={movie.genres}
                        />)
                        )
                    }
                </div>)
            }
        </div>
    );
}

export default Home;