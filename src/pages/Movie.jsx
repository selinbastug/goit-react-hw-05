import { NavLink, Route, Routes, useParams } from "react-router";
import {
  fetchMovies,
  BASE_URL,
  ENDPOINTS,
  IMG_BASE_URL,
} from "../js/fetchMovies.js";
import { useState, useEffect } from "react";
import Cast from "./Cast.jsx";
import Review from "./Review.jsx";

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [videoKey, setVideoKey] = useState(null);
  const [cast, setCast] = useState([]);
  const [review, setReview] = useState("");

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const data = await fetchMovies(
          BASE_URL,
          `${ENDPOINTS.MOVIE_DETAILS(id)}`
        );
        setMovie(data);

        const movieCredit = await fetchMovies(
          BASE_URL,
          `${ENDPOINTS.MOVIE_CREDITS(id)}`
        );
        const cast = movieCredit.cast;
        setCast(cast);

        const movieReview = await fetchMovies(
          BASE_URL,
          `${ENDPOINTS.MOVIE_REVIEWS(id)}`
        );
        const review = movieReview.results; // 'results' array'i olmalı
        setReview(review);

        const videoData = await fetchMovies(
          BASE_URL,
          `${ENDPOINTS.MOVIE_VIDEOS(id)}`
        );
        const trailer = videoData.results.find(
          (video) => video.type === "Trailer"
        );
        if (trailer) {
          setVideoKey(trailer.key);
        }
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };

    fetchMovieData();
  }, [id]);

  if (!movie || !videoKey) {
    return (
      <div className="d-flex align-items-center justify-content-center my-5">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container my-4 mb-5">
      <h2>{movie.title}</h2>
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-4">
          <img
            src={`${IMG_BASE_URL}/w500${movie.poster_path}`}
            alt={movie.title}
            className="img-fluid"
          />
        </div>
        <div className="col-sm-12 col-md-12 col-lg-8 d-flex flex-column align-items-start justify-content-center gap-2 fs-4">
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: "100%", width: "100%" }}
          >
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${videoKey}?controls=0&modestbranding=1&showinfo=0&rel=0&autohide=1&autoplay=1&mute=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      <div className="row my-5">
        <div className="col-sm-12 col-md-12 col-lg-4">
          <h2>Additional Information</h2>
          <ul className="fs-4 px-0 py-3" style={{ listStyle: "none" }}>
            <li>
              <NavLink
                className="text-primary text-decoration-none py-1"
                to={`/movie/${id}/cast`}
              >
                View Cast
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-primary text-decoration-none py-1"
                to={`/movie/${id}/review`}
              >
                View Reviews
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-8 fs-5">
          <h2>Overview</h2>
          <p>{movie.overview}</p>
        </div>
      </div>
      <Routes>
        <Route path="cast" element={<Cast cast={cast} />} />
        <Route path="review" element={<Review review={review} />} />
      </Routes>
    </div>
  );
}

export default Movie;
