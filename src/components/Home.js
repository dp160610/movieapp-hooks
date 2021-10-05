import React from "react";
//APi
// import API from "../API";
//config

import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";
//components
import HeroImage from "./HeroImage/index";
import Grid from "./Grid/index";
import Thumb from "./Thumb/index";
import Spinner from "./Spinner/index";
import SearchBar from "./SearchBar/index";
import Button from "./Button/index";
//hooks
import { useHomeFetch } from "../hooks/useHomeFetch";
//images
import NoImage from "../Images/no_image.jpg";

const Home = () => {
  // const [state, setState] = useState();
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);

  // const fetchMovies = async (page, searchTerm = "") => {
  //   try {
  //     setError(false);
  //     setLoading(true);
  //     const movies = await API.fetchMovies(searchTerm, page);

  //     setState((prev) => ({
  //       ...movies,
  //       results:
  //         page > 1 ? [...prev.results, ...movies.results] : [...movies.results]
  //     }));
  //   } catch (error) {
  //     setError(true);
  //   }
  //   setLoading(false);
  // };
  // useEffect(() => {
  //   fetchMovies(1);
  // }, []);
  const {
    state,
    loading,
    error,
    setSearchTerm,
    searchTerm,
    setLoadingMore
  } = useHomeFetch();
  if (error) return <div>Something went wrong...</div>;
  console.log(state);
  return (
    <>
      {!searchTerm && state.results[0] ? (
        <HeroImage
          title={state.results[0].original_title}
          text={state.results[0].overview}
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
        />
      ) : null}
      <SearchBar setSearchTerm={setSearchTerm} />
      <Grid header={searchTerm ? "Search Result" : "Popular Movies"}>
        {state.results.map((item) => (
          <Thumb
            key={item.id}
            clickable
            image={
              item.poster_path
                ? IMAGE_BASE_URL + POSTER_SIZE + item.poster_path
                : NoImage
            }
            movieId={item.id}
          />
        ))}
      </Grid>
      {loading && <Spinner />}
      {state.page < state.total_pages && !loading && (
        <Button text="Load More" callback={() => setLoadingMore(true)} />
      )}
    </>
  );
};
export default Home;
