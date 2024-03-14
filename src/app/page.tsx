"use client"
import Navbar from './components/navbar';
import Footer from './components/footer';
import { useUser } from "@clerk/nextjs";
import { redirect, useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function App() {
  const { push } = useRouter();
  const { isLoaded, isSignedIn } = useUser();

  // Use useEffect to handle the redirection after checking user's sign-in status
  useEffect(() => {
    if (isSignedIn) {
      push('/dashboard');
    }
  }, [isLoaded, isSignedIn, push]); // Add router to dependency array

  if (isSignedIn) {
    return <div>Loading...</div>; // Or any other loading state representation
  }
  else {
    return (
      <>
        <Navbar />
        <main className="xl:px-[20vw] lg:px-[15vw] md:px-[5vw] px-[2vw] text-text mt-8 space-y-4">
          <div>
            <h1 className='text-3xl font-bold text-center'>OurMovieList</h1>
          </div>
          <div className='grid grid-cols-2 text-center mx-40 gap-4'>
            <a className="bg-black p-2 rounded border border-white hover:text-black hover:bg-white duration-300 text-xl" href='/sign-in'>Sign In</a>
            <a className="bg-black p-2 rounded border border-white hover:text-black hover:bg-white duration-300 text-xl" href='/sign-up'>Sign up</a>
          </div>
        </main>
      </>
    );
  }
}


