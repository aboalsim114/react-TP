import React from 'react';

export default function Card(props) {
  return (
    <div className="Card">
      <h1>{props.title}</h1>
      <p>{props.content} </p>
      <button onClick={props.Delete} className="Deletebtn">
        Supprimer
      </button>
    </div>
  );
}
