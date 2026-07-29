import React, { useEffect, useState } from 'react'
import MovieGrid from '../components/MovieGrid'
import Loading from '../components/Loading'
import { getTrendingMovies,getPopularMovies,getUpcomingMovies,getTopRatedMovies } from '../services/tmdb'
import Error from '../components/Error'
import { NavLink } from 'react-router-dom'

const Home = () => {

    const [trending, setTrending] = useState([])
    const [upcoming,setUpcoming] = useState([])
    const [topRated,setTopRated] = useState([])
    const [popular,setPopular] = useState([])

    const [loading,setLoading] = useState(true)
    const [error,setError] = useState("")

    //fetch everytime the homepage renders
    useEffect(()=>{
      const fetch = async () =>{
        try{
          const [trendingData,popularData,topData, upcomingData] = await Promise.all([
            getTrendingMovies(),getPopularMovies(),getTopRatedMovies(),getUpcomingMovies()
          ])

          //Set the fetched data
          setTrending(trendingData)
          setPopular(popularData.results)
          setTopRated(topData)
          setUpcoming(upcomingData)
        }
        catch (err) {
          console.log(err);
          console.log(err.message);
          console.log(err.stack);

          setError("Failed to load movies.");
        }
         finally {
         setLoading(false);
        }
      }
      fetch()
    },[])

    if(loading) return <Loading />
    if(error) return <Error error={error}/>


  

  return (
    <main className='text-gray-300  ' >
      <section className='text-center w-full min-h-[50vh] flex  flex-col justify-center items-center '>
        <h1 className='text-[#B20710] text-6xl font-bold '>MovieNation</h1>
        <p className='max-w-2xl mt-5 text-lg text-gray-300'>Discover trending, top-rated and upcoming movies from around the world.</p>
        <NavLink to='/movies'className='bg-[#B20710] px-10 py-4 text-xl font-medium rounded-xl mt-2 hover:bg-red-700 transition-colors duration-300 mt-5' >Browse Movies</NavLink>
        

      </section>
      <section className='text-center py-12 px-6 bg-[#141414]  border-t border-gray-800'>
        <h2 className='text-3xl md:text-4xl  mb-10 text-white font-bold'>Trending Movies</h2>
        <MovieGrid movies={trending} />
      </section>

      <section className='text-center py-12 px-6 bg-[#141414] border-t border-gray-800'>
        <h2 className='text-3xl md:text-4xl  mb-10 text-white font-bold'>Popular Movies</h2>
        <MovieGrid movies={popular} />
      </section>

      <section className='text-center py-12 px-6 bg-[#141414]  border-t border-gray-800'>
        <h2 className='text-3xl md:text-4xl  mb-10 text-white font-bold'>Top Rated Movies</h2>
        <MovieGrid movies={topRated} />
      </section>

      <section className='text-center py-12 px-6 bg-[#141414]  border-t border-gray-800'>
        <h2 className='text-3xl md:text-4xl  mb-10 text-white font-bold'> Upcoming Movies</h2>
        <MovieGrid movies={upcoming} />
      </section>
    </main>
  )
}

export default Home