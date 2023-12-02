
import Navbar from '../../components/navbar'
import axios from 'axios';
import Movie from '../../components/movie';
import dotenv from 'dotenv'
dotenv.config();

async function getSearch(query: string) {
    const NEXT_PUBLIC_TMDB_API_TOKEN = process.env.NEXT_PUBLIC_TMDB_API_TOKEN;
    const options = {
        headers: {
            accept: 'application/json',
            Authorization: NEXT_PUBLIC_TMDB_API_TOKEN,
        }
    };
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`, options);
        const data = response.data;
        console.log(data);
        return data.results;
    } catch (error) {
        console.error(error);
    }
};


export default async function SearchPage({ params }: any) {
    const movies = await getSearch(params.query);
    const noUnicodeParams = params.query.replace(/%20/g, ' ');

    return (
        <>
            <Navbar />

            <main className="px-96 my-8">
                <h1 className="py-4 font-medium text-xl">Search Results for <b>{noUnicodeParams}</b></h1>
                <div className="grid grid-cols-4 gap-4 ">
                    {movies &&
                        movies.map((movie: { id: number; title: string; poster_path?: any; overview: string }) => (
                            <div key={movie.id}>
                                {movie.poster_path ? (
                                    <Movie
                                        id={movie.id}
                                        title={movie.title}
                                        poster={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                        description={movie.overview}
                                    />
                                ) : (
                                    <Movie
                                        id={movie.id}
                                        title={movie.title}
                                        poster={'/404_poster.png'}
                                        description={movie.overview}
                                    />
                                )}
                            </div>
                        ))}

                </div>
            </main>
        </>
    );
}