import React from "react";
import Badge from "react-bootstrap/Badge";
import "./MovieCard.style.css";
import { useMovieGenreQuery } from "../../hooks/useMovieGenre";

const MovieCard = ({ movie }) => {
  const { data: genreData } = useMovieGenreQuery();

  const showGenre = (genreIdList) => {
    if (!genreData) return [];
    const genreNameList = genreIdList.map((id) => {
      const genreObj = genreData.find((genre) => genre.id === id);
      return genreObj.name;
    });
    return genreNameList;
  };

  return (
    <div
      style={{
        backgroundImage:
          "url(" +
          `https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}` +
          ")",
      }}
      className="movie-card"
    >
      <div className="overlay">
        <h1>{movie.title}</h1>
        {showGenre(movie.genre_ids).map((genre, index) => (
          <Badge bg="danger">{genre}</Badge>
        ))}
        <div>
          <div className="cardProps">
            <Badge bg="info">{movie.vote_average}</Badge>
            <Badge bg="info">{movie.popularity}</Badge>
            <Badge bg="info">{movie.adult ? "over18" : "under18"}</Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
