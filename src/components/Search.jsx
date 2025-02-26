import { useEffect, useState } from "react";
import { fetchMovies, BASE_URL, ENDPOINTS } from "../js/fetchMovies.js";
import { MainContext, useContext } from "../hooks/Context";
import { useNavigate, useSearchParams } from "react-router";

function Search() {
  const [query, setQuery] = useState("");
  const { setLoading, setSearchMovies } = useContext(MainContext);
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const fetchMoviesData = async () => {
    const searchQuery = searchParams.get("query") || query;
    if (!searchQuery.trim()) return;

    setLoading(true);
    try {
      const data = await fetchMovies(BASE_URL, ENDPOINTS.SEARCH_MOVIES, {
        query: searchQuery,
      });
      if (data?.results) {
        setSearchMovies(
          data.results.map((movie) => ({
            ...movie,
            roundedStars: movie.vote_average.toFixed(1),
          }))
        );
      } else {
        setSearchMovies([]);
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
      setSearchMovies([]);
    } finally {
      setLoading(false);
      setQuery("");
    }
  };

  useEffect(() => {
    fetchMoviesData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const handleSearchClick = async () => {
    if (!query.trim()) return;

    setSearchParams((prevParams) => {
      const newParams = new URLSearchParams(prevParams);
      newParams.set("query", query);
      return newParams;
    });
    navigate(`/searchresults?query=${query}`);
    await fetchMoviesData();
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearchClick();
    }
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <div className="input-group">
        <input
          name="search"
          type="text"
          className="form-control"
          placeholder="Search L'MDb"
          aria-describedby="button-addon2"
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <button
          className="btn btn-primary"
          type="button"
          id="button-addon2"
          onClick={handleSearchClick}
        >
          <i className="bi bi-search"></i>
        </button>
      </div>
    </>
  );
}

export default Search;
