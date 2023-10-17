import ShowCard from './ShowCard';
import { useEffect, useReducer } from 'react';

// {type: 'STAR', showId: ''}

// {type: 'UNSTAR', showId: ''}

const usePersistedReducer = (reducer, initialState, localStorageKey) => {
  const [state, dispatch] = useReducer(reducer, initialState, initial => {
    const persistedValue = localStorage.getItem(localStorageKey);

    return persistedValue ? JSON.parse(persistedValue) : initial;
  });
  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(state));
  }, [state, localStorageKey]);

  return [state, dispatch];
};

const starredShowReducer = (currentStarred, action) => {
  switch (action.type) {
    case 'STAR':
      return currentStarred.concat(action.showId);
    case 'UNSTAR':
      return currentStarred.filter(showId => showId != action.showId);
    default:
      return currentStarred;
  }
};

function ShowGrid({ shows }) {
  const [starredShows, dispatchStarred] = usePersistedReducer(
    starredShowReducer,
    [],
    'starredShows'
  );

  console.log(starredShows);

  const onStarMeClick = showId => {
    const isStarred = starredShows.includes(showId);

    isStarred
      ? dispatchStarred({ type: 'UNSTAR', showId })
      : dispatchStarred({ type: 'STAR', showId });
  };

  return (
    <div>
      {shows.map(data => (
        <ShowCard
          key={data.show.id}
          name={data.show.name}
          image={
            data.show.image ? data.show.image.medium : '/not-found-image.png'
          }
          id={data.show.id}
          summary={data.show.summary}
          onStarClick={onStarMeClick}
        />
      ))}
    </div>
  );
}

export default ShowGrid;
