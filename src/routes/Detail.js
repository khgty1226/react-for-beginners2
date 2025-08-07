import {useParams} from "react-router-dom";
import {useState, useEffect} from "react";
import Movie from "../components/Movie";

function Detail(){
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState();
    async function getMovie(){
        const json = await(await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        setMovie(json.data.movie);
        setLoading(false);
    }
    useEffect(() => {
        getMovie();
    }, []);
    console.log("movie", movie);
    return (
        <div>
            <h1>Detail</h1>
            {loading ?
                <h2>Loading...</h2> :
                <Movie key={movie.id} id={movie.id} coverImg={movie.medium_cover_image} title={movie.title} summary={movie.summary} genres={movie.genres}/>}
        </div>
    );
}

export default Detail;