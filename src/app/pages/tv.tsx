// ./src/app/pages/movies.tsx

import axios from 'axios';
import TVShow from '../components/tvshow';
import dotenv from 'dotenv';
dotenv.config();
async function getTV() {
    const NEXT_PUBLIC_TMDB_API_TOKEN = process.env.NEXT_PUBLIC_TMDB_API_TOKEN;
    const options = {
        headers: {
            accept: 'application/json',
            Authorization: NEXT_PUBLIC_TMDB_API_TOKEN,
        }
    };
    try {
        const response = await axios.get('https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc', options);
        const data = response.data;
        return data.results;
    } catch (error) {
        console.error(error);
    }
};

export default async function Tv() {
    const tvshow = await getTV();
    return (
        <>
            <h1 className="py-4 font-medium text-xl">TV</h1>
            <div className="grid grid-cols-4 gap-4 ">
                {/* 
                {tvshow.map((tvshow: { id: number | undefined; name: string; poster_path: any; overview: string; }) => (
                    <TVShow
                        id={tvshow.id}
                        key={tvshow.id}
                        name={tvshow.name}
                        poster={`https://image.tmdb.org/t/p/w500${tvshow.poster_path}`}
                        description={tvshow.overview}
                    />
                ))}
                */}
            </div>
        </>
    );
};

