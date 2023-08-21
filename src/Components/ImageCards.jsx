import React, { useState, useEffect } from 'react';
import Image from './Image';
import fetchData from '../utils/fetchdata';

function ImageCard() {
    const [data, setData] = useState([]);

    useEffect(() => {
        // fetchData From Utils 
        fetchData(setData);
    }, []);

    return (
        <div className="grid gap-4 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2" >
            {data.photos && data.photos.map(photo => (
                <Image key={photo.id} id={photo.id} url={photo.url} title={photo.title} author={photo.author} location={photo.location} category={photo.category} />
            ))}
        </div>
    );
}

export default ImageCard;