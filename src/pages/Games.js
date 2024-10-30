// src/pages/Movie.js

import React, { useEffect, useState, Fragment } from "react";
import { Link } from "react-router-dom";
import CardBig from "../component/CardBig";
import CardSmall from "../component/CardSmall";
import "./Games.css";

export default function Movie() {
  const STAR_COLOR = "rgb(220, 117, 21)";
  const STAR_SIZE = 20;
  const [topGames, setTopGames] = useState([]);
  const [allGames, setAllGames] = useState([]);

  // Fetch games data on component mount
  useEffect(() => {
    const apiKey = '08897a73827744c98e07ad0e49bf94b7'; // Replace with your actual RAWG API key
    fetch(`https://api.rawg.io/api/games?key=${apiKey}`)
      .then((response) => response.json())
      .then((data) => {
        // Set the top games and all games
        setTopGames(data.results.slice(0, 3)); // First 3 games for top games
        setAllGames(data.results.slice(3)); // Rest for all games
      })
      .catch((error) => console.error('Error fetching games:', error));
  }, []);

  return (
    <>
      <p id="movies">Top Games</p>
      <div className="containerTop">
        {topGames.map((game) => (
          <Fragment key={game.id}>
            <Link to={`/game/detail/${game.id}`} className="movie-link">
              <CardBig
                title={game.name}
                img={game.background_image}
                genre={game.genres.map((genre) => genre.name).join(", ")}
                size={STAR_SIZE}
                color={STAR_COLOR}
              />
            </Link>
          </Fragment>
        ))}
      </div>
      <div className="rowcoba">
        <div className="column">
          <p id="movies">All Games</p>
          {allGames.map((game) => (
            <Fragment key={game.id}>
              <Link to={`/game/detail/${game.id}`} className="movie-link">
                <CardSmall
                  title={game.name}
                  img={game.background_image}
                  genre={game.genres.map((genre) => genre.name).join(", ")}
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
