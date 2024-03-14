import Navbar from '../components/navbar'
import MovieDisplay from '../components/moviedisplay'
import TV from '../pages/tv'
import Footer from '../components/footer'
import { auth, currentUser } from "@clerk/nextjs";
import Search from '../components/search';

export default async function App() {

  const { userId } = auth();

  if (!userId) {
    return <div>You are not logged In</div>
  }

  const user = await currentUser();


  console.log(user)
  const email = user?.emailAddresses[0].emailAddress;
  console.log(email);
  const name = user?.firstName;
  console.log(name);
  const picture = user?.imageUrl;
  console.log(picture);
  return (
    <>
      <Navbar />
      <Search />
      <main className="xl:px-[20vw] lg:px-[15vw] md:px-[5vw] px-[2vw] text-text mt-8 space-y-4">
        <h1 className='text-3xl font-semibold text-center'>Your Dashboard</h1>
        <MovieDisplay />
        <TV />
      </main>
      <Footer />
    </>

  )
}



