import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getShowById } from '../api/tvmaze';

function Show() {
  const { showId } = useParams();
  const [showData, setShowData] = useState(null);
  const [showError, setShowError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getShowById(showId);
        setShowData(data);
      } catch (error) {
        setShowError(error);
      }
    }

    fetchData();
  }, [showId]);

  if (showData) {
    return <p>Got show data: {showData.name}</p>;
  }

  if (showError) {
    return <p>We have an error: {showError.message}</p>;
  }

  return <div>Loading...</div>;
}

export default Show;
