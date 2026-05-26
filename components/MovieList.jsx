const MovieList = ({ title }) => {
    return (
        <div className="px-6">
            <h2 className="text-white text-xl mb-2">{title}</h2>

            <div className="flex overflow-x-scroll gap-4">
                {[1, 2, 3, 4, 5].map((id) => (
                    <div key={id} className="w-40 h-60 bg-gray-700"></div>
                ))}
            </div>
        </div>
    );
};

export default MovieList;