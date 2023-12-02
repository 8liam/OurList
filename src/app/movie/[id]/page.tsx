import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode } from 'react';
import Navbar from '../../components/navbar'
import List from '../../components/list';
import dotenv from 'dotenv'
dotenv.config();

async function getMovie(id: string) {
    const NEXT_PUBLIC_TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${NEXT_PUBLIC_TMDB_API_KEY}&language=en-US`);
    const movie = await res.json();
    return movie;
}


export default async function MoviePage({ params }: any) {
    const movie = await getMovie(params.id);
    const movieBudget = movie.budget.toLocaleString('en-US');
    const firstTwoGenres = movie.genres.slice(0, 2);
    const ratingPercentage = (movie.vote_average * 10).toFixed(2);
    if (movie.poster_path === null) {
        movie.poster_path = '/404_poster.png';
    }
    else {
        movie.poster_path = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    }
    return (
        <>
            <Navbar />
            <main className="px-96 my-8">
                <div className="bg-[#1c1c24] rounded-lg py-4 px-4">
                    <div className="flex flex-row">
                        <div className="basis-1/3">
                            <img className="rounded-lg" src={`${movie.poster_path}`} alt={movie.title} width={500} height={750} />
                        </div>
                        <div className="basis-2/3 px-4">
                            <h1 className="text-xl"><b className="mx-1">{movie.title}</b>
                                {firstTwoGenres.map((genre: { genre: string, id: number, name: string }) => (
                                    <span className="bg-[#13131a] text-sm rounded-lg px-2 py-2 mx-1" key={genre.id}>{genre.name}</span>
                                ))}</h1>
                            <div className="pt-4 text-gray-200" >{movie.tagline}</div>

                            <div >{movie.overview}</div>
                            <div className="flex flex-row gap-2 justify-center text-center ">
                                <div className="pt-4 w-2/5" ><p className='bg-[#13131a] p-2 rounded-lg border-2 border-[#13131a] hover:border-[#ffffff] duration-150 ease-in-out'>{movie.release_date}</p></div>

                                <div className="pt-4 w-2/5"><p className='bg-[#13131a] p-2 rounded-lg border-2 border-[#13131a] hover:border-[#ffffff] duration-150 ease-in-out'>{ratingPercentage}%</p></div>
                            </div>
                            <div className="flex flex-row gap-2 justify-center text-center ">
                                <div className="pt-4 w-2/5" ><p className='bg-[#13131a] p-2 rounded-lg border-2 border-[#13131a] hover:border-[#ffffff] duration-150 ease-in-out'>{movie.runtime} minutes</p></div>
                                <div className="pt-4 w-2/5" ><p className='bg-[#13131a] p-2 rounded-lg border-2 border-[#13131a] hover:border-[#ffffff] duration-150 ease-in-out'>Budget: ${movieBudget}</p></div>
                            </div>
                        </div>
                    </div>
                </div>
                <List />
            </main >
        </>
    );
}