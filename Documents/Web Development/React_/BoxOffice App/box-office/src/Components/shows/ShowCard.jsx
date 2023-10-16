import React from 'react';
import { Link } from 'react-router-dom';

function ShowCard({ name, image, id, summary }) {
  const summaryStripped = summary
    ? summary.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, ' ')
    : 'No Description';

  return (
    <div>
      <img src={image} alt={name} />
      <h1>{name}</h1>

      <p>{summaryStripped}</p>

      <div>
        <a href={`/show/${id}`} target="_blank" rel="noreferrer">
          Read More
        </a>
        <button type="button">Star me</button>
      </div>
    </div>
  );
}

export default ShowCard;
