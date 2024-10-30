// src/pages/Movie.js

import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import CardBig from "../component/CardBig";
import CardSmall from "../component/CardSmall";
import "./Movie.css";

export default function Movie() {
  const STAR_COLOR = "rgb(220, 117, 21)";
  const STAR_SIZE = 20;

  const poster = [
    {
      id: 1,
      title: "John Wick",
      rate: 4,
      genre: "action, crime",
      img: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/6d3d1461d50778271845ce7ec81ba2c5d76a20f7f84e5061cd099aabaedc77f9._RI_TTW_.jpg",
    },
    {
      id: 2,
      title: "Inception",
      rate: 5,
      genre: "sci-fi, action",
      img: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
    },
    {
      id: 3,
      title: "The Matrix",
      rate: 4,
      genre: "action, sci-fi",
      img: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    },
  ];

  const data = [
    {
      id: 4,
      title: "Oppenheimer",
      rate: 4,
      genre: "biography, drama, history",
      img: "https://m.media-amazon.com/images/I/71lqDylcvGL.jpg",
    },
    {
      id: 5,
      title: "The Dark Knight",
      rate: 5,
      genre: "action, crime, drama",
      img: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
    },
    {
      id: 6,
      title: "Pulp Fiction",
      rate: 5,
      genre: "crime, drama",
      img: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    },
    {
      id: 7,
      title: "Forrest Gump",
      rate: 4,
      genre: "drama, romance",
      img: "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
    },
    {
      id: 8,
      title: "The Shawshank Redemption",
      rate: 5,
      genre: "drama",
      img: "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    },
    {
      id: 9,
      title: "Goodfellas",
      rate: 5,
      genre: "biography, crime, drama",
      img: "https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    },
  ];

  return (
    <>
      <p id="movies">Top Movies</p>
      <div className="containerTop">
        {poster.map((item) => (
          <Fragment key={item.id}>
            <Link to={`/movie/detail/${item.id}`} className="movie-link">
              <CardBig title={item.title} img={item.img} genre={item.genre} size={STAR_SIZE} color={STAR_COLOR} />
            </Link>
          </Fragment>
        ))}
      </div>
      <div className="rowcoba">
        <div className="column">
          <p id="movies">All Movies</p>
          {data.map((item) => (
            <Fragment key={item.id}>
              <Link to={`/movie/detail/${item.id}`} className="movie-link">
                <CardSmall
                  title={item.title}
                  img={item.img}
                  genre={item.genre}
                  size={STAR_SIZE}
                  color={STAR_COLOR}
                />
              </Link>
            </Fragment>
          ))}
        </div>
      </div>
    </>
  );
}