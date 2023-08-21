import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import fetchDataDetails from '../utils/fetchDataDetails';

function ImageCardDetails() {
  const [photo, setPhoto] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetchDataDetails(setPhoto, id);
  }, [id]);


  return (
    <div>
      <Link to="/" className="text-2xl text-red-500 hover:underline my-4">
        Home
      </Link>
      {Object.keys(photo).length > 0 && (
        <div>
          <h2>Photo Details</h2>
          <div>
            <img src={photo.url} alt={photo.title} />
            <div>Title: {photo.title}</div>
            <div>Description: {photo.description}</div>
            {/* Render other photo details as needed */}
          </div>
        </div>
      )}
    </div>
  );
}

export default ImageCardDetails;