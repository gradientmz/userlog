import React from "react";
import "./card.styles.css";

export const Card = (props) => (
  <div className="card-container">
    <img
      alt="user"
      src={`https://avatars.dicebear.com/api/male/:${props.user.name}.svg`}
    />
    <h1> {props.user.name} </h1>
    <p> {props.user.email} </p>
  </div>
);
