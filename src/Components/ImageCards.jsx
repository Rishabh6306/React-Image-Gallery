import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from './Image';
import { Link } from 'react-router-dom';

function ImageCard() {
    const [data, setData] = useState([]);

    async function fetchData() {
        try {
            const response = await axios.get('https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=20');
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <Link to="/detailPage">
           <div className="grid gap-4 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2" >
            {data.photos && data.photos.map(photo => (
                <Image key={photo.id} id={photo.id} url={photo.url} title={photo.title} author={photo.author} location={photo.location} category={photo.category} />
            ))}
            </div>
    </Link>
    );
}

export default ImageCard;