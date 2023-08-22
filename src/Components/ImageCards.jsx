import React, { useState, useEffect } from 'react';
import Image from './Image';
import fetchData from '../utils/fetchdata';

function ImageCard({ heading }) {
    const [data, setData] = useState([]);
    
    
    const [offset, setOffset] = useState(0);
    const handleNextClick = () => {
        setOffset(offset + 20);
    };
    
    const handlePreviousClick = () => {
        if (offset >= 20) {
            setOffset(offset - 20);
        }
    };
    
    useEffect(() => {
        fetchData(setData, offset);
    }, [offset]);

    return (
        <>
            <h1 className='text-center my-6 mt-10 sm:my-14 text-3xl md:text-5xl'>{heading}</h1>
            <div className="grid gap-4 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
                {data.photos && data.photos.map(photo => (
                    <Image key={photo.id} id={photo.id} url={photo.url} title={photo.title} author={photo.author} location={photo.location} category={photo.category} />
                ))}
            </div>
            <div className="flex justify-center mt-4">
                <button
                    onClick={handlePreviousClick}
                    disabled={offset === 0}
                    className="px-4 py-2 bg-gray-300 rounded-md mr-2"
                >
                    Previous
                </button>
                <button
                    onClick={handleNextClick}
                    disabled={!data.photos || data.photos.length < 20}
                    className="px-4 py-2 bg-gray-300 rounded-md"
                >
                    Next
                </button>
            </div>
        </>
    );
}

export default ImageCard;