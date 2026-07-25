import axiosInstance from "./axiosInstance";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const options = {
    params : {
        api_key : API_KEY,
    },
};

export const getTrendingMovies = async () => {
  const response = await axiosInstance.get("/trending/movie/day", options);
  return response.data.results;
};

export const getPopularMovies = async () => {
  const response = await axiosInstance.get("/movie/popular", options);
  return response.data.results;
};

export const getTopRatedMovies = async () => {
  const response = await axiosInstance.get("/movie/top_rated", options);
  return response.data.results;
};

export const getUpcomingMovies = async () => {
  const response = await axiosInstance.get("/movie/upcoming", options);
  return response.data.results;
};

export const getMovieDetails = async (id) => {
  const response = await axiosInstance.get(`/movie/${id}`, options);
  return response.data;
};

export const searchMovies = async (query) => {
  const response = await axiosInstance.get("/search/movie", {
    params: {
      api_key: API_KEY,
      query,
    },
  });

  return response.data.results;
};

export const getMoviesByGenre = async (genreId) => {
  const response = await axiosInstance.get("/discover/movie", {
    params: {
      api_key: API_KEY,
      with_genres: genreId,
    },
  });

  return response.data.results;
};

export const getGenres = async () => {
  const response = await axiosInstance.get("/genre/movie/list", options);
  return response.data.genres;
};