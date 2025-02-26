import { IMG_BASE_URL } from "../js/fetchMovies.js";
import { MainContext, useContext } from "../hooks/Context";
import Star from "../components/Star";
import CartIcon from "../components/CartIcon";
import { Link } from "react-router";

const SearchResult = () => {
  const { loading, searchMovies } = useContext(MainContext);

  return (
    <div className="d-flex flex-wrap gap-5 align-items-center justify-content-center my-5">
      {loading && (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}

      {!loading && searchMovies.length > 0
        ? searchMovies
            .filter((movie) => movie.poster_path)
            .map((movie) => (
              <div
                key={movie.id}
                className="card bg-black border-0"
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
        : !loading && <p className="text-white">No results found.</p>}
    </div>
  );
};

export default SearchResult;
