import { useState, useEffect } from "react";
import {
  fetchMovies,
  BASE_URL,
  ENDPOINTS,
  IMG_BASE_URL,
} from "../js/fetchMovies.js";
import style from "./Card.module.css";
import CartIcon from "./CartIcon.jsx";
import Star from "./Star.jsx";

import { Link } from "react-router";

function Card({ endpoint }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMoviesData = async () => {
      const data = await fetchMovies(BASE_URL, ENDPOINTS[endpoint]);
      const processedMovies = data.results.map((movie) => ({
        ...movie,
        roundedStars: movie.vote_average.toFixed(1),
      }));
      setMovies(processedMovies);
    };

    fetchMoviesData();
  }, [endpoint]);

  return (
    <>
      <div className="d-flex flex-wrap gap-5 align-item-center justify-content-center">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div
              key={movie.id}
              className={`card bg-black border-0 ${style.cardItem}`}
              style={{ width: "18rem" }}
            >
              <CartIcon />
              <Link to={`/movie/${movie.id}`} className="card-img-top">
                <img
                  src={`${IMG_BASE_URL}/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="card-img-top"
                />
              </Link>
              <div
                className="card-body text-white bg-dark rounded-bottom"
                style={{ height: "3rem", overflow: "hidden" }}
              >
                <div className="d-flex align-items-center justify-content-start">
                  <Star rating={movie.roundedStars} />
                  <h6
                    className="me-2 d-flex"
                    style={{ maxWidth: "100%", margin: "0" }}
                  >
                    {movie.roundedStars}
                  </h6>
                  <h6
                    className="card-title text-truncate"
                    style={{ maxWidth: "100%", margin: "0" }}
                  >
                    {movie.title}
                  </h6>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )}
      </div>
    </>
  );
}

export default Card;
