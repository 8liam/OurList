import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode } from 'react';
import Navbar from '../../components/navbar'
import List from '../../components/list';

async function getTV(id: string) {
    const res = await fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=29a1a89ccd0456e6ad5ae3fb2c6f21b3&language=en-US`);
    const movie = await res.json();
    return movie;
}


export default async function TVPage({ params }: any) {
    const tvshow = await getTV(params.id);
    const firstTwoGenres = tvshow.genres.slice(0, 2);
    const ratingPercentage = tvshow.vote_average * 10;
    return (
        <>
            <Navbar />
            <main className="px-96 my-8">
                <div className="bg-[#1c1c24] rounded-lg py-4 px-4">
                    <div className="flex flex-row">
                        <div className="basis-1/3">
                            <img className="rounded-lg" src={`https://image.tmdb.org/t/p/w500${tvshow.poster_path}`} alt={tvshow.name} width={500} height={750} />
                        </div>
                        <div className="basis-2/3 px-4">
                            <h1 className="text-xl"><b className="mx-1">{tvshow.name}</b>
                                {firstTwoGenres.map((genre: { genre: string, id: number, name: string }) => (
                                    <span className="bg-[#13131a] text-sm rounded-lg px-2 py-2 mx-1" key={genre.id}>{genre.name}</span>
                                ))}</h1>
                            <div className="pt-4 text-gray-200" >{tvshow.tagline}</div>

                            <div >{tvshow.overview}</div>
                            <div className="flex flex-row gap-2 justify-center text-center ">
                                <div className="pt-4 w-2/5" ><p className='bg-[#13131a] p-2 rounded-lg border-2 border-[#13131a] hover:border-[#ffffff] duration-150 ease-in-out'>{tvshow.first_air_date}</p></div>

                                <div className="pt-4 w-2/5"><p className='bg-[#13131a] p-2 rounded-lg border-2 border-[#13131a] hover:border-[#ffffff] duration-150 ease-in-out'>{ratingPercentage}%</p></div>
                            </div>
                            <div className="flex flex-row gap-2 justify-center text-center ">
                                <div className="pt-4 w-2/5" ><p className='bg-[#13131a] p-2 rounded-lg border-2 border-[#13131a] hover:border-[#ffffff] duration-150 ease-in-out'>{tvshow.runtime} minutes</p></div>
                                <div className="pt-4 w-2/5" ><p className='bg-[#13131a] p-2 rounded-lg border-2 border-[#13131a] hover:border-[#ffffff] duration-150 ease-in-out'>Budget: </p></div>
                            </div>
                        </div>
                    </div>
                </div>
                <List />
            </main >
        </>
    );
}