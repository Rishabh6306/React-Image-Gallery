import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import fetchDataDetails from '../utils/fetchDataDetails';
import ImageCard from './ImageCards';

function ImageCardDetails() {
  const [photo, setPhoto] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetchDataDetails(setPhoto, id);
window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
}, [id]);

  return (
    <>
      <div className='bg-blue-900 text-white py-10 px-2 lg:p-10 rounded-2xl'>
        <Link to="/" className="text-2xl float-left my-4 text-red-500 hover:underline">
          Home
        </Link>
        {Object.keys(photo).length > 0 && (
          <div>
            <h1 className='text-center text-yellow-600 underline decoration-dashed my-6 mt-20 sm:my-14 text-3xl md:text-5xl'>Details Page</h1>
            <div className='flex flex-col sm:flex-row mt-1 sm:mt-14 w-full md:w-5/6'>
              <img src={photo.url} alt={photo.title} className="custom-box-shadow sm:h-60 xl:h-96 rounded-3xl mx-4 p-1" />
              <div className='flex flex-col justify-center mt-10 ml-4 lg:ml-20'>
                <h1 className='text-3xl lg:text-4xl xl:text-5xl tracking-wider leading-snug font-semibold '>{photo.description}</h1>
                <p className='mt-5 text-2xl tracking-wider'>{photo.title}</p>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className='my-20'>
        <h1 className='my-14 text-center text-5xl text-cyan-900'>Related Images</h1>
        <ImageCard id={id} setPhoto={setPhoto}/>
      </div>
    </>
  );
}

export default ImageCardDetails;