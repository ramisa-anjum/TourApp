import React from 'react';
import './style.scss';

function Card(props) {
  return(
    <div className="card">
      <div className="title">
        <h2>{props.title}</h2>
      </div>

      <img src={props.image} />

      <div className="description">
        <p>
          {props.desc}
        </p>
      </div>
    </div>
  )
}

export default Card;