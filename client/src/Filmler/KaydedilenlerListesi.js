import React from "react";
import { useHistory } from "react-router-dom";
import { Link, useRouteMatch } from "react-router-dom";

export default function KaydedilenlerListesi(props) {
  let history = useHistory();
  const { list } = props;
  const { url } = useRouteMatch();
  console.log(list);
  return (
    <div className="saved-list">
      <h3>Kaydedilen Filmler:</h3>
      {props.list.map((movie) => (
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to={`${url}movies/${movie.id}`}
        >
          {movie.title}
        </Link>
      ))}
      <div className="home-button" onClick={() => history.push("/")}>
        Anasayfa
      </div>
    </div>
  );
}
