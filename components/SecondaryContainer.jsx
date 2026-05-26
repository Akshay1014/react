import MovieList from "./MovieList"

const SecondaryContainer = () => {
  return (
    <div className="bg-black -mt-40 relative z-10">
      <MovieList title="Popular Movies" />
      <MovieList title="Top Rated" />
      <MovieList title="Now Playing" />
    </div>
  );
};

export default SecondaryContainer;