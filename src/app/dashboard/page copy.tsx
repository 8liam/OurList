import Navbar from '../components/navbar'
import MovieDisplay from '../components/moviedisplay'
import TV from '../pages/tv'
import Footer from '../components/footer'
import { auth, currentUser } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";


export default async function App() {


  return (
    <>
      <Navbar />
      <main className="px-96">
        <MovieDisplay />
        <TV />
      </main>
      <Footer />
    </>

  )
}



