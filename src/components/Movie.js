import React from "react";
import { useParams } from "react-router-dom";
//config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";
//components
import Grid from "./Grid/index";
import Spinner from "./Spinner/index";
import BreadCrumb from "./BreadCrumb/index";
import MovieInfo from "./MovieInfo/index";
import MovieInfoBar from "./MovieInfoBar/index";
import Actor from "./Actor/index";
//hook
import { useMovieFetch } from "../hooks/useMovieFetch";
//image
import NoImage from "../Images/no_image.jpg";

const Movie = () => {
  const { movieId } = useParams();
  const { state: movie, loading, error } = useMovieFetch(movieId);
  if (loading) return <Spinner />;
  if (error) return <div>Something went wrong...</div>;
  return (
    <>
      <BreadCrumb movieTitle={movie.original_title} />
      <MovieInfo movie={movie} />
      <MovieInfoBar
        time={movie.runtime}
        budget={movie.budget}
        revenue={movie.revenue}
      />
      <Grid header="Actors">
        {movie.actors.map((actor) => (
          <Actor
            key={actor.credit_id}
            name={actor.name}
            character={actor.character}
            imgUrl={
              actor.profile_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                : NoImage
            }
          />
        ))}
      </Grid>
    </>
  );
};

export default Movie;
