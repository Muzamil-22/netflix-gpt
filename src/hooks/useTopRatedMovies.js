import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const TopRatedMovies = useSelector((store) => store.movies.TopRatedMovies);

  const getMovieList = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTIONS
    );
    const jsonData = await data.json();

    dispatch(addTopRatedMovies(jsonData.results));
  };

  useEffect(() => {
    !TopRatedMovies && getMovieList();
  }, []);
};

export default useTopRatedMovies;
