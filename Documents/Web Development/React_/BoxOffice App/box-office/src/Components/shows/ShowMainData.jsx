import React from 'react';

function ShowMainData({ name, image, rating, summary, genres }) {
  return (
    <div>
      <img src={image ? image.original : '/not-found-image.png'} alt={name} />

      <div>
        <h1>{name}</h1>
        <div>{rating.average || 'N/A'}</div>

        <div dangerouslySetInnerHTML={{ __html: summary }} />

        <div>
          Genres:
          <div>
            {genres.map(genre => (
              <span key={genre}>
                {genre}
                <br></br>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowMainData;
