import axios from "axios";

//VARIABLES ABOUT THE API
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMTZhMzBjZTQ5YTc3ODkxODhiNmZhOWJhZDk5NjNhNiIsIm5iZiI6MTczMzUwOTk4Ny41NTYsInN1YiI6IjY3NTM0MzYzYjFlYWE1Yzg5MWRiMDU1NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fojrkLbLrhYUKEDhqGX2ZM-oL_h6VfOVBw9s7V05N-w
const API_KEY = "016a30ce49a7789188b6fa9bad9963a6";
const BASE_URL = "https://api.themoviedb.org/3"; //API ANA DIZIN
const IMG_BASE_URL = "https://image.tmdb.org/t/p"; //API RESIM ANA DIZIN
export { BASE_URL, IMG_BASE_URL };

// ENDPOINT OBJECTS
export const ENDPOINTS = {
  TRENDING_WEEK: "/trending/movie/week", //API TREND FILM HAFTALIK
  TRENDING_DAY: "/trending/movie/day", //API TREND FILM GUNLUK
  POPULAR_MOVIES: "/movie/popular", //API TREND FILM
  UPCOMING_MOVIES: "/movie/upcoming", //API GET UPCOMING
  MOVIE_DETAILS: (movieId) => `/movie/${movieId}`,
  MOVIE_VIDEOS: (movieId) => `/movie/${movieId}/videos`,
  MOVIE_CREDITS: (movieId) => `/movie/${movieId}/credits`,
  MOVIE_REVIEWS: (movieId) => `/movie/${movieId}/reviews`,
  SEARCH_MOVIES: "/search/movie",
  GENRE_LIST: "/genre/movie/list",
  IMG_W500: "/w500",
  IMG_W780: "/w780",
  IMG_W1280: "/w1280",
  IMG_ORIGINAL: "/original",
};

export async function fetchMovies(baseurl, endpoint, params = {}) {
  try {
    const query = params.query ? { query: params.query } : {};
    const response = await axios.get(`${baseurl}${endpoint}`, {
      params: {
        api_key: API_KEY,
        language: "en-US",
        page: 1,
        ...params,
        ...query,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

//FUNCTION APPLICATION EXAMPLE
// fetchMovies(BASE_URL, ENDPOINTS.TRENDING_WEEK);
// fetchMovies(BASE_URL, ENDPOINTS.TRENDING_DAY);
// fetchMovies(BASE_URL, ENDPOINTS.SEARCH_MOVIES, { query: 'avengers' });
// fetchMovies(BASE_URL, ENDPOINTS.GENRE_LIST);
// fetchMovies(BASE_URL, ENDPOINTS.MOVIE_DETAILS, { id: 337401 });
// fetchMovies(BASE_URL, ENDPOINTS.POPULAR_MOVIES);
