import React from "react";
import { useParams } from "react-router-dom";
import { dummy } from "../movieDummy";
import Overview from "../components/Overview";

function Detail() {
  const { id } = useParams();
  const movieList = dummy.results.filter((movie) => movie.id === Number(id));
  console.log(movieList);
  return (
    <div>
      {movieList.map((movie) => (
        <Overview
          key={movie.id}
          title={movie.title}
          star={movie.vote_average}
          img={movie.poster_path}
          introduce={movie.overview}
        />
      )
      )}
    </div>
  );
}
export default Detail;
