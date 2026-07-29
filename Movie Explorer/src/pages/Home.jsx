import React, { useEffect, useState } from 'react'
import MovieGrid from '../components/MovieGrid'
import Loading from '../components/Loading'
import { getTrendingMovies,getPopularMovies,getUpcomingMovies,getTopRatedMovies } from '../services/tmdb'
import Error from '../components/Error'

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
    <main className='text-gray-300' >
      <section className='text-center w-full min-h-[50vh] flex  flex-col justify-center items-center leading-15'>
        <h1 className='text-[#B20710] text-6xl font-bold '>Movie Explorer</h1>
        <p >Explore your favourite movies</p>

      </section>
      <section>
        <h2>Trending Movies</h2>
        <MovieGrid movies={trending} />
      </section>

      <section>
        <h2>Popular Movies</h2>
        <MovieGrid movies={popular} />
      </section>

      <section>
        <h2>Top Rated Movies</h2>
        <MovieGrid movies={topRated} />
      </section>

      <section>
        <h2>Upcoming Movies</h2>
        <MovieGrid movies={upcoming} />
      </section>
    </main>
  )
}

export default Home