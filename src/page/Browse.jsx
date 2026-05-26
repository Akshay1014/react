import { useEffect, useState } from "react";
import API_OPTIONS from "../utils/constants";
import Header from "../../components/Header";
import MainContainer from "../../components/MainContainer";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import SecondaryContainer from "../../components/SecondaryContainer";

const Browse = () => {
    const [movies, setMovies] = useState([]);

    const handleSignOut = () => {
        signOut(auth);
    }

    useEffect(() => {
        const fetchMovies = async () => {
            const data = await fetch(
                "https://api.themoviedb.org/3/movie/popular",
                API_OPTIONS
            );
            const json = await data.json();
            setMovies(json.results);
        };
        fetchMovies();
    }, []);

    return (
        <div>
            <Header />
            <MainContainer />
            <SecondaryContainer />
            <button onClick={handleSignOut} className="text-white">
                Sign Out
            </button>
            <h1>Movies</h1>
            {movies.map((movie) => (
                <p key={movie.id}>{movie.title}</p>
            ))}
        </div>
    );
};

export default Browse;