
// ./src/app/pages/movies.tsx
/* Top Rated */
/* https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options /*

/* Popular */
/* https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options */

/* Upcoming */
/* https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options */
"use client";
import dotenv from 'dotenv';
dotenv.config();
import { useState, useEffect } from 'react';
import useSWR from 'swr';
import axios from 'axios';
import Movie from '../components/movie';

import { Dna } from 'react-loader-spinner';
const fetcher = async (url: string) => {
  const NEXT_PUBLIC_TMDB_API_TOKEN = process.env.NEXT_PUBLIC_TMDB_API_TOKEN;
  console.log(NEXT_PUBLIC_TMDB_API_TOKEN);
  const options = {
    headers: {
      accept: 'application/json',
      Authorization: NEXT_PUBLIC_TMDB_API_TOKEN,
    }
  };
  const response = await axios.get(url, options);
  return response.data.results;
};

const Movies = () => {
  console.log(process.env);
  const [selectedCategory, setSelectedCategory] = useState('popular');
  const [isLoading, setIsLoading] = useState(false);
  const [dataFetched, setDataFetched] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    setDataFetched(prevData => ({
      ...prevData,
      [selectedCategory]: true,
    }));
  }, [selectedCategory]);

  let apiUrl = '';
  switch (selectedCategory) {
    case 'top_rated':
      apiUrl = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
      break;
    case 'upcoming':
      apiUrl = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1';
      break;
    default:
      apiUrl =
        'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
      break;
  }

  const { data: movies, error } = useSWR(
    dataFetched[selectedCategory] ? apiUrl : null, // key for caching
    fetcher,
    {
      revalidateOnMount: true, // revalidate data on component mount
      revalidateOnFocus: false, // do not revalidate data on window focus
      onSuccess: () => setIsLoading(false),
      onError: () => setIsLoading(false),
    }
  );

  useEffect(() => {
    // Check if the data has been fetched for the selected category
    if (!dataFetched[selectedCategory]) {
      setIsLoading(true);
      setDataFetched(prevData => ({
        ...prevData,
        [selectedCategory]: true,
      }));
    }
  }, [selectedCategory, dataFetched]);

  if (error) {
    console.error(error);
    // Handle error appropriately
  }
  return (
    <>
      <h1 className="py-4 font-medium text-xl">Discover Movies</h1>
      <div className="grid grid-cols-3 gap-2">

        <button
          onClick={() => setSelectedCategory('popular')}
          className={`basis-1/3 rounded bg-[#1c1c24] text-center py-2 border-2 ${selectedCategory === 'popular'
            ? 'border-[#ffffff] hover:border-[#ffffff]'
            : 'border-[#1c1c24] hover:border-[#ffffff]'
            } duration-150 ease-in-out`}
        >
          <p>Popular</p>
        </button>


        <button
          onClick={() => setSelectedCategory('top_rated')}
          className={`basis-1/3 rounded bg-[#1c1c24] text-center py-2 border-2 ${selectedCategory === 'top_rated'
            ? 'border-[#ffffff] hover:border-[#ffffff]'
            : 'border-[#1c1c24] hover:border-[#ffffff]'
            } duration-150 ease-in-out`}
        >

          <p>Top Rated</p>
        </button>


        <button
          onClick={() => setSelectedCategory('upcoming')}
          className={`basis-1/3 rounded bg-[#1c1c24] text-center py-2 border-2 ${selectedCategory === 'upcoming'
            ? 'border-[#ffffff] hover:border-[#ffffff]'
            : 'border-[#1c1c24] hover:border-[#ffffff]'
            } duration-150 ease-in-out`}
        >
          <p>Upcoming</p>
        </button>

      </div>

      {isLoading && (
        <div className="flex justify-center items-center mt-8">
          <Dna
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />
        </div>
      )}
      {error && (
        <div className="flex justify-center items-center mt-8">
          <p>Something went wrong</p>
        </div>)}

      <div className="grid grid-cols-4 gap-4 ">
        {movies &&
          movies.map((movie: { id: number; title: string; poster_path: string; overview: string }) => (
            <Movie
              id={movie.id}
              key={movie.id}
              title={movie.title}
              poster={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              description={movie.overview}
            />
          ))}
      </div>
    </>
  );
};
export default Movies


