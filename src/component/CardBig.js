//src/component/CardBig.js

import { AiFillStar } from "react-icons/ai";
import "./CardBig.css";

export default function CardBig(props) {
  return (
    <div className="containerBig">
      <img src={props.img} alt="" className="posterBig" />
      <div className="descriptionBig">
        <div>
          <p id="title">{props.title}</p>
          <p id="genre">{props.genre}</p>
        </div>
        <div className="stars">
          {[...Array(5)].map((_, index) => (
            <AiFillStar key={index} color={props.color} size={props.size} />
          ))}
        </div>
      </div>
    </div>
  );
}

