import Navbar from './components/navbar'
import MovieDisplay from './components/moviedisplay'
import TV from './pages/tv'
import Footer from './components/footer'
export default function App() {
  console.log("hi");
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


