// import style from './App.module.css';
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { MainProvider } from "./hooks/Context";
import { Route, Routes } from "react-router";
import Movies from "./pages/Movies";
import Movie from "./pages/Movie";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Cast from "./pages/Cast";
import Review from "./pages/Review";
import SearchResult from "./pages/SearchResult";

function App() {
  return (
    <MainProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/searchresults" element={<SearchResult />} />

        <Route path="/movie/:id/*" element={<Movie />}>
          <Route path="cast" element={<Cast />} />
          <Route path="review" element={<Review />} />
        </Route>
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
      <Footer />
    </MainProvider>
  );
}

export default App;
