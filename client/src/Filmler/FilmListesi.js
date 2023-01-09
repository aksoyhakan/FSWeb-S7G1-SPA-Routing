import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

export default function FilmListesi(props) {
  const { url } = useRouteMatch();
  return (
    <div className="movie-list">
      {props.movies.map((movie, index) => (
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to={`${url}movies/${index}`}
        >
          <FilmDetayları key={movie.id} movie={movie} />
        </Link>
      ))}
    </div>
  );
}

function FilmDetayları(props) {
  const { title, director, metascore } = props.movie;

  return (
    <div className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </div>
  );
}
