import { NavLink } from "react-router";
import style from "./Carousel.module.css";
import { useState, useEffect } from "react";
import {
  fetchMovies,
  BASE_URL,
  ENDPOINTS,
  IMG_BASE_URL,
} from "../js/fetchMovies.js";

function Carousel() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMoviesData = async () => {
      const data = await fetchMovies(BASE_URL, ENDPOINTS.POPULAR_MOVIES);
      setMovies(data.results);
    };

    fetchMoviesData();
  }, []);

  return (
    <div className="container py-2 px-md-0 " data-bs-theme="dark">
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {movies.slice(0, 10).map((movie, index) => (
            <div
              key={movie.id}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <div className="row align-items-center">
                <div className="col-md-6">
                  <NavLink to={`/movie/${movie.id}`}>
                    <img
                      src={`${IMG_BASE_URL}/w780${movie.backdrop_path}`}
                      className="d-block w-100 rounded"
                      alt={movie.title}
                      style={{ objectFit: "cover" }}
                    />
                  </NavLink>
                </div>

                <div
                  className={`col-12 col-md-6 col-lg-4 d-flex flex-column justify-content-center text-start gap-5 ${style.carouselCaption}`}
                >
                  <h2 className="display-6 text-center text-md-start mt-2 mt-md-0 fw-bolder">
                    {movie.title}
                  </h2>
                  <p>{movie.overview}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
