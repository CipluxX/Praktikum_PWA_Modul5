// src/pages/DetailMovie.js

import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './DetailMovie.css';

const DetailMovie = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const allMovies = [
    {
      id: 1,
      title: "John Wick",
      rate: 4,
      genre: "action, crime",
      img: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/6d3d1461d50778271845ce7ec81ba2c5d76a20f7f84e5061cd099aabaedc77f9._RI_TTW_.jpg",
      description: "John Wick, a retired hitman, is forced to return to his old ways after a group of Russian gangsters steal his car and kill a puppy gifted to him by his late wife."
    },
    {
      id: 2,
      title: "Inception",
      rate: 5,
      genre: "sci-fi, action",
      img: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
      description: "A skilled thief with the rare ability to 'extract' information from people's minds takes on the inverse task of 'inception', planting another person's idea into a target's subconscious."
    },
    {
      id: 3,
      title: "The Matrix",
      rate: 4,
      genre: "action, sci-fi",
      img: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
      description: "A skilled thief with the rare ability to 'extract' information from people's minds takes on the inverse task of 'inception', planting another person's idea into a target's subconscious."
    },
    {
        id: 4,
        title: "Oppenheimer",
        rate: 4,
        genre: "biography, drama, history",
        img: "https://m.media-amazon.com/images/I/71lqDylcvGL.jpg",
        description: "A skilled thief with the rare ability to 'extract' information from people's minds takes on the inverse task of 'inception', planting another person's idea into a target's subconscious."
      },
      {
        id: 5,
        title: "The Dark Knight",
        rate: 5,
        genre: "action, crime, drama",
        img: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
        description: "A skilled thief with the rare ability to 'extract' information from people's minds takes on the inverse task of 'inception', planting another person's idea into a target's subconscious."
      },
      {
        id: 6,
        title: "Pulp Fiction",
        rate: 5,
        genre: "crime, drama",
        img: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
        description: "A skilled thief with the rare ability to 'extract' information from people's minds takes on the inverse task of 'inception', planting another person's idea into a target's subconscious."
      },
      {
        id: 7,
        title: "Forrest Gump",
        rate: 4,
        genre: "drama, romance",
        img: "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
        description: "A skilled thief with the rare ability to 'extract' information from people's minds takes on the inverse task of 'inception', planting another person's idea into a target's subconscious."
      },
      {
        id: 8,
        title: "The Shawshank Redemption",
        rate: 5,
        genre: "drama",
        img: "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
        description: "A skilled thief with the rare ability to 'extract' information from people's minds takes on the inverse task of 'inception', planting another person's idea into a target's subconscious."
      },
      {
        id: 9,
        title: "Goodfellas",
        rate: 5,
        genre: "biography, crime, drama",
        img: "https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
        description: "A skilled thief with the rare ability to 'extract' information from people's minds takes on the inverse task of 'inception', planting another person's idea into a target's subconscious."
      },

  ];

  const movie = allMovies.find(m => m.id === parseInt(id));

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div className="movie-detail">
      <button onClick={() => navigate(-1)} className="back-button">← Back</button>
      <img src={movie.img} alt={movie.title} className="movie-poster" />
      <h1>{movie.title}</h1>
      <p className="movie-genre">{movie.genre}</p>
      <p className="movie-description">{movie.description}</p>
    </div>
  );
};

export default DetailMovie;