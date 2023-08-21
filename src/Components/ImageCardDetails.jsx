import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function ImageCardDetails() {
  const [photo, setPhoto] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.slingacademy.com/v1/sample-data/photos/${id}`);
        setPhoto(response.data.photo);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
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